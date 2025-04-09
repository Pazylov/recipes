import React from 'react'
import Bestsellers from './sections/bestsellers/Bestsellers'
import HeroSection from './sections/hero/HeroSection'
import OurAdvantages from './sections/ourAdvantages/OurAdvantages'
import PopularRecipes from './sections/popularRecipes/PopularRecipes'

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<OurAdvantages />
			<PopularRecipes />
			<Bestsellers />
		</>
	)
}

export default HomePage
