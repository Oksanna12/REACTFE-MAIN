import React from 'react';
import { Link } from "react-router-dom";
import style from './../HEADER/Header.module.css';


const Logo = () => {
	return <div >	
		<Link id={style.title}  to='/home'> 
		   <div className='flex  text-yellow-100 pr-8 justify-center'>
				<div className='w-max '>
					<img className='rounded-full p-2 w-10 h-10 ' src='https://cdn1.iconfinder.com/data/icons/christmas-flat-4/58/020_-_Star-256.png' ></img>
				</div>
				<div className=" branding text-xm font-bold text-center text-yellow-100">
					HEADER
				</div>
			</div>
	   </Link>
	</div>
}



export default Logo;