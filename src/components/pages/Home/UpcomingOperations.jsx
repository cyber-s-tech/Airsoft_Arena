import React, { useEffect, useState } from "react";

import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { HiChartBar } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import AirsoftArenaSubscriptions from "./AirsoftArenaSubscriptions";
import OperationsContent from "./OperationsContent";
import OperationsSidebar from "./OperationsSidebar";

const tabs = [
  "ALL OPERATIONS",
  "CQB",
  "WOODLAND",
  "NIGHT OPS",
  "TRAINING",
  "COMPETITIVE",
];

const UpcomingOperations = () => {

  return (
    <section className="w-full bg-[#0B0D0E] py-10 font-['Chakra_Petch']">
  <div className="max-w-[1440px] mx-auto px-5 xl:px-[80px]">
    {/* HEADING */}
    <div className="max-w-[900px] mx-auto text-center">
      <span className="block text-[14px] font-semibold uppercase tracking-wide text-[#7C8761]">
        // ACTIVE DEPLOYMENTS //
      </span>

      <h2 className="mt-4 text-[32px] md:text-[40px] xl:text-[45px] font-bold uppercase leading-tight text-[#5E7D4D]">
        Upcoming Operations
      </h2>

      <p className="mt-4 max-w-[700px] mx-auto text-[20px] font-medium leading-[1.8] text-white">
        Join immersive milsim scenarios, CQB operations and tactical
        training events with the community.
      </p>
    </div>

    {/* CONTENT ROW */}
    <div className="flex flex-col lg:flex-row gap-6 mt-12">
      <div className="w-full md:w-[100%] lg:w-[80%]">
        <OperationsContent />
      </div>

      <div className="w-full md:w-[100%] lg:w-[20%]">
        <OperationsSidebar />
      </div>
    </div>
  </div>
</section>
  );
};

export default UpcomingOperations;
