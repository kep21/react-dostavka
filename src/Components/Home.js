import React from "react";
import './Home.css';
import Footer from "./Footer";
import "@fontsource/rubik-mono-one";
import "@fontsource/rosario"

const Home = () => {
	return (
		<div>

		<div className="war">
	<img className='mot' alt="curer" src="https://st2.depositphotos.com/1002191/8495/v/600/depositphotos_84953674-stock-illustration-courier-rides-on-scooter-colored.jpg"/>
	</div>
	<div className="text">  Швидка та якісна доставка
   </div>
	 <div className="pidtekst">Доставляємо по місту та околицях</div>
	 <div className="btn">
		 <button className="ntb">Зробити замовлення</button>
	 </div>



	 <div className="perevaga">Переваги</div>
	 <div className="trangle"></div>
	 <img className="food" src="https://cdn-icons-png.flaticon.com/512/98/98017.png"/>
	 <div className="zvilnu">Звільни вечір</div>
	 <div className="kub"></div>
	 <img className="chicken" src="https://cdn-icons-png.flaticon.com/512/261/261181.png"/>
	 <div className="nasoloda">Отримай насолоду від їжі</div>
	 <div className="kvadrat"></div>
	 <div className="zdorovum">Залишайся здоровим</div>
	 <img className="weather" src="https://img.icons8.com/material/344/rainwater-catchment.png "/>
	 <div className="square"></div>
	 <div className="pereglan">Переглянь улюблений фільм</div>
	 <img className="cinema" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLcezAhkG3Bgzji7j3bSQFUcXtZWcqcYbGDA&usqp=CAU"/>

	<Footer/>
	</div>
	)
}
export default Home;
