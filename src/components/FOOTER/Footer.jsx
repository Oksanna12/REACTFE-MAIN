import { Link } from 'react-router-dom';


const Footer = () => {
	let date = new Date().getFullYear();

	return <footer>
		<div className='bg-red-950 text-indigo-300 p-10'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
					<div className='mb-3'>
						<h4 className='pb-4'><Link className='hover:text-yellow-100' to='/'>HEADER</Link></h4>
						<p className='text-gray-400'>
							3759 Traction Street <br></br>
							South Carolina 29620 <br></br>
							USA <br></br><br></br>
							<strong>Phone:</strong> +1  864-462-3396<br></br>
							<strong>Email:</strong> nkreiger@larkin.com<br></br>
						</p>
					</div>

					<div className='mb-3'>
						<h4 className='pb-4'>Useful links</h4>
						<ul className='text-gray-400'>
							<li className='pb-4'><Link className='hover:text-yellow-100
							  transition duration-200' to='/'>Home</Link></li>
							<li className='pb-4'><Link className='hover:text-yellow-100
							  transition duration-200' to='/'>About Us</Link></li>
							<li className='pb-4'><Link className='hover:text-yellow-100
							  transition duration-200' to='home'>Terms of Service</Link></li>
							<li className='pb-4'><Link className='hover:text-yellow-100
							  transition duration-200' to='home'>Privacy Policy</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className='w-full px-10 bg-orange-950 border-t-2 border-gray-600'>
			<div className='flex flex-row flex-wrap flex justify-between text-sm px-14'>
				<div className='flex text-center text-gray-500 pt-2 sm:m-auto'>
					<img className='w-5 h-5 mr-1' 
					src='https://cdn2.iconfinder.com/data/icons/copyright-line/48/copyright_patent_intellectual_property-512.png'>
					</img>
					{date} Copyright company.  All Rights Reserved </div>
				<div className='m-auto pb-2'>
					<ul className='flex '>
						<Link className='w-8 h-8 rounded-full mx-1 pt-1 mb-2 hover:opacity-60'>
							<img src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-256.png' 
							     alt='facebook'></img></Link>
						<Link className='w-8 h-8 rounded-full mx-1 pt-1 mb-2 hover:opacity-60'>
							<img src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-256.png' 
							     alt='twitter'></img></Link>
						<Link className='w-8 h-8 rounded-full mx-1 pt-1 mb-2 hover:opacity-60'>
							<img src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-512.png' 
							     alt='instagram'></img></Link>
						<Link className='w-8 h-8 rounded-full mx-1 pt-1 mb-2 hover:opacity-60'>
							<img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-256.png'></img></Link>
					</ul>
				</div>
			</div>
		</div>
	</footer>

}


export default Footer;