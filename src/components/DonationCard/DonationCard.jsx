import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const DonationCard = ({ donation }) => {
  const {id, image,title,category_name,description,category_bg_color,card_bg_color,text_and_button_bg_color} = donation;
  return (
    <div>
      
      <Link to={`/donation/${id}`} >
      <div style={{backgroundColor:card_bg_color}} className="card card-compact bg-base-100 shadow-xl ">
        <figure>
          <img
            src={image}
            alt="title-donation"
          />
        </figure>
        <div>
          <div style={{color:text_and_button_bg_color, padding:'10px'}}>
          <h2 style={{backgroundColor:category_bg_color,width:'70px', borderRadios:'20px',padding:'3px'}}>{category_name}</h2>
          <p className=" font-medium">{title}</p>
          <p className=" py-2 ">{description}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};
DonationCard.propTypes = {
  donation: PropTypes.object.isRequired
};
export default DonationCard;
{/* <div className={isPrimary ? "primary" : "secondary"}></div> */}