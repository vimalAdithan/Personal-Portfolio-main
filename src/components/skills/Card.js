import React from "react";

const Card = ({ title, des, icon }) => {
  return (
    <div
      className="w-full px-12 h-70 py-10 rounded-lg shadow-shadowOne flex 
     items-center bg-gradient-to-r from-bodyColor to-[#202327] group 
     hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors
     duration-100 group"
    >
      <div className=" w-full h-42 overflow-hidden">
        <div className="flex h-full flex-col gap-5 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
          <div>
            <span className="text-5xl text-designColor">{icon}</span>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl xl:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="base">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
