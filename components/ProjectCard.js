import Image from "next/image";

export default function ProjectCard(props) {
  return (
    <div className="aspect-square relative flex flex-col items-center rounded-xl border-2 border-red-200 p-2">
      <h2 className="text-lg sm:text-base text-white mb-2">{props.projectTitle}</h2>
      <p className="text-sm mb-2">{props.description}</p>
      <div className="">
        <Image height={100} width={100} src={props.imgSrc}></Image>
      </div>
    </div>
  );
}
