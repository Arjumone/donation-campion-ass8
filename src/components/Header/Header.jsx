import { NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <div className="">
      <nav className=" flex justify-between max-w-6xl mx-auto my-4 shadow-md px-4  rounded h-screen relative">
        <div className=" h-20 w-56">
          <img src="/src/assets/Logo.png" alt="" />
        </div>
        <ul className=" flex gap-4 text-xl">
          <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Home</NavLink></li>
          <li><NavLink to="/donation" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Donation</NavLink></li>
          <li><NavLink to="/statistic" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Statistic</NavLink></li>
        </ul>
      </nav>
      <div className=" absolute -mt-80 ml-96  -gap-2">
        <h1 className=" text-white font-semibold text-3xl mb-5">I Grow By Helping People In Need</h1>
      <div className=" flex">
      <input type="text" placeholder="Search here" className="input input-bordered input-secondary w-full max-w-xs" />
      <button className=" bg-red-600 text-white p-3 rounded-lg">Search</button>
      </div>
      </div>
    </div>
  );
};

export default Header;
