import { useLoaderData, useParams } from "react-router-dom";


const DonationDetails = () => {
    const {id} = useParams()
    
    const donations = useLoaderData()
    
    return (
        <div>
            
        </div>
    );
};

export default DonationDetails;