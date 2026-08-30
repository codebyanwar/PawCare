import React from 'react';
import HomeHero from '../Component/Hero/HomeHero';
import AboutCard from '../Component/Card/AboutCard';
import AboutSection from '../Component/AboutSection';
import Services from '../Component/Services';

const Home = () => {
    return (
        <div>
            <HomeHero></HomeHero>
            <AboutCard></AboutCard>
            <AboutSection></AboutSection>
            <Services></Services>
        </div>
    );
};

export default Home;