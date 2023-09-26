
import { useLoaderData } from "react-router-dom";
import PieChart from "../PieChart/PieChart";
import { useEffect, useState } from "react";

const Statistic = () => {
    const donations = useLoaderData();
    const donationItems = JSON.parse(localStorage.getItem("donation"));
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        
    }, []);

    return (
        <div>
            <PieChart></PieChart>
        </div>
    );
};

export default Statistic;
