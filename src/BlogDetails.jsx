import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { database } from "./utils/appwrite";

const BlogDetails = () => {
  const { id } = useParams(); // Extract the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetchBlog = async () => {
      setIsPending(true);
      setError(null);

      console.log("Fetching document with ID:", id); // Debugging
      try {
        const response = await database.getDocument(
          "blogsapp", // Database ID
          "blogs", // Collection ID
          id // Document ID
        );
        console.log("Document fetched:", response);
        setBlog(response);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to fetch the blog. Please try again.");
      } finally {
        setIsPending(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    try {
      await database.deleteDocument("blogsapp", "blogs", id);
      history.push("/"); // Redirect to home after deletion
    } catch (err) {
      console.error("Error deleting blog:", err);
      setError("Failed to delete the blog. Please try again.");
    }
  };

  const handleEdit = () => {
    history.push(`/edit/${id}`); // Navigate to the edit page
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
