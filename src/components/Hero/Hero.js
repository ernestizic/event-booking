import React from 'react';

import HeroImage from '../../assets/event-img.jpg';

import {
	HeroContainer,
	HeroImageContainer,
	MissionContainer,
} from './Hero.styled';

const Hero = () => {
	return (
		<HeroContainer>
			<MissionContainer>
				<header>
					Our mission is to <span className='highlight'>advance</span> humanity
				</header>
				<p>
					We would strive to achieve that through providing quality education.
				</p>

			</MissionContainer>
			<HeroImageContainer>
				<img src={HeroImage} alt='an office with chairs and a board' />
			</HeroImageContainer>
		</HeroContainer>
	);
};

export default Hero;
