import React from "react";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";

const Education1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">2017-2022</p>
        <h2 className="text-2xl md:text-4xl font-bold">
          Educational Qualification
        </h2>
      </div>
      <div
        className="mt-14 w-full lgl:w-1/2 h-[500px] border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10"
      >
        <EducationCard
          title="Bachelore of Computer Application"
          subTitle="PSG College of Arts and Science (2019 - 2022)"
          result="75/100 %"
        />
        <EducationCard
          title="Higher Secondary"
          subTitle="HOLY CROSS MAT. HR. SEC. SCHOOL (2018 - 2019)"
          result="60/100 %"
        />
        <EducationCard
          title="Secondary"
          subTitle="HOLY CROSS MAT. HR. SEC. SCHOOL (2017 - 2018)"
          result="80/100 %"
        />
      </div>
    </motion.div>
  );
};

export default Education1;
