import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import { database } from "./utils/appwrite"; // Import the Appwrite database instance

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blogs from the Appwrite database
    const fetchBlogs = async () => {
      try {
        setIsPending(true);
        setError(null);

        // Replace "your-database-id" and "your-collection-id" with actual IDs
        const response = await database.listDocuments(
          "blogsapp", // Database ID
          "blogs" // Collection ID
        );

        setBlogs(response.documents); // Set the retrieved documents as blogs
        setIsPending(false);
      } catch (err) {
        setError("Could not fetch blogs. Please try again later.");
        setIsPending(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="home">
      {error && <div className="text-red-500">{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
