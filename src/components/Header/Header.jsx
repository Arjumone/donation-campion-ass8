import { NavLink } from "react-router-dom";
import './Header.css'
import { useEffect, useState } from "react";
const Header = () => {
  const[categoryName,setCategoryName]=useState([])
  const [searchValue, setSearchValue] = useState("");
  useEffect(()=>{
    fetch('/donation.json')
    .then(res=>res.json())
    .then(data=>setCategoryName(data))
  },[])
  const handleSort = () => {
    categoryName.filter(category=>category)
    
};


  return (
    <div className="">
      <nav className="nav flex flex-col md:flex-row justify-between max-w-6xl mx-auto my-4 shadow-md px-6 py-6  rounded h-screen relative">
        <div className="  w-full">
          <img src="/src/assets/Logo.png" alt="" />
        </div>
        <ul className=" flex gap-4 text-xl text-black">
          <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-400 underline" : ""}>Home</NavLink></li>
          <li><NavLink to="/donation" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-400 underline" : ""}>Donation</NavLink></li>
          <li><NavLink to="/statistic" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-400 underline" : ""}>Statistic</NavLink></li>
        </ul>
      </nav>
      <div className=" absolute -mt-64 lg:-mt-64 ml-10 lg:ml-96  -gap-2">
        <h1 className=" text-black font-semibold text-3xl mb-5">I Grow By Helping People In Need</h1>
      <div className=" flex">
      <input type="text"  value={searchValue}
    onChange={(e) => {
        setSearchValue(e.target.value);
    }} placeholder="Sort by Name" className="input input-bordered input-secondary w-full max-w-xs" />
     <button onClick={handleSort}  className=" bg-red-600 text-white p-3 rounded-lg">Search</button>

      </div>
      </div>
    </div>
  );
};

export default Header;