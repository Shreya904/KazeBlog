import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list max-w-[600px] mx-auto px-[20px]">
      <h2 className="text-xl font-semibold text-pink-300 mb-[20px]">{title}</h2>
      {blogs.map((blog) => (
        <div
          className="blog-preview p-[16px] mb-[16px] bg-black rounded-lg border border-gray-800 shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in-out"
          key={blog.id}
        >
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="text-xl font-bold text-pink-400 mb-[4px] transition-colors duration-200 ease-in-out hover:text-pink-300">
              {blog.title}
            </h2>
            <p className="text-gray-400">Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
