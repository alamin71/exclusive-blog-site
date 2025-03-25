// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import profileImg from "../../assets/profileImg.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-blue-100 text-black px-4 py-1 mt-3">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-black"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} className="text-black" />}
//         </button>

//         {/* Profile Picture */}
//         <div className="md:hidden">
//           <img
//             src={profileImg}
//             alt="Profile"
//             className="w-10 h-10 rounded-full border-2 border-gray-200"
//           />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <a href="#" className="hover:text-gray-400">
//             Home
//           </a>
//           <a href="#" className="hover:text-gray-400">
//             Blog
//           </a>
//           <a href="#" className="hover:text-gray-400">
//             About
//           </a>
//           <a href="#" className="hover:text-gray-400">
//             Contact
//           </a>
//         </div>

//         {/* Profile Picture for Desktop */}
//         <div className="hidden md:block">
//           <img
//             src={profileImg}
//             alt="Profile"
//             className="w-10 h-10 rounded-full border-2 border-gray-200"
//           />
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden flex flex-col items-start mt-4 space-y-4">
//           <a href="#" className="hover:text-gray-400">
//             Home
//           </a>
//           <a href="#" className="hover:text-gray-400">
//             Blog
//           </a>
//           <a href="#" className="hover:text-gray-400">
//             About
//           </a>
//           <a href="#" className="hover:text-gray-400">
//             Contact
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Menu, X, Sun, Moon } from "lucide-react";
// import profileImg from "../../assets/profileImg.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <nav
//       className={`w-full py-4 px-6 shadow-md ${
//         darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo / Brand */}
//         <h1 className="text-2xl font-bold">Brand</h1>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 text-lg">
//           <a href="#" className="hover:text-blue-500 transition">
//             Home
//           </a>
//           <a href="#" className="hover:text-blue-500 transition">
//             Blog
//           </a>
//           <a href="#" className="hover:text-blue-500 transition">
//             About
//           </a>
//           <a href="#" className="hover:text-blue-500 transition">
//             Contact
//           </a>
//         </div>

//         {/* Profile & Theme Toggle */}
//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
//           >
//             {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//           </button>
//           <img
//             src={profileImg}
//             alt="Profile"
//             className="w-10 h-10 rounded-full border-2 border-gray-300"
//           />

//           {/* Mobile Menu Button */}
//           <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden flex flex-col items-start mt-4 space-y-4 px-6">
//           <a href="#" className="hover:text-blue-500">
//             Home
//           </a>
//           <a href="#" className="hover:text-blue-500">
//             Blog
//           </a>
//           <a href="#" className="hover:text-blue-500">
//             About
//           </a>
//           <a href="#" className="hover:text-blue-500">
//             Contact
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState, useContext } from "react";
// import { ThemeContext } from "../../context/ThemeContext";
// import { Menu, X, Sun, Moon } from "lucide-react";
// import profileImg from "../../assets/profileImg.png";

// const Navbar = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav
//       className={`w-full py-4 px-6 shadow-md transition duration-300 ${
//         theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo / Brand */}
//         <h1 className="text-2xl font-bold">Brand</h1>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 text-lg">
//           <a href="#" className="hover:text-blue-500 transition">
//             Home
//           </a>
//           <a href="#" className="hover:text-blue-500 transition">
//             Blog
//           </a>
//           <a href="#" className="hover:text-blue-500 transition">
//             About
//           </a>
//           <a href="#" className="hover:text-blue-500 transition">
//             Contact
//           </a>
//         </div>

//         {/* Profile & Theme Toggle */}
//         <div className="flex items-center gap-4">
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
//           >
//             {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//           </button>
//           <img
//             src={profileImg}
//             alt="Profile"
//             className="w-10 h-10 rounded-full border-2 border-gray-300"
//           />

//           {/* Mobile Menu Button */}
//           <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden flex flex-col items-start mt-4 space-y-4 px-6">
//           <a href="#" className="hover:text-blue-500">
//             Home
//           </a>
//           <a href="#" className="hover:text-blue-500">
//             Blog
//           </a>
//           <a href="#" className="hover:text-blue-500">
//             About
//           </a>
//           <a href="#" className="hover:text-blue-500">
//             Contact
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import React, { useContext, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";
import profileImg from "../../assets/profileImg.png";
import logo from "../../assets/blog-logo.png";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`w-full py-4 px-6 shadow-md transition duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        {/* <h1 className="text-2xl font-bold">Brand</h1> */}
        <img
          src={logo}
          alt=""
          className="w-12 h-12 dark:bg-white dark:rounded-full"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <a href="#" className="hover:text-blue-500 transition">
            Home
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Blog
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            About
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Contact
          </a>
        </div>

        {/* Profile & Theme Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <img
            src={profileImg}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-300"
          />

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start mt-4 space-y-4 px-6">
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
          <a href="#" className="hover:text-blue-500">
            Blog
          </a>
          <a href="#" className="hover:text-blue-500">
            About
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
