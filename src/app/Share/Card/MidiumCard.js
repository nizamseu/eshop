import React from "react";

const MidiumCard = () => {
  return (
    <div>
      <div className="relative h-[250px]  rounded-md">
        <img
          src="/images/delivery.jpg"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">Cash On Delivery</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Details &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default MidiumCard;
