import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import path from "path";
import Head from "next/head";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";

export async function getStaticPaths() {
  const mdFiles = fs.readdirSync(path.join("posts"));

  const paths = mdFiles.map((f) => ({
    params: {
      slug: f.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(props) {
  const { params } = props;
  const slug = params.slug;

  const mdWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");
  const { data: frontMatter, content } = matter(mdWithMeta);

  return {
    props: {
      slug,
      frontMatter,
      content,
    },
  };
}

export default function BlogPostPage({ slug, frontMatter, content }) {
  const { title, date, category, cover_image, excerpt } = frontMatter;

  console.log(marked(content));

  return (
    <div className="flex flex-col justify-center items-center px-8">
      <Head>
        <meta property="og:title" content={title}></meta>
        <meta property="og:description" content={excerpt}></meta>
        <meta property="og:image" content="img/Cropped.png"></meta>
        <title>{title} - LinkFrost</title>
      </Head>
      <Navbar></Navbar>
      <main className="overflow-y-scroll flex flex-col justify-center lg:max-w-3xl sm:max-w-2xl w-full mt-5 mb-5">
        <h1 className="font-bold text-3xl sm:text-5xl text-white mb-3">{title}</h1>
        <div className="flex items-center space-x-4 mb-5">
          <h4 className="text-md sm:text-lg text-white">{date}</h4>
          <div className="flex bg-red-100 rounded-xl max-w-fit m-0 pt-0 pb-1 px-2">
            <h1 className="text-sm sm:text-md text-black">{category}</h1>
          </div>
        </div>
        <img style={{ height: "auto", width: "300px", objectFit: "contain" }} src={cover_image}></img>
        <div className="markdown">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
