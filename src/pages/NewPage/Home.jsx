import React from 'react';
import NavigationLink from '../../components/HEADER/NavigationLink';


const Home = () => {
	return <div className="min-h-screen">
		<NavigationLink />

		<div className='m-20 flex justify-center text-red-950 text-2xl'><strong>HOME</strong></div>

	</div>
}


export default Home;