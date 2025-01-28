import { Client, Databases } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67986711003bad2bc75c"); // Replace with your project ID

export const database = new Databases(client);
export { ID } from "appwrite";
