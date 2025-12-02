import React from 'react';
import lastHours from "../assets/Last 24 Hours.png"
import freeShipping from "../assets/Free Shipping.png"
import getCash from "../assets/Get Cash.png"

const Services = () => {
    return (
      <div className="flex gap-10 justify-center ">
        <div className="flex  flex-col rounded-2xl bg-cyan-200 px-18 py-6 justify-center items-center text-center">
          <img src={lastHours} alt="" />
          <h4 className="text-xl mt-3 font-bold">Customer care</h4>
          <p>24h hour follow up</p>
        </div>
        <div className="flex flex-col rounded-2xl  bg-orange-200 px-18 py-6 justify-center items-center text-center">
          <img src={freeShipping} alt="" />
          <h4 className="text-xl mt-3 font-bold">free ship</h4>
          <p> Free shipping for 150$ and up</p>
        </div>
        <div className=" flex flex-col rounded-2xl  bg-green-200 px-18 py-6 justify-center items-center text-center">
          <img src={getCash} alt="" />
          <h4 className="text-xl mt-3 font-bold">Return</h4>
          <p>Within 7 Days</p>
        </div>
      </div>
    );
};

export default Services;