import swal from "sweetalert";


const DonationDetailsCard = ({donation}) => {
  console.log(donation);
    const {id, image,title,category_name,price,text_and_button_bg_color} = donation || {};

  const handleAddToDonation = () => {
    console.log(donation);

    const addedDonationArray = [];

    const favoriteItems = JSON.parse(localStorage.getItem("donation"));

    // jokon localStorage e kicui takbena tkn if e dokbe
    if (!favoriteItems) {
      addedDonationArray.push(donation);
      localStorage.setItem("donation", JSON.stringify(addedDonationArray));
      swal("Good job","Donation added successfully","success");
    } else {
      const isExits = favoriteItems.find(donation.id === id);
      if (!isExits) {
        addedDonationArray.push(...favoriteItems);
        localStorage.setItem("donation", JSON.stringify(addedDonationArray));
        swal("Good job","Donation added successfully","success");
      }
      else{
        swal("Error!","No duplicate","error")
      }
    }
  };

  return (
    <div className=" flex justify-center items-center h-[70vh]">
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <p className=" font-bold">Price:{price}</p>
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {category_name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>

          <a className="inline-block" href="#">
            <button style={{backgroundColor:text_and_button_bg_color,color:'white'}}
              onClick={handleAddToDonation}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to Donate
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationDetailsCard;
