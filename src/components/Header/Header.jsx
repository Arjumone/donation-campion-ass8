import { NavLink } from "react-router-dom";
import './Header.css'
import { useEffect, useState } from "react";
const Header = () => {
  const [categoryName,setCategoryName]=useState([])
  useEffect(()=>{
    fetch('/donation.json')
    .then(res=>res.json())
    .then(data=>setCategoryName(data))
  },[])
  const handleSort=()=>{
    const sortCategoryName = categoryName.sort((a,b)=>{
      return (a.category_name-b.category_name)
    })
    setCategoryName(...categoryName,sortCategoryName)
  }
  return (
    <div className="">
      <nav className="nav flex flex-col lg:flex-row justify-between max-w-6xl mx-auto my-4 shadow-md px-6 py-6  rounded h-screen relative">
        <div className=" h-20 w-full">
          <img src="/src/assets/Logo.png" alt="" />
        </div>
        <ul className=" flex gap-4 text-xl text-white">
          <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-400 underline" : ""}>Home</NavLink></li>
          <li><NavLink to="/donation" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-400 underline" : ""}>Donation</NavLink></li>
          <li><NavLink to="/statistic" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-400 underline" : ""}>Statistic</NavLink></li>
        </ul>
      </nav>
      <div className=" absolute lg:-mt-64 lg:ml-96  lg:-gap-2">
        <h1 className=" text-white font-semibold text-3xl mb-5">I Grow By Helping People In Need</h1>
      <div className=" flex">
      <input type="text" placeholder="Search here" className="input input-bordered input-secondary w-full max-w-xs" />
     <span onClick={handleSort}>
     <button className=" bg-red-600 text-white p-3 rounded-lg">Search</button>
     </span>
      </div>
      </div>
    </div>
  );
};

export default Header;
