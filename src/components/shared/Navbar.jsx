import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose, MdSchool, MdOndemandVideo, MdLogin, MdPersonAdd, MdLogout } from 'react-icons/md';
import profileImage from '../../assets/profile.png'
import logo from "/logo.jpg"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };


  const user = {
    name: 'Anas',
    image: profileImage
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
              <span className="font-bold text-xl">LearnJP</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="py-4 px-3 hover:bg-gray-700 flex items-center">
              <MdSchool className="mr-1" />
              Lessons
            </Link>
            <Link to="/tutorials" className="py-4 px-3 hover:bg-gray-700 flex items-center">
              <MdOndemandVideo className="mr-1" />
              Tutorials
            </Link>
            <Link to="/login" className="py-4 px-3 hover:bg-gray-700 flex items-center">
              <MdLogin className="mr-1" />
              Login
            </Link>
            <Link to="/register" className="py-4 px-3 hover:bg-gray-700 flex items-center">
              <MdPersonAdd className="mr-1" />
              Register
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <div className="relative">
              <button onClick={toggleProfile} className="flex items-center space-x-2">
                <img src={user?.image} alt="Profile" className="w-8 h-8 rounded-full" />
                <span className="hidden lg:inline-block">{user.name}</span>
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                  <div className="px-4 py-2 text-sm text-gray-700">{user.name}</div>
                  <button  className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left flex items-center">
                    <MdLogout className="mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="mobile-menu-button">
              {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link to="/lessons" className=" py-2 px-4 text-sm hover:bg-gray-700 flex items-center">
          <MdSchool className="mr-1" />
          Lessons
        </Link>
        <Link to="/tutorials" className=" py-2 px-4 text-sm hover:bg-gray-700 flex items-center">
          <MdOndemandVideo className="mr-1" />
          Tutorials
        </Link>
        <Link to="/login" className=" py-2 px-4 text-sm hover:bg-gray-700 flex items-center">
          <MdLogin className="mr-1" />
          Login
        </Link>
        <Link to="/register" className=" py-2 px-4 text-sm hover:bg-gray-700 flex items-center">
          <MdPersonAdd className="mr-1" />
          Register
        </Link>
        <div className="py-2 px-4 text-sm hover:bg-gray-700">
          <div className="flex items-center space-x-2">
            <img src={user.image} alt="Profile" className="w-8 h-8 rounded-full" />
            <span>{user.name}</span>
          </div>
          <button className="mt-2 flex items-center text-sm text-gray-300 hover:text-white">
            <MdLogout className="mr-1" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;