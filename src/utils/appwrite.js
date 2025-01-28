import { Client, Databases } from "appwrite";

export const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // For Vite
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // For Vite

export const database = new Databases(client);
export { ID } from "appwrite";
