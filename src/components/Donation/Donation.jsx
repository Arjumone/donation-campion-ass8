import React, { useEffect, useState } from "react";
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

      console.log(total);

      setTotalPrice(total);
    } else {
      setNoFound("No Data Found");
    }
  }, []);

  console.log(donations);

  const handleRemove = () => {
    localStorage.clear();
    setDonations([]);
    setNoFound("No Data Found");
  };

  console.log(isShow);

  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
          {donations.length > 0 && (
            <div>
              <button
                onClick={handleRemove}
                className="px-5 bg-green-200 block mx-auto"
              >
                Deleted All Donation
              </button>

              <h1>Total price : {totalPrice}</h1>
            </div>
          )}

          <div className="grid grid-cols-2 gap-5">
            {isShow
              ? donations.map((donation) => (
                  <DonateCard key={donation.id} donation={donation}></DonateCard>
                ))
              : donations
                  .slice(0, 2)
                  .map((donation) => (
                    <DonateCard key={donation.id} phone={donation}></DonateCard>
                  ))}
          </div>

          {donations.length > 2 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="px-5 bg-green-200 block mx-auto"
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