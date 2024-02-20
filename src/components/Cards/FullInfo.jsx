import { Link } from 'react-router-dom';
import style from '../../Styles/Styles.module.css';
import NavigationLink from '../Header/NavigationLink';
import AppContext from "../../context";
import { useContext } from 'react';
import DataPofile from '../../store/data/DataProfile.json';
import Card from './Card';
import Home from '../../pages/Home/Home';
import { useParams } from 'react-router-dom';




const FullInfo = () => {
	const { users } = useContext(AppContext);
	const { name } = useParams();
	const user = users.filter(user => user.fullName === name);
	console.log(users);
	return (<>
		<NavigationLink />
		<div id={style.backgroundInfo} className='p-9'>
			<div>
				<Card data={user[0]} isSingle />
			</div>
		</div>
	</>
	)
}




export default FullInfo;
