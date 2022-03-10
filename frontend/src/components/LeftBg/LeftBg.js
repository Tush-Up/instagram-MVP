import React from 'react';
import './LeftBg.css';
import bgImage from '../../assets/bg.png';
import InstaIcon from '../../assets/IGVector.png';
import logo from '../../assets/logo.png';

const LeftBg = () => {
	return (
		<div className="left">
			<div className="bg-div">
				<img className="bg" src={bgImage} alt="Bg image" />
			</div>
			<div className="tp">
				<img src={InstaIcon} alt="Instagram Icon" />
				<img src={logo} alt="Logo" />

				<div className="left-texts">
					<p>Already have an account?</p>
					<p>Log in</p>
				</div>
			</div>
		</div>
	);
};

export default LeftBg;
