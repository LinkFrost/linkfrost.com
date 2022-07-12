import Head from "next/head";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center px-8 pb-16">
      <Head>
        <title>Blog - LinkFrost</title>
      </Head>
      <Navbar></Navbar>
      <main className="flex flex-col justify-center items-center max-w-3xl w-full">
        <div className="">
          <h1 className="font-bold text-6xl">Under Construction!</h1>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
