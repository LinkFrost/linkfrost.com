import BlogFeed from "./BlogFeed.js";

export default function LatestBlogPosts(props) {
  const { posts } = props;

  return (
    <div className="flex flex-col justify-between content-center max-w-3xl mb-5 w-full border-b-0 border-red-200 border-opacity-100">
      <h2 className="font-bold text-xl sm:text-3xl text-white mb-5">Latest Posts ✍🏼</h2>
      {posts.map((post, index) => (
        <BlogFeed key={index} post={post}></BlogFeed>
      ))}
    </div>
  );
}
