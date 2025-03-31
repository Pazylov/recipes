import React from 'react'
import HeroSection from './sections/hero/HeroSection'
import OurAdvantages from './sections/ourAdvantages/OurAdvantages'
import PopularRecipes from './sections/popularRecipes/PopularRecipes'

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<OurAdvantages />
			<PopularRecipes />
		</>
	)
}

export default HomePage
