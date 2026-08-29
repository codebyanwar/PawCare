import React from 'react';
import { FaStethoscope } from 'react-icons/fa';
import { MdOutlineCalendarMonth, MdOutlineContentCut } from 'react-icons/md';


const AboutCard = () => {
    return (
      <div className="lg:w-7xl lg:mx-auto lg:py-20 px-[4%]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-center py-10 px-8 rounded-b-xl shadow-xl about-card">
            <MdOutlineContentCut className="h-10 w-10 inline-block relative z-10 about-card-icon" />
            <h3 className="title-font text-[26px] py-2.5 relative z-10">
              Expert Grooming
            </h3>
            <p className="text-[16px] relative z-10">
              Professional grooming services tailored to your pet's breed and
              needs, keeping them clean, healthy, and happy.
            </p>
          </div>

          <div className="text-center py-10 px-8 rounded-b-xl shadow-xl about-card">
            <FaStethoscope className="h-10 w-10 inline-block relative z-10 about-card-icon" />
            <h3 className="title-font text-[26px] py-2.5 relative z-10">
              Certified Vet Checkups
            </h3>
            <p className="text-[16px] relative z-10">
              Routine health checkups and medical care from licensed
              veterinarians, ensuring your pet stays healthy year-round.
            </p>
          </div>

          <div className="text-center py-10 px-8 rounded-b-xl shadow-xl about-card">
            <MdOutlineCalendarMonth className="h-10 w-10 inline-block relative z-10 about-card-icon" />
            <h3 className="title-font text-[26px] py-2.5 relative z-10">
              Book in Minutes
            </h3>
            <p className="text-[16px] relative z-10">
              Schedule appointments anytime, anywhere. Our simple platform makes
              booking pet care services fast and hassle-free.
            </p>
          </div>
        </div>
      </div>
    );
};

export default AboutCard;