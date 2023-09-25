import { useEffect, useState } from "react";


const Statistic = () => {
    const [total,setTotal]=useState(0)
    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem("donation"));
        console.log(donationItems);
    },[])
    return (
        <div>
            <h1>statistic</h1>
        </div>
    );
};

export default Statistic;