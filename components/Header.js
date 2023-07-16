import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row justify-between content-center max-w-3xl mt-5 mb-5 w-full border-b-0 border-red-200 border-opacity-100">
      <div className="flex flex-col pr-8">
        <h1 className="font-bold text-3xl sm:text-5xl text-red-200">Ashir Imran</h1>
        <h2 className="text-xl sm:text-3xl text-red-400 mb-5">aka LinkFrost</h2>
        <p className="mb-5 max-w-md">
          Hello there! My name's Ashir, I'm a CS alumni from UMass Amherst, and I'm currently a Software Engineer at <span className="text-green-400 font-semibold">Citizens Bank</span>. I also dabble in some other hobbies, such as music, movies, and video games, which you can read about in the blog
          section.
        </p>
      </div>
      <div className="flex justify-center sm:block mb-5">
        <Image className="shadow rounded-full" src="/img/ImranAshir.jpg" height={200} width={200}></Image>
      </div>
    </div>
  );
}
