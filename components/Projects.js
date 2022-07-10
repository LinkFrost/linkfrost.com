import ProjectCard from "./ProjectCard.js";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="flex flex-col justify-between content-center max-w-3xl mb-5">
      <h2 className="text-xl sm:text-3xl text-white mb-5">Projects</h2>

      <div className="grid grid-cols-3 gap-6 justify-between">
        <ProjectCard projectTitle="LoneMusic" description="Social media website for uploading song instrumentals and vocal covers." imgSrc="/img/GroupQuotesLogo.jpg"></ProjectCard>
        <ProjectCard projectTitle="Group Quotes Bot" description="Discord bot for saving quotations to a database, and viewing them back in a server." imgSrc="/img/LoneMusicLogo.png"></ProjectCard>
        {/* <ProjectCard projectTitle="Portion Control Resources" description="Simple SPA for displaying five resources with custom drop down menus."></ProjectCard> */}
      </div>
    </div>
  );
}
