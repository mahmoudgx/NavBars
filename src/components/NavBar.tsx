import logo from "../assets/Clever_Logo.svg";

const NavBar = () => {
  return (
    <div className="bg-white flex justify-between items-center px-10 py-5 shadow-sm">
      <div>
        <img className="cursor-pointer" src={logo} width={70} />
      </div>
      <div>
        <ul className="flex space-x-8">
          <li className="font-semibold cursor-pointer">Home</li>
          <li className="font-semibold cursor-pointer">Product</li>
          <li className="font-semibold cursor-pointer">Features</li>
          <li className="font-semibold cursor-pointer">Pricing</li>
        </ul>
      </div>
      <div className="flex space-x-5">
        <button className="font-semibold text-md">Sign in</button>
        <button className="bg-[#5E5FF5] text-white text-md px-5 py-2 font-semibold rounded-lg">
          Register
        </button>
      </div>
    </div>
  );
};

export default NavBar;
