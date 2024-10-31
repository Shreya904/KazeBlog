import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const BlogEdit = () => {
  const { id } = useParams();
  const history = useHistory();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    author: "",
  });

  useEffect(() => {
    // Fetch the current blog data
    fetch(`http://localhost:8000/blogs/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not fetch blog data.");
        }
        return response.json();
      })
      .then((data) => {
        setBlog(data);
        setFormData({
          title: data.title,
          body: data.body,
          author: data.author,
        });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PUT", // or "PATCH" if you prefer
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        history.push(`/blogs/${id}`); // Redirect to the blog details page after update
      })
      .catch((err) => {
        console.error("Error updating blog:", err);
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="max-w-[700px] mx-auto px-[20px] py-[30px] bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-[#f1356d] mb-[10px]">Edit Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-gray-300 mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-800 text-gray-300"
            required
          />
        </div>
        <div>
          <label htmlFor="author" className="block text-gray-300 mb-1">
            Author
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-800 text-gray-300"
            required
          />
        </div>
        <div>
          <label htmlFor="body" className="block text-gray-300 mb-1">
            Body
          </label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            rows="5"
            className="w-full p-2 rounded-md bg-gray-800 text-gray-300"
            required
          />
        </div>
        <button
          type="submit"
          className="px-[16px] py-[8px] bg-[#4caf50] text-white font-semibold rounded-md hover:bg-[#45a049] transition-colors duration-200"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default BlogEdit;
