import swal from "sweetalert";
import PropTypes from 'prop-types';

const DonationDetailsCard = ({donation}) => {
  // console.log(donation);
    const {id, image,title,description,price,text_and_button_bg_color} = donation || {};

  const handleAddToDonation = () => {
    // console.log(donation);

    const addedDonationArray = [];

    const donationItems = JSON.parse(localStorage.getItem("donation"));

    // jokon localStorage e kicui takbena tkn if e dokbe
    if (!donationItems) {
      addedDonationArray.push(donation);
      localStorage.setItem("donation", JSON.stringify(addedDonationArray));
      swal("Good job","Donation added successfully","success");
    } else {
      const isExits = donationItems.find(donation=>donation.id === id);
      if (!isExits) {
        addedDonationArray.push(...donationItems,donation);
        localStorage.setItem("donation", JSON.stringify(addedDonationArray));
        swal("Good job","Donation added successfully","success");
      }
      else{
        swal("Error!","Already added","error")
      }
    }
  };

  return (
    <div className=" flex justify-center items-center my-5 ">
      <div className="  w-full max-w-[48rem]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative  transition-opacity ">
          <img src={image} alt="image" className="w-full" />
        </div>
        <a className="inline-block absolute ml-2 -mt-14 " href="#">
            <button style={{backgroundColor:text_and_button_bg_color,color:'white'}}
              onClick={handleAddToDonation}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-lg font-bold  text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Donation ${price}
              
            </button>
          </a>
        <div className="p-6">
          <h6 className="mb-2 block font-sans  leading-relaxed tracking-normal font-bold text-2xl antialiased">
            {title}
          </h6>
          <h4 className="mb-2 block  text-xl leading-snug tracking-normal text-blue-gray-900 antialiased">
            {description}
          </h4>

          
        </div>
      </div>
    </div>
  );
};
DonationDetailsCard.propTypes = {
  donation: PropTypes.object.isRequired
};
export default DonationDetailsCard;
