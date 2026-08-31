import React from 'react';
import aboutImage from '.././assets/about-banner.webp'
import epicArrow from '.././assets/Epic-arow.webp'
import { MdOutlineAccessTime, MdOutlineAttachMoney, MdOutlineHealthAndSafety, MdOutlinePets, MdOutlineSupportAgent, MdOutlineVerified } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router';

const AboutSection = () => {
    return (
      <div className="bg-base-100">
        <div className="lg:w-7xl mx-auto pb-10 lg:pb-20 grid lg:grid-cols-2 gap-8 lg:gap-20 px-[4%] lg:px-0">
          <div className="relative">
            <img src={aboutImage} alt="" />
            <img
              className="w-50 absolute top-0 -right-25 hidden lg:block"
              src={epicArrow}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex gap-2.5 items-center">
              <MdOutlinePets className="w-8 h-8 lg:h-10 lg:w-10 text-primary bg-amber-100 rounded-full p-2" />
              <span className="font-medium text-[14px]">Why Choose Us</span>
            </div>
            <h3 className="title-font text-[22px] lg:text-[36px] py-3 lg:py-5 relative z-10 leading-[1.3em]">
              Trusted Pet Care, Built on Experience and Love
            </h3>
            <p className="text-[14px] lg:text-[18px] text-[#545454] pb-5 lg:pb-10">
              At PawCare, we believe every pet deserves compassionate,
              professional care. With a team of certified experts and a genuine
              love for animals, we've built a platform that makes finding
              trustworthy pet services simple, transparent, and stress-free —
              because your pet's wellbeing is our top priority.
            </p>
            <div className="grid lg:grid-cols-2 mb-5 lg:mb-10 gap-2.5 lg:gap-0">
              <ul className="space-y-2.5">
                <li className="text-[16px] lg:text-[20px] flex gap-1.5 lg:gap-2.5 items-center">
                  <MdOutlineVerified className="text-primary" />
                  <span>Certified Professionals</span>
                </li>
                <li className="text-[16px] lg:text-[20px] flex gap-1.5 lg:gap-2.5 items-center">
                  <MdOutlineAttachMoney className="text-primary" />
                  <span>Affordable Pricing</span>
                </li>
                <li className="text-[16px] lg:text-[20px] flex gap-1.5 lg:gap-2.5 items-center">
                  <MdOutlineAccessTime className="text-primary" />
                  <span>Flexible Scheduling</span>
                </li>
              </ul>
              <ul className="space-y-2.5">
                <li className="text-[16px] lg:text-[20px] flex gap-1.5 lg:gap-2.5 items-center">
                  <MdOutlineSupportAgent className="text-primary" />
                  <span>24/7 Customer Support</span>
                </li>
                <li className="text-[16px] lg:text-[20px] flex gap-1.5 lg:gap-2.5 items-center">
                  <MdOutlineHealthAndSafety className="text-primary" />
                  <span>Safe & Hygienic Service</span>
                </li>
                <li className="text-[16px] lg:text-[20px] flex gap-1.5 lg:gap-2.5 items-center">
                  <FaUsers className="text-primary" />
                  <span>Trusted by Thousands</span>
                </li>
              </ul>
            </div>
            <Link to="/about" className="btn btn-primary shadow-none text-white hover:bg-transparent hover:text-primary w-30 lg:w-40 text-[16px] lg:text-[18px] py-2.5 lg:py-6">
              About Us
            </Link>
          </div>
        </div>
      </div>
    );
};

export default AboutSection;