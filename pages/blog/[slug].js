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

  if (slug !== undefined) {
    return {
      props: {
        slug,
        frontMatter,
        content,
      },
    };
  }
}

export default function BlogPostPage({ slug, frontMatter, content }) {
  const { title, date, category, cover_image, excerpt } = frontMatter;

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

  return (
    <div className="flex flex-col justify-center items-center px-8">
      <Head>
        <title>{title} - LinkFrost</title>
        <meta name="description" content={excerpt}></meta>

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={`https://www.linkfrost.com/blog/${slug}`}></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content={title}></meta>
        <meta property="og:description" content={excerpt}></meta>
        <meta property="og:image" content={cover_image}></meta>

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:domain" content="linkfrost.com"></meta>
        <meta property="twitter:url" content={`https://www.linkfrost.com/blog/${slug}`}></meta>
        <meta name="twitter:title" content={title}></meta>
        <meta name="twitter:description" content={excerpt}></meta>
        <meta name="twitter:image" content={cover_image}></meta>
      </Head>
      <Navbar></Navbar>
      <main className="flex flex-col justify-center max-w-3xl w-full mt-5 mb-5">
        <h1 className="font-bold text-3xl sm:text-5xl text-white mb-3">{title}</h1>
        <div className="flex items-center space-x-4 mb-5">
          <h4 className="text-md sm:text-lg text-white">{date}</h4>
          <div className={`flex ${categoryColor} rounded-md max-w-fit m-0 pt-0 pb-1 px-2`}>
            <h1 className="text-sm sm:text-md text-white">{category}</h1>
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
