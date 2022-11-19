import Link from "next/link";

export default function BlogFeed({ post }) {
  const { title, date, category, excerpt, cover_image } = post.frontMatter;

  let categoryColor = "";

  switch (category) {
    case "music":
      categoryColor = "bg-red-700";
      break;
    case "cs":
      categoryColor = "bg-blue-700";
      break;
    default:
      categoryColor = "bg-gray-700";
  }

  return (
    <div className="flex flex-col bg-neautral-900 border-1 rounded-xl border-red-200 bg-neutral-800 shadow-md p-3 mb-5">
      <Link href={`/blog/${post.slug}`}>
        <a>
          <h2 className="font-bold text-xl sm:text-3xl text-white hover:text-blue-400 mb-1">{title}</h2>
        </a>
      </Link>
      <div className="flex items-center space-x-4 mb-3">
        <h4 className="text-md sm:text-lg text-white">{date}</h4>
        <div className={`flex ${categoryColor} rounded-lg max-w-fit m-0 pt-0 pb-1 px-2`}>
          <h1 className="text-sm sm:text-md text-white">{category}</h1>
        </div>
      </div>
      <p>{excerpt}</p>
    </div>
  );
}
