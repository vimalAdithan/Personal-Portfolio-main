import React from "react";
import { RxResume } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";
import { Contact, Resume } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={Contact}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Vimal Adithan</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7339440055</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">k.vimal1213@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find Me In</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a target="_blank" rel="noreferrer" href={Resume}>
              <RxResume />
            </a>
          </span>
          <span className="bannerIcon">
            <a target="_blank" rel="noreferrer" href="https://bit.ly/3tqLZ6s">
              <BsGithub />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
