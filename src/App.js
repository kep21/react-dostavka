import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Another from './Components/Another';
import './App.css';
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'


const App = () => {
	return (
		<BrowserRouter>
<Navbar/>
<Routes>
	<Route path="/Home" element = {<Home/>}/>
	<Route path="/Another" element = {<Another/>}/>
</Routes>
 </BrowserRouter>
	)
}

export default App;
