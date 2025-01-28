// api/blogs.js
import { Client, Databases, ID } from "appwrite";

const client = new Client();
client
  .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)
  .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);

const database = new Databases(client);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await database.createDocument(
        "blogs", // Replace with your collection ID
        ID.unique(), // Automatically generate unique ID for each blog
        req.body // Use the request body for the blog data
      );
      res.status(201).json(response); // Return the response back to the client
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to create blog", details: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" }); // If the method is not POST
  }
}
