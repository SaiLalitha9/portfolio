import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-black text-white">
      {/* Your Name */}
      <h1 className="text-xl font-bold text-white">Sai Lalitha Kilaru</h1>

      {/* Navigation Links */}
      <div className="flex gap-6">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>
        <Link to="/projects" className="hover:text-blue-400">Projects</Link>
        <Link to="/resume" className="hover:text-blue-400">Resume</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
