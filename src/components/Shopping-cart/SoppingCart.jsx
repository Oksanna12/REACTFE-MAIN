import headerStyles from './../../Styles/Styles.module.css'

const SoppingCart = () => {
	return (
		<div id={headerStyles.cart_icon} className='ml-16'>
			<button className='w-9 h-9 hover:scale-110 duration-500'>
				<img src='https://cdn2.iconfinder.com/data/icons/Siena/48/shopping_cart%20yellow.png' 
				     alt='sopping-cart'></img>
			</button>
		</div>
	)
}


export default SoppingCart;