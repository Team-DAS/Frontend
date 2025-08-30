import React from 'react'
import HeroSection from '../sections/HeroSection'
import PopularVacanciesSection from '../sections/PopularVacanciesSection'
import HowItWorksSection from '../sections/HowItWorksSection'
import FeaturedJobsSection from '../sections/FeaturedJobsSection'
import PopularCategorySection from '../sections/PopularCategorySection'
import TestimonialsSection from '../sections/TestimonialsSection'

const Homepage = () => {
  return (
    <div className='bg-gray-100 flex-1'>
        <HeroSection />
        <PopularVacanciesSection />
        <HowItWorksSection />
        <PopularCategorySection />
        <hr className='border-gray-200'/>
        <FeaturedJobsSection />
        <TestimonialsSection />
        

    </div>
  )
}

export default Homepage