import React from 'react';
import HomeHero from '../Component/Hero/HomeHero';
import AboutCard from '../Component/Card/AboutCard';
import AboutSection from '../Component/AboutSection';
import ServiceSection from '../Component/ServiceSection';
import { useLoaderData } from 'react-router';
import TipsSection from '../Component/TipsSection';

const Home = () => {

    const serviceData = useLoaderData();

    return (
      <div>
        <HomeHero></HomeHero>
        <AboutCard></AboutCard>
        <AboutSection></AboutSection>
        <ServiceSection serviceData={serviceData}></ServiceSection>
        <TipsSection></TipsSection>
      </div>
    );
};

export default Home;