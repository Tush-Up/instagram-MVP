import picture from '../img/Picture1.png';
import picture2 from '../img/Picture2.png';
import picture3 from '../img/Picture3.png';
import tushup from '../asserts/tushup.jpg';

export function Posts() {
	return (
		<section className="card">
			<div className="user">
				<img src={tushup} alt="profileIcon" />
				<p>TushUp</p>
				{/* <div className="ellipse">
					<Ellipse />
				</div> */}
			</div>

			<div className="picture">
				<div className="slideshow">
					<button class="slide-btn slide-btn-1" />
					<button class="slide-btn slide-btn-2" />
					<button class="slide-btn slide-btn-3" />
					<div class="slideshow-wrapper">
						<div class="slide">
							<img class="slide-img" src={picture} alt="Post1" />
						</div>
						<div class="slide">
							<img class="slide-img" src={picture2} alt="Post2" />
						</div>
						<div class="slide">
							<img class="slide-img" src={picture3} alt="Post3" />
						</div>
					</div>
					{/* <button class="slide-btn slide-btn-1" />
					<button class="slide-btn slide-btn-2" />
					<button class="slide-btn slide-btn-3" /> */}
				</div>
			</div>
		</section>
	);
}
