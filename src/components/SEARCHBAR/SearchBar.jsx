import {useState} from 'react';
import headerStyle from './../../Styles/Styles.module.css';
import data from './../../store/data/DataProfile.json';


const SearchBar = () => {
	const [value, setValue] = useState("");
	const onChange = (e) => {
		setValue(e.target.value);
	};
	const searchTerm = value.toLowerCase();

	return <div id={headerStyle.search_box}>
		<div id={headerStyle.search} 
		     className='relative w-52 h-6 top-1 ml-3 mt-1 bg-white rounded-3xl opacity-50'>
			<form>
				<input id={headerStyle.search_input} type='text'
					className='absolute left-0 bottom-0 w-48 bg-transparent focus:outline-none text-xm
				   h-3 border-hidden p-3 rounded-3xl text-black'
					placeholder='Search here..'
					value={value}
					onChange={onChange} />
				<div>
					<a href='#'>
						<img className='absolute right-0 z-50 w-7 h-6 rounded-full pr-1'
							  src='https://cdn2.iconfinder.com/data/icons/lightly-icons/30/search-240.png'></img>
					</a>
				</div>
			</form>
		</div>
		<div id={headerStyle.dropdown} className='absolute top-12 w-52 ml-3 mt-1
		bg-slate-50 rounded border-grey flex flex-col'> {data.filter((user) =>
		searchTerm && user.qualifications.toLowerCase().startsWith(searchTerm) && user.qualifications.toLowerCase()
		!== searchTerm).map(user => (<div key={user.id} onClick={() =>
		setValue(user.qualifications)} className='cursor-pointer text-start text-base mx-1 
		my-1 '> {user.qualifications} </div>))} </div>
	</div>

}

export default SearchBar;