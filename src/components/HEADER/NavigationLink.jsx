import { useState } from 'react';
import { NavLink } from "react-router-dom";
import headerStyles from './../../Styles/Styles.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../Logo/Logo';
import SoppingCart from '../Shopping-cart/SoppingCart';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';



const NavigationLink = () => {
	const [openedMenu, setOpenedMenu] = useState(false);
	const toggles = () => setOpenedMenu((openedMenu) => !openedMenu);
	const user = auth.currentUser;

	onAuthStateChanged(auth, (user) => {
		if (user) {
			const uid = user.uid;
		} else {
			console.log('No users')
		}
	});



	return <header id={headerStyles.head}>
		<nav id={headerStyles.nav} >
			<Logo />
			<div id={headerStyles.cart_mobile} className='absolute right-1 top-2.5'><SoppingCart /></div>
			<div id={headerStyles.menu} className='relative' onClick={toggles}>
				<span></span>
				<span></span>
				<span></span>
			</div >

			<ul id={openedMenu ? headerStyles.close : headerStyles.show} className='text-indigo-300'>
				<li className='transform hover:scale-110 transition duration-400 hover:text-yellow-100'>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li className="transform hover:scale-110 transition duration-400 hover:text-yellow-100">
					<NavLink to='/category'>Category</NavLink>
				</li>
				<li className="transform hover:scale-110 transition duration-400 hover:text-yellow-100">
					<NavLink to='/about'>About</NavLink>
				</li>
				<li className="transform hover:scale-110 transition duration-400 hover:text-yellow-100">
					<NavLink to='/services'>Services</NavLink>
				</li>
				<li className="transform hover:scale-110 transition duration-400 hover:text-yellow-100">
					<NavLink to='/contacts'>Contacts</NavLink>
				</li>
				<div id={headerStyles.cart}><SoppingCart /></div>

				<SearchBar />

				<li className='transform hover:scale-110 transition duration-400 hover:text-yellow-100'>
					<NavLink to={user ? `/profile/${user.uid}` : '/login'}>{user ? user.email : 'Login'}</NavLink>
				</li>
			</ul>
		</nav>
	</header>
}


export default NavigationLink;