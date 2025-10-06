import RegistrationSection from '@/modules/homepage/sections/RegistrationSection'
import HeroSection from '@/modules/homepage/sections/HeroSection'
import PopularVacanciesSection from '@/modules/homepage/sections/PopularVacanciesSection'
import HowItWorksSection from '@/modules/homepage/sections/HowItWorksSection'
import PopularCategorySection from '@/modules/homepage/sections/PopularCategorySection'
import FeaturedJobsSection from '@/modules/homepage/sections/FeaturedJobsSection'

const HomepagePage = () => {
  return (
    <div className='bg-gray-100 flex-1'>
        <HeroSection />
        <PopularVacanciesSection />
        <HowItWorksSection />
        <PopularCategorySection />
        <hr className='border-gray-200'/>
        <FeaturedJobsSection />
        <RegistrationSection />
    </div>
  )
}

export default HomepagePage