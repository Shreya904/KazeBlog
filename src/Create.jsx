import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      //in json server this is how we make a post request
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#f1356d]">
        Add a New Blog
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-[#f1356d] font-semibold">
          Blog title:
        </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#f1356d]"
        />

        <label className="block text-[#f1356d] font-semibold">Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#f1356d]"
        ></textarea>

        <label className="block text-[#f1356d] font-semibold">
          Blog author:
        </label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#f1356d]"
        />

        {!isPending && (
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-[#f1356d] rounded hover:bg-pink-600 transition duration-200"
          >
            Add Blog
          </button>
        )}
        {isPending && (
          <button
            disabled
            type="submit"
            className="w-full py-2 mt-4 text-white bg-[#f1356d] rounded hover:bg-pink-600 transition duration-200"
          >
            Adding blog...
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
