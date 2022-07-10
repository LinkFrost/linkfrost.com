import Header from "../components/Header.js";
import Navbar from "../components/Navbar.js";
import DividerLine from "../components/DividerLine.js";
import Projects from "../components/Projects.js";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center px-8">
      <Navbar></Navbar>
      <main className="overflow-y-scroll flex flex-col justify-center max-w-3xl w-full">
        <Header></Header>
        <Projects></Projects>
      </main>
    </div>
  );
}
