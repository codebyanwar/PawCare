import React from 'react';
import HomeHero from '../Component/Hero/HomeHero';
import AboutCard from '../Component/Card/AboutCard';
import AboutSection from '../Component/AboutSection';

const Home = () => {
    return (
        <div>
            <HomeHero></HomeHero>
            <AboutCard></AboutCard>
            <AboutSection></AboutSection>
        </div>
    );
};

export default Home;