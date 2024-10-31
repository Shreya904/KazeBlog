import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar flex items-center justify-between max-w-[600px] px-[20px] py-[10px] mx-auto bg-black border-b-[1px] border-b-[#424242] shadow-sm">
      <h1 className="text-[#FF4081] text-3xl font-bold">KazeBlog</h1>
      <div className="links flex ml-auto space-x-4">
        <Link
          to="/"
          className="text-[#E0E0E0] px-[8px] py-[4px] hover:text-[#FF4081] transition-colors duration-200 ease-in-out"
        >
          Home
        </Link>
        <Link
          to="/create"
          className="text-[#E0E0E0] px-[8px] py-[4px] hover:text-[#FF4081] transition-colors duration-200 ease-in-out"
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
