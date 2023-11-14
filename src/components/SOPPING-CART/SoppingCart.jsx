import React, {useState} from 'react';
import style from './../HEADER/Header.module.css'

const SoppingCart = () => {
	return (
		<div id={style.cart_icon} className='ml-16'>
			<button className='w-9 h-9 hover:scale-110 duration-500'>
				<img  src='https://cdn2.iconfinder.com/data/icons/Siena/48/shopping_cart%20yellow.png' ></img>
			</button>
		</div>
	)
}


export default SoppingCart;