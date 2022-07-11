export default function Footer() {
  return (
    <div className="fixed flex justify-between bottom-0 max-w-3xl w-full z-10 bg-neutral-900 bg-opacity-100 py-4">
      <a href="https://github.com/LinkFrost">
        <img style={{ height: "50px", width: "auto" }} src="/img/GithubLogo.png" alt="Javascript" href=""></img>
      </a>
      <p className="flex justify-center align-center items-center">Let's get in touch!</p>
      <a href="https://www.linkedin.com/in/ashir-imran-6b73611b8/">
        <img style={{ height: "50px", width: "auto" }} src="/img/LinkedInLogo.png" alt="Javascript"></img>
      </a>
    </div>
  );
}
