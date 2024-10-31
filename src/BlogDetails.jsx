import { useParams, useHistory } from "react-router-dom";
import useFetch from "./usefetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  const handleEdit = () => {
    // Navigate to the edit page, assuming the route is /edit/:id
    history.push(`/edit/${blog.id}`);
  };

  return (
    <div className="blog-details max-w-[700px] mx-auto px-[20px] py-[30px] bg-gray-900 rounded-lg shadow-md">
      {isPending && <div className="text-gray-500">Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {blog && (
        <article className="text-gray-300">
          <h2 className="text-3xl font-bold text-[#f1356d] mb-[10px]">
            {blog.title}
          </h2>
          <p className="text-gray-400 mb-[20px]">Written by {blog.author}</p>
          <div className="text-gray-300 leading-relaxed mb-[20px]">
            {blog.body}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleEdit}
              className="px-[16px] py-[8px] bg-[#4caf50] text-white font-semibold rounded-md hover:bg-[#45a049] transition-colors duration-200"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-[16px] py-[8px] bg-[#f1356d] text-white font-semibold rounded-md hover:bg-[#d02450] transition-colors duration-200"
            >
              Delete
            </button>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
