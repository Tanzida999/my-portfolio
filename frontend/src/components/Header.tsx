import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold text-blue-400">
          Tanzida's Portfolio
        </h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-blue-300 transition">
            Home
          </Link>
          <Link to="/projects" className="hover:text-blue-300 transition">
            Projects
          </Link>
          <Link to="/about" className="hover:text-blue-300 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-300 transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
