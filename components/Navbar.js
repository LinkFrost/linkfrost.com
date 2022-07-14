import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 max-w-3xl w-full z-10">
      <nav className="text-sm sm:text-base sticky top-0 z-10 flex items-center justify-between m-0 sm:space-x-28 px-16 h-16 max-w-3xl w-full bg-neutral-900 bg-opacity-100">
        <Link href="/">
          <a className="hover:text-blue-400">Home</a>
        </Link>
        <Link href="/projects">
          <a className="hover:text-blue-400">Projects</a>
        </Link>
        <a className="hover:text-blue-400" href="/AshirImranResume.pdf" target="_blank">
          Resume
        </a>
        <Link href="/blog">
          <a className="hover:text-blue-400">Blog</a>
        </Link>
      </nav>
    </div>
  );
}
