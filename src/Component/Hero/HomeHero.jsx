import React from 'react';
import HomeHeroBGImg from '../../assets/hero.webp'

const HomeHero = () => {
    return (
      <div
        style={{ backgroundImage: `url(${HomeHeroBGImg})` }}
        className="hero min-h-[91vh] bg-no-repeat bg-contain bg-bottom-right "
      >
        <div className="hero-content lg:w-7xl mx-auto justify-start">
          <div className="lg:w-160">
            <h1 className="text-[#2c3e50] text-[32px] lg:text-5xl title-font font-semibold leading-[1.3em]">
              Everything Your Pet Needs, In One Place
            </h1>
            <p className="py-5 text-[16px] lg:text-[18px]">
              PawCare brings together everything busy pet parents need —
              professional grooming, routine vet checkups, walking, and boarding
              services, all in one convenient platform. Book in minutes, track
              your appointments easily, and enjoy peace of mind knowing
              certified professionals are caring for your pet.
            </p>
            <a className="btn btn-primary shadow-none text-white hover:bg-transparent hover:text-primary">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    );
};

export default HomeHero;