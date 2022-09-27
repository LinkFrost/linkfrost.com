import Link from "next/link";

export default function BlogFeed({ post }) {
  const { title, date, category, excerpt, cover_image } = post.frontMatter;

  return (
    <div className="flex flex-col bg-neautral-900 border-1 rounded-xl border-red-200 bg-neutral-800 shadow-black shadow-md p-3 mb-5">
      <Link href={`/blog/${post.slug}`}>
        <h2 className="font-bold text-xl sm:text-3xl text-white hover:text-blue-400">{title}</h2>
      </Link>
      <div className="flex items-center space-x-4 mb-3">
        <h4 className="text-md sm:text-lg text-white">{date}</h4>
        <div className="flex bg-red-100 rounded-xl max-w-fit m-0 pt-0 pb-1 px-2">
          <h1 className="text-sm sm:text-md text-black">{category}</h1>
        </div>
      </div>
      <p>{excerpt}</p>
    </div>
  );
}
