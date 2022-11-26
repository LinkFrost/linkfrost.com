export default function SkillsInterests() {
  return (
    <div className="flex flex-col justify-between content-center max-w-3xl mb-5 w-full border-b-0 border-red-200 border-opacity-100">
      <h2 className="font-bold text-xl sm:text-3xl text-white mb-5">Skills and Interests</h2>
      <div className="flex justify-center">
        <h2 className="text-md sm:text-xl text-white mb-3">Programming Languages & SWE Tools</h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-rows-2 sm:grid-cols-5 md:grid-rows-none md:grid-cols-9 md:gap-10 gap-12 justify-between m-auto mb-5">
        <img style={{ position: "relative", height: "50px", width: "auto" }} src="/img/JSLogo.png" alt="Javascript"></img>
        <img style={{ position: "relative", height: "50px", width: "auto" }} src="/img/HTMLLogo.png" alt="HTML"></img>
        <img style={{ position: "relative", height: "50px", width: "auto" }} src="/img/CSSLogo.png" alt="CSS"></img>
        <img style={{ position: "relative", height: "50px", width: "auto" }} src="/img/ReactLogo.png" alt="React"></img>
        <img style={{ position: "relative", height: "50px", width: "auto" }} src="/img/PythonLogo.png" alt="Python"></img>
        <img style={{ position: "relative", height: "50px", width: "auto" }} src="/img/CLogo.png" alt="C"></img>
        <img style={{ position: "relative", height: "50px", width: "auto" }} src="/img/JavaLogo.png" alt="Java"></img>
        <img style={{ position: "relative", height: "50px", width: "auto" }} src="/img/MongoDBLogo.png" alt="MongoDB"></img>
        <img style={{ position: "relative", height: "50px", width: "auto" }} src="/img/PostgreSQLLogo.png" alt="PostgreSQL"></img>
      </div>
      <div className="flex justify-center">
        <h2 className="text-md sm:text-xl text-white mb-2">Areas of Interest</h2>
      </div>
      <div className="inline-grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-5 text-gray-400 mb-5">
        <p className="flex justify-center align-center">Full Stack Web Development</p>
        <p className="flex justify-center align-center">Artificial Intelligence</p>
        <p className="flex justify-center align-center">Machine Learning</p>
        <p className="flex justify-center align-center">Mobile App Development</p>
        <p className="flex justify-center align-center">Reverse Engineering</p>
        <p className="flex justify-center align-center">UI/UX Design</p>
      </div>
    </div>
  );
}
