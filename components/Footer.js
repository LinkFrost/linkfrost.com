export default function Footer() {
  return (
    <div className="flex justify-between bottom-0 lg:max-w-3xl sm:max-w-2xl w-full z-10 bg-neutral-900 bg-opacity-100 py-4">
      <a href="https://github.com/LinkFrost" target="_blank" rel="noreferrer">
        <img className="shadow-md shadow-black hover:shadow-xl hover:shadow-zinc-800" style={{ height: "40px", width: "auto" }} src="/img/GithubLogo.png" alt="Javascript" href=""></img>
      </a>
      <div>
        <p className="flex justify-center content-center items-center">Let's get in touch!</p>
      </div>
      <a href="https://www.linkedin.com/in/ashir-imran-6b73611b8/" target="_blank" rel="noreferrer">
        <img className="shadow-md shadow-black hover:shadow-xl hover:shadow-zinc-800" style={{ height: "40px", width: "auto" }} src="/img/LinkedInLogo.png" alt="Javascript"></img>
      </a>
    </div>
  );
}
