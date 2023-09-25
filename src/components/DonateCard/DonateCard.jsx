
import PropTypes from 'prop-types';
const DonateCard = ({donation}) => {
  console.log(donation);
    const {image,title,price,category_name,card_bg_color,text_and_button_bg_color } = donation || {};

    return (
        <div className="flex justify-center items-center my-10">
      <div style={{backgroundColor:card_bg_color}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div  style={{color:text_and_button_bg_color, padding:'10px'}} className="p-6">
          <h6 className="mb-4">
            {category_name}
          </h6>
          <p>{title}</p>
          <h4 className="">
            {price}
          </h4>
          <a className="inline-block" href="#">
            <button style={{backgroundColor:text_and_button_bg_color,color:'white'}}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
             View Details
              
            </button>
          </a>
        </div>
      </div>
    </div>
    );
};
DonateCard.propTypes = {
  donation: PropTypes.object.isRequired
};
export default DonateCard;