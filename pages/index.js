import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";
import Header from "../components/Header.js";
import Navbar from "../components/Navbar.js";
import Projects from "../components/Projects.js";
import SkillsInterests from "../components/SkillsInterests.js";
import Footer from "../components/Footer.js";
import LatestBlogPosts from "../components/LatestBlogPosts.js";

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
      posts: posts
        .sort((a, b) => {
          return new Date(b.frontMatter.date) - new Date(a.frontMatter.date);
        })
        .slice(0, 3),
    },
  };
}

export default function Home(props) {
  const { posts } = props;

  return (
    <div className="flex flex-col justify-center items-center px-8">
      <Head>
        <meta property="og:title" content="LinkFrost"></meta>
        <meta property="og:description" content="Personal site, portfolio, and blog for Ashir Imran."></meta>
        <meta property="og:image" content="img/Cropped.png"></meta>
        <title>LinkFrost</title>
      </Head>
      <Navbar></Navbar>
      <main className="overflow-y-scroll flex flex-col justify-center lg:max-w-3xl  w-full">
        <Header></Header>
        <SkillsInterests></SkillsInterests>
        <Projects></Projects>
        <LatestBlogPosts posts={posts}></LatestBlogPosts>
      </main>
      <Footer></Footer>
    </div>
  );
}
