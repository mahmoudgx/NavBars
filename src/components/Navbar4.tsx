import { FiMessageCircle, FiSearch } from "react-icons/fi";
import logo from "../assets/Clever_Logo.svg";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar4 = () => {
  return (
    <div className="bg-white flex justify-between items-center px-10 py-5 shadow-sm">
      <div className="flex items-center space-x-10">
        <img className="cursor-pointer" src={logo} width={70} />
        <ul className="flex space-x-8">
          <li className="font-semibold cursor-pointer">Home</li>
          <li className="font-semibold cursor-pointer">Product</li>
          <li className="font-semibold cursor-pointer">Features</li>
          <li className="font-semibold cursor-pointer">Pricing</li>
        </ul>
      </div>
      <div className="flex space-x-5">
        <div className="relative">
          <input
            className="rounded-full p-2 bg-[#F2F2F2] pl-10"
            placeholder="Search"
          ></input>
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex space-x-4 items-center">
          <FiMessageCircle size={20} className="cursor-pointer" />
          <div className="relative">
            <IoMdNotificationsOutline size={20} className="cursor-pointer" />
            <div className="absolute top-0 right-0 w-1 h-1 bg-red-500 rounded-full"></div>
          </div>
          <div className="w-[40px] h-[40px] overflow-hidden rounded-full cursor-pointer">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar4;
