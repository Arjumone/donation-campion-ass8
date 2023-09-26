import { useLoaderData } from "react-router-dom";
import DonationCard from "../DonationCard/DonationCard";



const Home = () => {
    const donations = useLoaderData()

    return (
        
        <div>
            
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-12 max-w-6xl mx-auto">
            {
                donations.map(donation=><DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
        </div>
    );
};

export default Home;
// Home.js
// import { useLoaderData } from "react-router-dom";
// import DonationCard from "../DonationCard/DonationCard";
// import { useState } from "react";

// const Home = () => {
//   const donations = useLoaderData();
//   const [filteredDonations, setFilteredDonations] = useState(donations);

//   const handleSearch = (searchValue) => {
//     const filteredData = donations.filter((donation) =>
//       donation.category_name.toLowerCase().includes(searchValue.toLowerCase())
//     );
//     setFilteredDonations(filteredData);
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-12 max-w-6xl mx-auto">
//         {filteredDonations.map((donation) => (
//           <DonationCard key={donation.id} donation={donation} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
