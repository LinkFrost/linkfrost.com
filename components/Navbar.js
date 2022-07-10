export default function Navbar() {
  return (
    <div className="sticky top-0 max-w-3xl w-full z-10">
      <nav className="text-sm sm:text-base sticky top-0 z-10 flex items-center justify-between m-0 sm:space-x-28 px-16 h-16 max-w-3xl w-full bg-dark-bg bg-opacity-100">
        <a>Home</a>
        <a>Projects</a>
        <a>Resume</a>
        <a>Blog</a>
      </nav>
    </div>
  );
}
