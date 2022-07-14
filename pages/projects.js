import Head from "next/head";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Projects from "../components/Projects.js";

export default function ProjectsPage(props) {
  const { posts } = props;

  return (
    <div className="flex flex-col justify-center items-center px-8">
      <Head>
        <meta property="og:title" content="Projects - LinkFrost"></meta>
        <meta property="og:description" content="Project Portfolio"></meta>
        <meta property="og:image" content="img/Cropped.png"></meta>
        <title>Projects - LinkFrost</title>
      </Head>
      <Navbar></Navbar>
      <main className="overflow-y-scroll flex flex-col justify-center lg:max-w-3xl sm:max-w-2xl w-full">
        <Projects></Projects>
      </main>
      <Footer></Footer>
    </div>
  );
}
