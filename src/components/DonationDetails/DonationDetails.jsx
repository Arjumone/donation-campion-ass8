import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "../DonationDetailsCard/DonationDetailsCard";


const DonationDetails = () => {
    const [donation,setDonation]= useState([]);
    // console.log(donation);
    const {id} = useParams()
    // console.log(id);
    const donations = useLoaderData();
    // console.log(donations);
    useEffect(()=>{
        const findDonation = donations?.find(donation=>donation.id===id)
        console.log(findDonation);
        setDonation(findDonation);
    },[id,donations])
    
    
    return (
        <div>
            <DonationDetailsCard donation={donation}></DonationDetailsCard>
        </div>
    );
};

export default DonationDetails;