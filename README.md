# KazeBlog

A simple CRUD application built with **React**, **Vite**, **Tailwind CSS**, and **Appwrite** for the backend. This app allows users to view, create, edit, and delete blog posts.

## Features

- View a list of blog posts
- View individual blog post details
- Create new blog posts
- Edit existing blog posts
- Delete blog posts

## Technologies Used

- **React**: A JavaScript library for building user interfaces
- **Vite**: A fast development build tool for modern web projects
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development
- **Appwrite**: A secure open-source backend as a service
- **React Router**: For client-side routing

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js) or **yarn**
- An **Appwrite** account (sign up at [https://cloud.appwrite.io](https://cloud.appwrite.io))

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Shreya904/KazeBlog.git
cd KazeBlog
```

### 2. Install Dependencies

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

### 3. Set Up Appwrite Backend

1. **Create an Appwrite Account**: Go to [https://cloud.appwrite.io](https://cloud.appwrite.io) and sign up for a free account.

2. **Create a New Project**:

   - Click "Create Project"
   - Give your project a name (e.g., "KazeBlog")
   - Copy the Project ID

3. **Create a Database**:

   - Navigate to "Databases" in your Appwrite console
   - Click "Create Database"
   - Name it (e.g., "blog-database")
   - Copy the Database ID

4. **Create a Collection**:

   - Inside your database, click "Create Collection"
   - Name it "blogs" or similar
   - Copy the Collection ID
   - Set appropriate permissions (create, read, update, delete for users)

5. **Configure Collection Attributes** (add these fields):
   - `title` (String, required)
   - `body` (String, required)
   - `author` (String, required)
   - Any other fields your blog posts need

### 4. Environment Configuration

1. **Create Environment File**: Copy the example environment file and configure it:

```bash
cp .env.example .env
```

2. **Update Environment Variables**: Open the `.env` file and update with your Appwrite credentials:

```env
# For Vite
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id_here
VITE_APPWRITE_DATABASE_ID=your_database_id_here
VITE_APPWRITE_COLLECTION_ID=your_collection_id_here
```

Replace the placeholder values with your actual Appwrite project credentials.

### 5. Start the Development Server

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will start on `http://localhost:5173` (or another available port).

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
KazeBlog/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── utils/       # Utility functions (Appwrite config)
│   ├── assets/      # Images and other assets
│   └── main.jsx     # Entry point
├── .env             # Environment variables
└── package.json     # Dependencies and scripts
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Add your environment variables in Vercel's dashboard
4. Deploy!

The `vercel.json` file is already configured for proper routing.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
