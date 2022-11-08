import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import BlogFeed from "../../components/BlogFeed.js";

export async function getStaticProps() {
  const mdFiles = fs.readdirSync(path.join("posts"));

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

  return (
    <div className="flex flex-col justify-center items-center px-8">
      <Head>
        <meta property="og:title" content="Blog - LinkFrost"></meta>
        <meta property="og:description" content="This is where I write about all sorts of things, though mainly it will be split between things in Computer Science, my thoughts on music I'm listening to (primarily Hip-Hop!), and any other thing I feel like writing in length about."></meta>
        <meta property="og:image" content="img/Cropped.png"></meta>
        <title>Blog - LinkFrost</title>
      </Head>
      <Navbar></Navbar>
      <main className="flex flex-col justify-center lg:max-w-3xl sm:max-w-2xl w-full mt-5">
        <h1 className="font-bold text-3xl sm:text-5xl text-white mb-5">Blog</h1>
        <p className="mb-5">This is where I write about all sorts of things, though mainly it will be split between things in Computer Science, my thoughts on music I'm listening to (primarily Hip-Hop!), and any other thing I feel like writing in length about.</p>
        <h2 className="font-bold text-xl sm:text-3xl text-white mt-5 mb-5">Latest Posts</h2>
        <div className="flex flex-col mb-5">
          {posts.map((post, index) => (
            <BlogFeed key={index} post={post}></BlogFeed>
          ))}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
