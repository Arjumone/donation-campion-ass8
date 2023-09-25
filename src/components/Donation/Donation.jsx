import { useEffect, useState } from "react";
import DonateCard from "../DonateCard/DonateCard";

const Donation = () => {
    const [donations, setDonations] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if (donationItems) {
      setDonations(donationItems);

      const total = donationItems.reduce(
        (preValue, currentItem) => preValue + currentItem.price,
        0
      );

      setTotalPrice(total);
    } else {
      setNoFound("No Data Found");
    }
  }, []);

  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div className="">
          {donations.length > 0 && (
            <div className=" max-w-6xl mx-auto">
              <h1>Total price : {totalPrice}</h1>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
            {isShow
              ? donations.map((donation) => (
                  <DonateCard key={donation.id} donation={donation}></DonateCard>
                ))
              : donations
                  .slice(0, 2)
                  .map((donation) => (
                    <DonateCard key={donation.id} donation={donation}></DonateCard>
                  ))}
          </div>

          {donations.length > 4 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="px-5 my-5 bg-red-600 rounded-lg py-2 text-white block mx-auto"
            >
              {isShow ? "See less" : "See more"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;