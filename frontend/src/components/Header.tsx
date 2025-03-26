import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Name */}
        <div className="flex items-center space-x-2 text-xl lg:text-2xl font-bold">
          <span className="text-5xl">Tanzida</span>
          <span className="text-purple-500">Nowshin</span>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6 items-center">
          <Link
            to="/"
            className="px-4 py-2 text-white rounded-lg transition duration-300 hover:bg-blue-500"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="px-4 py-2 text-white rounded-lg transition duration-300 hover:bg-blue-500"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 text-white rounded-lg transition duration-300 hover:bg-blue-500"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 text-white rounded-lg transition duration-300 hover:bg-blue-500"
          >
            Contact
          </Link>
          <Link
            to="/stack"
            className="px-4 py-2 text-white rounded-lg transition duration-300 hover:bg-blue-500"
          >
            Stack
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
