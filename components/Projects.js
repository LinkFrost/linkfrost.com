import ProjectCard from "./ProjectCard.js";

export default function Projects() {
  return (
    <div className="flex flex-col justify-between content-center border-b-0 border-red-200 max-w-3xl mb-5">
      <h2 className="font-bold text-xl sm:text-3xl text-white mb-5">Favorite Projects 🧑🏽‍💻</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-between mb-5">
          <ProjectCard
            projectTitle="letsthink"
            description="Need to guage feedback from your audience? Create an anonymous message board or poll and watch the results in real time."
            imgSrc="/img/letsthinkLogo.png"
            link="https://letsth.ink/"
            repo="https://github.com/LinkFrost/letsthink"
          ></ProjectCard>

          <ProjectCard projectTitle="LoneMusic" description="Social media website for uploading song instrumentals and vocal covers." imgSrc="/img/LoneMusicLogo.png" link="https://lonemusic.up.railway.app/" repo="https://github.com/LinkFrost/LoneMusic"></ProjectCard>

          <ProjectCard projectTitle="GroupQuotes" description="Discord bot for saving quotations and viewing them back in a server." imgSrc="/img/GroupQuotesLogo.jpg" repo="https://github.com/LinkFrost/Group-Quotes-Discord-Bot"></ProjectCard>

          {/* <ProjectCard
            projectTitle="Star Wars Explorer"
            description="A way to look up basic information about Star Wars characters, ships, movies, and more."
            imgSrc="/img/SWExplorerLogo.png"
            link="https://sw-explorer.linkfrost.com"
            repo="https://github.com/LinkFrost/Star-Wars-Explorer"
          ></ProjectCard>

          <ProjectCard projectTitle="EJMR Annotation Project" description="NLP task focused on classifying the toxicity of posts on the EJMR website." imgSrc="/img/CodeBracket.png" repo="https://github.com/LinkFrost/EJMR-Annotation-Project"></ProjectCard> */}
        </div>
      </div>
    </div>
  );
}
