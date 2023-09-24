import { Link } from "react-router-dom";
import DonationDetails from "../DonationDetails/DonationDetails";

const DonationCard = ({ donation }) => {
  const {id, image,title,category_name,description,price} = donation;
  return (
    <div>
      <Link to={`/donation/${id}`}>
      <div className="card card-compact bg-base-100 shadow-xl ">
        <figure>
          <img
            src={image}
            alt="title-donation"
          />
        </figure>
        <div  className={category_name === 'Health'? 'bg-blue-200 text-blue-700': category_name=== 'Education'?'bg-pink-200 text-pink-700': category_name==='Clothing'?'bg-green-200 text-green-700': category_name==='Food'?'bg-red-200 text-red-700':''}>
          <div className=" ps-2">
          <h2 className={category_name==='Health'? 'bg-blue-300 mt-2  w-fit rounded p-1 ':category_name==='Education'? 'bg-pink-300 mt-2  w-fit rounded p-1 ':category_name==='Clothing'? 'bg-green-300 mt-2  w-fit rounded p-1 ':category_name==='Food'? 'bg-red-300 mt-2  w-fit rounded p-1 ':''}>{category_name}</h2>
          <p className=" font-medium">{title}</p>
          <p className=" py-2 ">{description}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default DonationCard;
{/* <div className={isPrimary ? "primary" : "secondary"}></div> */}