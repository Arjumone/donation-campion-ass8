import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className=" flex justify-between max-w-6xl mx-auto my-4 shadow-md px-4 py-4 rounded">
        
        <ul className=" flex gap-4 text-xl">
          <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Home</NavLink></li>
          <li><NavLink to="/donation" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Donation</NavLink></li>
          <li><NavLink to="/statistic" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Statistic</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
