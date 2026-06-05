import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import footerImage from "../../assets/footerImage.png";

const Footer = () => {
  const companyLinks = [
    "HOME",
    "EVENTS",
    "MEDIA",
    "COMMUNITY",
    "ABOUT",
    "CONTACT",
  ];

  const importantLinks = [
    "AIRSOFT FIELDS",
    "MARKETPLACE",
    "UNITS",
    "BEGINNER GUIDE",
    "SHIPPING & RETURNS",
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF size={25} />,
      link: "#",
    },
    {
      icon: <FaXTwitter size={25} />,
      link: "#",
    },
    {
      icon: <FaInstagram size={25} />,
      link: "#",
    },

    {
      icon: <FaYoutube size={25} />,
      link: "#",
    },
  ];

  return (
    <>
      {/* Main Footer */}
      <footer className="w-full bg-[#0B0D0E]">
        <div className="max-w-[1440px] mx-auto px-5 xl:px-[80px] pt-16 lg:pt-20">
          {/* Row 01 */}
          <div className="flex flex-col xl:flex-row justify-between gap-16 xl:gap-[250px]">
            {/* Left Content */}
            <div className="max-w-[480px]">
              {/* Logo */}
              <div className="cursor-pointer inline-block">
                <h2 className="text-[32px] md:text-[39px] font-bold text-white leading-none">
                  <span className="text-[#5E7D4D]">AIRSOFT</span>{" "}
                  <span>ARENA</span>
                </h2>
              </div>

              {/* Description */}
              <p className="mt-6 text-[16px] font-medium text-white leading-[1.8]">
                A cinematic tactical platform where operators connect, train,
                share field experiences and build a stronger airsoft community
                together.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-[10px] mt-8">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className=" w-[50px] h-[50px] border border-[#7C876180] bg-[#5E7D4D1A] flex
                                items-center justify-center text-[#5E7D4D] cursor-pointer transition-all duration-300 hover:scale-110"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 max-w-[700px]">
              <h3 className="text-white text-[22px] md:text-[25px] font-bold uppercase">
                Enter The Community Network
              </h3>

              <p className="mt-4 text-white text-[16px] font-medium leading-[1.8] max-w-[650px]">
                Stay informed with the latest milsim events, squad activities,
                marketplace drops and tactical media releases.
              </p>

              {/* Newsletter */}
              <div className="flex flex-col sm:flex-row gap-[10px] mt-8">
                <input type="email" placeholder="Enter your email" className=" flex-1 h-[55px] px-5
                    bg-transparent border border-white/50 outline-none text-white
                    placeholder:text-[#FFFFFF66] text-[16px] font-medium"
                />

                <button
                  className=" h-[55px] px-8 bg-[#5E7D4D] border border-[#5E7D4D] text-white text-[16px]
                              font-bold uppercase cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-transparent hover:text-[#5E7D4D]"
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#7C876180] my-12 lg:my-16" />

          {/* Row 02 */}
          <div
            className="
    grid
    grid-cols-1
    md:grid-cols-2
    lg:flex
    lg:flex-row
    gap-12
    xl:gap-[214px]
  "
          >
            {/* Company Links */}
            <div>
              <h4 className="text-[#7C8761] text-[22px] md:text-[25px] font-semibold uppercase">
                Company Links
              </h4>

              <ul className="mt-6 flex flex-col gap-8">
                {companyLinks.map((item) => (
                  <li key={item}>
                    {item === "HOME" ? (
                      <Link
                        to="/"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="text-[16px] font-medium text-[#FFFFFF80]
  inline-block transition-all duration-300 hover:text-white
  hover:translate-x-2"
                      >
                        {item}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        className="text-[16px] font-medium text-[#FFFFFF80]
        inline-block transition-all duration-300 hover:text-white
        hover:translate-x-2"
                      >
                        {item}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h4 className="text-[#7C8761] text-[22px] md:text-[25px] font-semibold uppercase">
                Important Links
              </h4>

              <ul className="mt-6 flex flex-col gap-8">
                {importantLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className=" text-[16px] font-medium text-[#FFFFFF80] inline-block transition-all
                        duration-300 hover:text-white hover:translate-x-2"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              {/* Replace with image later */}
              {<img
                src={footerImage}
                alt="Footer Visual"
                className="max-w-full h-auto object-contain"
              />}

              <div
                className=" w-full max-w-[450px] h-[250px] flex items-center justify-center
                  text-[#FFFFFF80]"
              >
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="w-full bg-[#121619]">
        <div className="max-w-[1440px] mx-auto px-5 xl:px-[80px] py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-[16px] font-medium text-[#B3B4B2] text-center md:text-left">
              2026 AIRSOFT ARENA. All Rights Reserved.
            </p>

            {/* Policies */}
            <div className="flex items-center gap-8">
              <a
                href="#"
                className="text-[16px] font-medium text-[#B3B4B2] hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>

              <a
                href="#"
                className="text-[16px] font-medium text-[#B3B4B2] hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;