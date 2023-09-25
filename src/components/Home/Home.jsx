import { useLoaderData } from "react-router-dom";
import DonationCard from "../DonationCard/DonationCard";



const Home = () => {
    const donations = useLoaderData()
    // console.log(donations);
    // const [donations]= getDonation()

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-12 max-w-6xl mx-auto">
            {
                donations.map(donation=><DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

export default Home;