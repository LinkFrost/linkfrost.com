import ProjectCard from "./ProjectCard.js";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="flex flex-col justify-between content-center border-b-2 border-red-200 max-w-3xl mb-5">
      <h2 className="font-bold text-xl sm:text-3xl text-white mb-5">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-between mb-5">
        <ProjectCard projectTitle="LoneMusic" description="Social media website for uploading song instrumentals and vocal covers." imgSrc="/img/LoneMusicLogo.png" link="https://lonemusic.herokuapp.com/" repo="https://github.com/joepetrillo/cs326-final-bullymaguire"></ProjectCard>
        <ProjectCard projectTitle="Group Quotes Bot" description="Discord bot for saving quotations to a database, and viewing them back in a server." imgSrc="/img/GroupQuotesLogo.jpg" repo="https://github.com/LinkFrost/Group-Quotes-Discord-Bot"></ProjectCard>
        <ProjectCard projectTitle="Portion Control Resources" description="Simple SPA for displaying five resources with custom drop down menus." imgSrc="/img/PortionControlLogo.png" link="https://portion-control-resources.herokuapp.com" repo="https://github.com/LinkFrost/Portion-Control-Resources"></ProjectCard>
      </div>
    </div>
  );
}
