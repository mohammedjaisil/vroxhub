import React from 'react'
import Hero from '../Components/Hero/Hero'
import TeamSection from '../Components/Hero/TeamSection'
import HeroSection from '../Components/Hero/HeroSection'
import VideographySection from '../Components/Hero/VideographySection'
import Services from '../Components/Services/Services';

export const Home = () => {
  return (
    <>
    <Hero />
    
    <HeroSection />
    <VideographySection />
    <Services />
    <TeamSection />
    </>
    
  )
}
export default Home;