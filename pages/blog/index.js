import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import BlogFeed from "../../components/BlogFeed.js";
import { useState, useEffect } from "react";

export async function getStaticProps() {
  const mdFiles = fs.readdirSync(path.join("posts")).filter((m) => m !== ".DS_Store");

  const posts = mdFiles.map((f) => {
    const slug = f.replace(".md", "");
    const mdMetadata = fs.readFileSync(path.join("posts", f), "utf-8");
    const { data: frontMatter } = matter(mdMetadata);

    return {
      slug,
      frontMatter,
    };
  });

  return {
    props: {
      posts: posts.sort((a, b) => {
        return new Date(b.frontMatter.date) - new Date(a.frontMatter.date);
      }),
    },
  };
}

export default function Blog(props) {
  const { posts } = props;
  const [curPosts, setCurPosts] = useState(posts);
  const [category, setCategory] = useState("none");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setCurPosts(
      category === "none"
        ? posts
        : posts.filter((p) => {
            return p.frontMatter.category === category;
          })
    );
  }, [category]);

  let categories = new Set();

  for (const post of posts) {
    categories.add(post.frontMatter.category);
  }

  function Dropdown({ open, trigger, menu }) {
    return (
      <div>
        {trigger}
        {open ? (
          <ul className={`absolute`}>
            {menu.map((item, index) => (
              <li className="list-none bg-neutral-700 hover:bg-neutral-500" key={index}>
                <button
                  className="w-20 flex"
                  onClick={() => {
                    if (category === item) {
                      setCategory("none");
                    } else {
                      setCategory(item);
                    }

                    setOpen(false);
                  }}
                >
                  <p className="p-2">{item}</p>
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }

  let categoryColor = "";

  switch (category) {
    case "music":
      categoryColor = "bg-red-700";
      break;
    case "cs":
      categoryColor = "bg-blue-700";
      break;
    default:
      categoryColor = "bg-gray-700";
  }

  let filterColor = "";
  // if (open) filterColor = "bg-neutral-800";

  return (
    <div className="flex flex-col justify-center items-center px-8">
      <Head>
        <meta property="og:title" content="Blog - LinkFrost"></meta>
        <meta property="og:description" content="This is where I write about all sorts of things, though mainly it will be split between things in Computer Science and my thoughts on music I'm listening to."></meta>
        <meta property="og:image" content="img/Cropped.png"></meta>
        <title>Blog - LinkFrost</title>
      </Head>
      <Navbar></Navbar>
      <main className="flex flex-col justify-center max-w-3xl w-full mt-5">
        <h1 className="font-bold text-3xl sm:text-5xl text-red-300 mb-5">Blog</h1>
        <p className="mb-5">This is where I write about all sorts of things, though mainly it will be split between things in Computer Science, my thoughts on music I'm listening to.</p>
        <div className="flex items-center gap-x-8 mb-5">
          <h2 className="font-bold text-xl sm:text-3xl text-white">Posts</h2>
          <div>
            <Dropdown
              open={open}
              trigger={
                <div className="flex items-center gap-2">
                  <button onClick={() => setOpen(!open)}>
                    <h2 className={`font-semibold text-md sm:text-xl text-white ${filterColor} w-20 flex px-2`}>Filter:</h2>
                  </button>
                  {category}
                </div>
              }
              menu={["none"].concat(Array.from(categories))}
            ></Dropdown>
          </div>
        </div>
        <div className="flex flex-col mb-5">
          {curPosts.map((post, index) => (
            <BlogFeed key={index} post={post}></BlogFeed>
          ))}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
