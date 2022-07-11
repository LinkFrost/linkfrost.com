import Image from "next/image";

export default function ProjectCard(props) {
  return (
    <div className="sm:aspect-square relative flex flex-col items-center rounded-xl border-4 border-red-200 bg-neutral-900 shadow-md shadow-black hover:shadow-xl hover:shadow-zinc-800 p-2">
      <h2 className="text-lg sm:text-base text-white mb-2">{props.projectTitle}</h2>
      <img className="mb-2" style={{ height: "90px", width: "auto" }} src={props.imgSrc}></img>
      <p className="text-sm mb-2">{props.description}</p>
      <div className="flex justify-between space-x-8">
        {props.link && (
          <a className="text-blue-400" href={props.link} target="_blank">
            Link
          </a>
        )}
        {props.repo && (
          <a className="text-gray-300" href={props.repo} target="_blank">
            Repository
          </a>
        )}
      </div>
    </div>
  );
}
