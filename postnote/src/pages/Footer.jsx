import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">MyWebsite</h2>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4 text-sm hover:active">
          <li><a href="/home" className="hover:text-black transition">Home</a></li>
          <li><a href="#" className="hover:text-black transition">Services</a></li>
          <li><a href="/login" className="hover:text-black transition">Contact</a></li>
          <li><a href="/account" className="hover:text-black transition">Signup</a></li>

        </ul>
      </div>

      {/* Social Media Icons */}
      <div className=" flex justify-center space-x-4">
        <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
          <FaFacebookF />
        </a>
        <a href="#" className="bg-sky-400 text-white p-2 rounded-full hover:bg-sky-500 transition">
          <FaTwitter />
        </a>
        <a href="#" className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition">
          <FaInstagram />
        </a>
        <a href="#" className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
}
