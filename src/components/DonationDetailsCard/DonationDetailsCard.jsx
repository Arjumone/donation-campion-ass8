import swal from "sweetalert";
import PropTypes from 'prop-types';

const DonationDetailsCard = ({donation}) => {
  // console.log(donation);
    const {id, image,title,description,price,text_and_button_bg_color} = donation || {};

  const handleAddToDonation = () => {
    // console.log(donation);

    const addedDonationArray = [];

    const donationItems = JSON.parse(localStorage.getItem("donation"));

    
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
      <div className=" max-w-[48rem]  rounded-xl   text-gray-700 shadow-md">
        <div className="relative  transition-opacity">
          <img src={image} alt="image" className=" lg:w-[700px]" />
        </div>
        <div className=" absolute  -mt-14 bg-black w-full lg:w-[700px] opacity-70">
        <a className="inline-block " href="#">
            <button style={{backgroundColor:text_and_button_bg_color,color:'white'}}
              onClick={handleAddToDonation}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-lg font-bold  text-white transition-all  active:bg-pink-500/30 disabled:pointer-events-none"
              type="button"
            >
              Donation ${price}
              
            </button>
          </a>
        </div>
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
