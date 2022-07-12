import Header from "../components/Header.js";
import Navbar from "../components/Navbar.js";
import Projects from "../components/Projects.js";
import SkillsInterests from "../components/SkillsInterests.js";
import Footer from "../components/Footer.js";
import LatestBlogPosts from "../components/LatestBlogPosts.js";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center px-8">
      <Navbar></Navbar>
      <main className="overflow-y-scroll flex flex-col justify-center lg:max-w-3xl sm:max-w-2xl w-full">
        <Header></Header>
        <SkillsInterests></SkillsInterests>
        <Projects></Projects>
        <LatestBlogPosts></LatestBlogPosts>
      </main>
      <Footer></Footer>
    </div>
  );
}
