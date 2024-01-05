import { useContext, useState } from 'react';
import Card from '../../components/Cards/Card';
import NavigationLink from '../../components/Header/NavigationLink';
import style from './../../Styles/Styles.module.css';
import AppContext from '../../context';
import DataPofile from '../../store/data/DataProfile.json';



const Home = () => {
	const { users } = useContext(AppContext);
	const [search, setSearch] = useState('');


	return <div className="min-h-screen">
		<NavigationLink />
		<div className='h-full' id={style.background}>
			<div className='p-8'>
				<div className='pt-24 h-72 rounded-2xl shadow-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500'>
					<strong className='pt-36 text-align:center text-4xl text-orange-950'>Interactive Doctor Directory
						for Easy Healthcare Access</strong>
				</div>
				<form className='mt-20 mb-8'>
					<input className='h-14 w-3/4 p-1 border rounded border-gray-400 text-lg bg-white/50 sm:h-9'
						type='text'
						onChange={(e) => setSearch(e.target.value)}
						placeholder='Search qualification'
					/>
				</form>
				<div id={style.container}>
					<div id={style.cards}>
						{users.filter((user) => {
							return search.toLowerCase() === "" ? user : user.qualifications.toLowerCase().includes(search)
						}).map((user) => {
							return (
								<Card key={user.qualifications} data={user} className="bg-sky-500 hover:bg-sky-700" />
							)
						})
						}
					</div>
				</div>
			</div>
		</div>
	</div>
}


export default Home;