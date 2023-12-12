import {useState} from 'react';
import NavigationLink from '../Header/NavigationLink';
import { auth, storage } from '../../firebase';
import { signOut } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes} from "firebase/storage";
import { database } from '../../firebase';
import { set } from 'firebase/database';


const AuthDetails = ()=> {
	const[isEditing, setIsEditing] = useState(false);
	const[firstName, setFirstName] = useState('');
	const[lastName, setLastName] = useState('');
	const[tel, setTel] = useState('');
	const[image, setImage] = useState('');
	const[imageUrl, setImageUrl] = useState('');


	const signout = () => {
		signOut(auth).then(() => {
		console.log('Signed out');
      window.location.replace('/signup');
	 }).catch((error) => {
		console.log(error.code);
	 });
	};

	const handleChange =(e) => {
		if(e.target.files[0]){
			setImage(e.target.files[0]);
			
		}
		
	}
	const submitData =()=>{
		const storageRef = ref(storage, 'image');
		uploadBytes(storageRef, image).then((snapshot) => {
			
			
			getDownloadURL(storageRef).then(url=>{
				
				setImageUrl(url);
				set(ref(database, 'user1'),{
					profile_picture: url
				});
			
			 
         }).catch((error)=>console.log(error.code));
			console.log('Uploaded a blob or file!');
	  });
	};
	
	
	return <div className='min-h-screen'>
		<NavigationLink />
         <form className='m-5 pl-10 pt-6 pb-10 h-96 border-2 w-1/2  flex flex-col items-start bg-blue-200 shadow-2xl'
			  onSubmit={(e) => {
				 e.preventDefault();
				 setIsEditing(!isEditing);
				}
			}>{isEditing? <div>
					<label> Profile photo: <br></br>
						<input className='border-2 p-1 mt-2 text-sm center bg-blue-300 shadow-2xl text-black' type='file' onChange={handleChange}></input>
					</label>
					<button className='ml-4 border-2 text-sm mt-2 px-1 h-6 center bg-blue-300 shadow-2xl text-black' type='button' onClick={submitData}> Upload file </button><br></br>
				</div>:<div>
					
					<p>Profile photo</p><img src={imageUrl} className='w-24 h-24 mt-2' alt='uploaded photo'/></div>
				
				} <br></br>
				
				<label className='text-black'>
					First name:{' '}
					{isEditing ? (
						<input className='border-2 text-black'
						       value={firstName}
						       onChange={(e) => setFirstName(e.target.value)}></input>
					): (
						<b className='text-black'> 
							{firstName}
						</b>
					)}
				
				</label><br></br>
				<label>
					Last name:{' '}
					{isEditing ? (
						<input className='border-2'
						       value={lastName}
						       onChange={(e) => setLastName(e.target.value)}></input>
					): (
						<b> 
							{lastName}
						</b>
					)
					      }
				</label><br></br>
				<label className='text-black'>
					Phone number: {' '}
					{isEditing ? (
						<input className='border-2 text-black'
						       value={tel}
						       onChange={(e) => setTel(e.target.value)}></input>
					): (
						<b className='text-black'> 
							{tel}
						</b>
					)
					      }
				</label><br></br>
				<button className='border-2 h-6 text-sm w-24 bg-blue-300 shadow-2xl text-black'
				        type='submit'>{isEditing? 'Save profile': 'Edit profile'}</button>
			   <button type='submit'
				        onClick={signout}
						  className='border-2 pb-2 border-none mt-2 mb-14 w-24 center h-6  text-sm bg-orange-950 text-white'
						  >Sign out</button>	  

			</form>   
	</div>
}

export default AuthDetails;