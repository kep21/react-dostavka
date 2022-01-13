import React from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";
import "@fontsource/rubik-mono-one";
import "@fontsource/rosario";
const Navbar = () => {
	return (
	<nav className="nav">
		<img className="bike" alt="bike" src="https://image.freepik.com/free-vector/food-delivery-logo-with-motorbike-design_1447-30.jpg"/>
		<div className="dostavka">Dostavka NYA</div>
		<div className="main">
   <NavLink to="Home" className="golovna">Головна</NavLink>
 </div>
 <div className="pro">
	 <NavLink to="Another">Про нас</NavLink>
 </div>
			<div className="telp">
			<a href="tel:+380686050601">Зателефонувати</a>
			</div>
			<div className="inst">
			<a className="nst" href="https://www.instagram.com/dostavka_nya/">@instagram</a>
			</div>
			<div className="telegram">
				<a className="telega" href="https://t.me/Dostavka_nyaBot">Telegram</a>
			</div>
	</nav>
	)
}
export default Navbar;
