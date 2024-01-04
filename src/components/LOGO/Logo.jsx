import { Link } from "react-router-dom";
import headerStyles from './../../Styles/Styles.module.css';


const Logo = () => {
	return <div >	
		<Link id={headerStyles.title} to='/'> 
		   <div className='flex text-yellow-100 pr-8 justify-center'>
				<div className='w-max '>
					<img className='rounded-full p-2 w-10 h-10 bg-transparent' 
					     src='https://cryptologos.cc/logos/solana-sol-logo.png?v=029'
					     alt='star'></img>
				</div>
				<div className="branding text-xm font-bold text-center text-yellow-100">
				Access
				</div>
			</div>
	   </Link>
	</div>
}



export default Logo;