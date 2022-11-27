export default function ProjectCard(props) {
  return (
    <div className="relative max-w-md md:max-w-full flex flex-col items-center rounded-xl border-black bg-neutral-800 shadow-md p-4">
      <h2 className="text-xl font-semibold sm:text-base text-white -mt-2">{props.projectTitle}</h2>
      <div className=" flex justify-between space-x-8 mb-2">
        {props.link && (
          <a className="text-blue-400 hover:text-blue-100" href={props.link} target="_blank" rel="noreferrer">
            Link
          </a>
        )}
        {props.repo && (
          <a className="text-gray-300 hover:text-gray-100" href={props.repo} target="_blank" rel="noreferrer">
            Repository
          </a>
        )}
      </div>
      <div className="flex justify-center">
        <img className="mb-2" style={{ height: "90px", width: "auto" }} src={props.imgSrc}></img>
      </div>
      <p className="text-sm">{props.description}</p>
    </div>
  );
}
