import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { database } from "./utils/appwrite"; // Import the existing client and database setup

const BlogEdit = () => {
  const { id } = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    author: "",
  });
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog data from Appwrite
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await database.getDocument(
          "blogsapp", // Replace with your Appwrite database ID
          "blogs", // Replace with your Appwrite collection ID
          id
        );
        setFormData({
          title: response.title,
          body: response.body,
          author: response.author,
        });
        setIsPending(false);
      } catch (err) {
        setError("Error fetching blog: " + err.message);
        setIsPending(false);
      }
    };
    fetchBlog();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission (update blog in Appwrite)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedBlog = {
        title: formData.title,
        body: formData.body,
        author: formData.author,
      };

      // Update the document in Appwrite
      await database.updateDocument(
        "blogsapp", // Replace with your Appwrite database ID
        "blogs", // Replace with your Appwrite collection ID
        id,
        updatedBlog
      );

      // Redirect to the blog detail page
      history.push(`/blogs/${id}`);
    } catch (err) {
      setError("Error updating blog: " + err.message);
    }
  };

  if (isPending) return <div className="text-gray-500">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="max-w-[700px] mx-auto px-[20px] py-[30px] bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-[#f1356d] mb-5">Edit Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-gray-300 mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4caf50]"
            required
          />
        </div>
        <div>
          <label htmlFor="author" className="block text-gray-300 mb-2">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4caf50]"
            required
          />
        </div>
        <div>
          <label htmlFor="body" className="block text-gray-300 mb-2">
            Body
          </label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            rows="6"
            className="w-full p-3 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4caf50]"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-[#4caf50] text-white font-semibold rounded-md hover:bg-[#45a049] transition duration-200"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default BlogEdit;
