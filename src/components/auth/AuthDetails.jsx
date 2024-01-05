import { useState } from 'react';
import NavigationLink from '../Header/NavigationLink';
import { auth, db, storage } from '../../firebase';
import { signOut } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { database } from '../../firebase';
import { set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import style from '../../Styles/Styles.module.css'


const AuthDetails = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [tel, setTel] = useState('');
	const [image, setImage] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const navigate = useNavigate();

	const signout = () => {

		signOut(auth).then(() => {
			console.log('Signed out');
			navigate('/signup');
			console.log('sign out')
		}).catch((error) => {
			console.log(error.code);
		});
	};

	const handleChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	}
	const submitData = () => {
		const storageRef = ref(storage, 'image');
		uploadBytes(storageRef, image).then((snapshot) => {
			getDownloadURL(storageRef).then(url => {
				setImageUrl(url);
				set(ref(database, 'user1'), {
					profile_picture: url,
				});
			}).catch((error) => console.log(error.code));
			console.log('Uploaded file!');
		});
	};


	return <div id={style.backgroundUser} className='min-h-screen pb-6'>
		<NavigationLink />

		<form id={style.authForm} className='m-auto mt-5 pl-10 pt-6 pb-10 h-4/5 border-double bg-white/50 border-2
			 w-1/2 flex flex-col items-start shadow-2xl'
			onSubmit={(e) => {
				e.preventDefault();
				setIsEditing(!isEditing);
			}
			}>{isEditing ? <div>
				<label><strong>Profile photo:</strong> <br></br>
					<input className='rounded-2xl border-2 p-1 pl-4 mt-2 
						text-sm center bg-blue-300 shadow-2xl text-black' type='file'
						onChange={handleChange}></input>
				</label>
				<button className='hover:bg-blue-400 transition duration-400 rounded-2xl ml-4 border-2 text-sm
					 mt-2 px-4 h-6 center bg-blue-300 shadow-2xl text-black'
					type='button' onClick={submitData}> Upload file </button><br></br>
				<img src={imageUrl} className='rounded-2xl w-24 h-24 mt-2' alt='upload photo' />
			</div> : <div>
				<p><strong>Profile photo:</strong></p><img src={imageUrl} className='rounded-2xl w-24 h-24 mt-2'
					alt='uploaded photo' /></div>
			} <br></br>
			<label className='rounded-2xl text-black'>
				<strong>First name:</strong>{' '}
				{isEditing ? (
					<input className='rounded-2xl border-2 text-black'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}></input>
				) : (
					<b className='rounded-2xl text-black'>
						{firstName}
					</b>
				)}
			</label><br></br>
			<label>
				<strong>Last name:</strong>{' '}
				{isEditing ? (
					<input className='rounded-2xl border-2'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}></input>
				) : (
					<b>
						{lastName}
					</b>
				)}
			</label><br></br>
			<label className='text-black'>
				<strong>Phone number:</strong> {' '}
				{isEditing ? (
					<input className='rounded-2xl border-2 text-black'
						value={tel}
						onChange={(e) => setTel(e.target.value)}></input>
				) : (
					<b className='rounded-2xl text-black'>
						{tel}
					</b>
				)}
			</label><br></br><br></br>
			<div className='mt-14'>
				<button onClick={submitData} className='transform hover:scale-105 transition duration-400
					 rounded-2xl border-2 h-6 text-sm w-24 bg-blue-300 shadow-2xl text-orange-950'
					type='submit'>{isEditing ? 'Save profile' : <strong>Edit profile</strong>}</button><br></br>
				<button type='submit'
					onClick={signout}
					className='transform hover:scale-105 transition duration-400 rounded-2xl pb-2
						  border-none mt-2 mb-14 w-24 center h-6 text-sm bg-orange-950 text-white'
				>Sign out</button>
			</div>
		</form>
	</div>
}

export default AuthDetails;