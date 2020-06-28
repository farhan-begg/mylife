import React, { useRef } from 'react';
// import { Navbar, Jumbotron, Nav, Container } from 'react-bootstrap';
// import './Landing.css';
// import './Slicebox.css';
// import './Landing2.css';

export default function Landing() {
  const wrapper = useRef(null)
  const sbSlider = useRef(null)
  return (
		<div className="container"> 

			<h1 className="title">My Lyfe <span>Time To Level Up</span></h1>
			<div ref={wrapper} className="wrapper">

				<ul ref={sbSlider} id="sb-slider" className="sb-slider">
					<li>
						<a href="/register" target="_blank"><img src="images/1.jpg" alt="image1"/></a>
						<div className="sb-description">
							<h3>Register</h3>
						</div>
					</li>
					<li>
						<a href="/todo" target="_blank"><img src={`${process.env.PUBLIC_URL}images/2.jpg`} alt="image2"/></a>
						<div className="sb-description">
							<h3>Todo List</h3>
						</div>
					</li>
					<li>
						<a href="/login" target="_blank"><img src={`${process.env.PUBLIC_URL}images/3.jpg`} alt="image1"/></a>
						<div className="sb-description">
							<h3>Habit Tracker</h3>
						</div>
					</li>
					<li>
						<a href="/" target="_blank"><img src={`${process.env.PUBLIC_URL}images/4.jpg`} alt="image1"/></a>
						<div className="sb-description">
							<h3>Progress Tracker</h3>
						</div>
					</li>
					<li>
						<a href="/" target="_blank"><img src={`${process.env.PUBLIC_URL}images/5.jpg`} alt="image1"/></a>
						<div className="sb-description">
							<h3>Rewards</h3>
						</div>
					</li>
					<li>
						<a href="/" target="_blank"><img src={`${process.env.PUBLIC_URL}images/6.jpg`} alt="image1"/></a>
						<div className="sb-description">
							<h3>Groundbreaking Artist</h3>
						</div>
					</li>
					<li>
						<a href="/" target="_blank"><img src={`${process.env.PUBLIC_URL}images/7.jpg`} alt="image1"/></a>
						<div className="sb-description">
							<h3>Learn More</h3>
						</div>
					</li>
				</ul>

				<div id="shadow" className="shadow"></div>

				<div id="nav-arrows" className="nav-arrows">
					<a href="#">Next</a>
					<a href="#">Previous</a>
				</div>

			</div>

		</div>

  );
}




