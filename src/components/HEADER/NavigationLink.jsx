import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import style from './Header.module.css';
import SearchBar from '../SEARCHBAR/SearchBar';
import Logo from '../LOGO/Logo';
import SoppingCart from '../SOPPING-CART/SoppingCart';




const NavigationLink = () => {
	const [openedMenu, setOpenedMenu] = useState(false);
	const toggles = () => setOpenedMenu((openedMenu) => !openedMenu);

	return <header id={style.head}>
		<nav id={style.nav} >
			<Logo />
			<div id={style.cart_mobile} className='absolute right-1 top-2.5'><SoppingCart /></div>
			
			<div id={style.menu} className='relative' onClick={toggles}>
				<span></span>
				<span></span>
				<span></span>
			</div >
			
			<ul id={openedMenu ? style.close : style.show} className='text-indigo-300'>
				<li className=' transform hover:scale-110 transition duration-400 hover:text-yellow-100'>
					<NavLink className='' to='/home'>Home</NavLink>
				</li>
				<li className="transform hover:scale-110 transition duration-400 hover:text-yellow-100 ">
					<NavLink className='' to='/category'>Category</NavLink>
				</li>
				<li className="transform hover:scale-110 transition duration-400 hover:text-yellow-100">
					<NavLink className='' to='/about'>About</NavLink>
				</li>
				<li className="transform hover:scale-110 transition duration-400 hover:text-yellow-100">
					<NavLink className='' to='/services'>Services</NavLink>
				</li>
				<li className="transform hover:scale-110 transition duration-400 hover:text-yellow-100">
					<NavLink className='' to='/contacts'>Contacts</NavLink>
				</li>
				<div id={style.cart}><SoppingCart /></div>
				
				<SearchBar />
				<li className='transform hover:scale-110 transition duration-400 hover:text-yellow-100'>
					<NavLink className='' to='/login'>Login</NavLink>
				</li>
			</ul>
		</nav>
	</header>
}


export default NavigationLink;