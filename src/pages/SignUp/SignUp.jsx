import style from './../../../src/Styles/Styles.module.css';
import NavigationLink from "../../components/Header/NavigationLink";
import { Link, useNavigate } from 'react-router-dom';
import { auth, database, db } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from 'firebase/database';
import { useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import useValidate from '../../hooks/useValidate.js';



const SignUp = () => {

	const [err, setErr] = useState('');
	let navigate = useNavigate();
	const { formik } = useValidate();

	let register = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password)
			.then((user) => {
				console.log(user.user.email);
				navigate('/');
				dataStore();
			})
			.catch((error) => {
				console.log(error);
				if (error.code == 'auth/email-already-in-use') {
					setErr('Email already in use!')
				}
			});
	}

	async function dataStore() {
		const userRef = doc(db, "User_profile", auth.currentUser.uid)
		await setDoc(userRef, {
			name: formik.values.email
		});
	}

	return <div id={style.signupContainer} className="min-h-screen">
		<NavigationLink />
		<div className="pt-5 pb-10">
			<div id={style.signup} className='w-7/12 m-auto border-double border-4 p-1 bg-white/20'>
				<div className='text-2xl font-bold text-orange-950 pt-2'>SignUp</div><br></br>

				<form method='POST' id={style.forms} onSubmit={formik.handleSubmit}
					className="text-xl space-y-2 flex justify-center flex-col m-auto w-64 h-96 mb-20">
					<label htmlFor='email'>Email</label>
					<input id={style.input} className='p-1 border rounded border-gray-400 text-sm'
						name='email'
						type='text'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
					{formik.touched.email && formik.errors.email ? (
						<div className='text-sm text-red-600'>{formik.errors.email}</div>
					) : null}
					<label htmlFor='password'>Password</label>
					<input className='p-1 border rounded border-gray-400 text-sm'
						name='password'
						type='text'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
					/>
					{formik.touched.password && formik.errors.password ? (
						<div className='text-sm text-red-600'>{formik.errors.password}</div>
					) : null}
					<label htmlFor='confirmPassword'>Confirm Password</label>
					<input className='p-1 border rounded border-gray-400 text-sm'
						name='confirmPassword'
						type='text'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.confirmPassword}
					/>
					<p className='text-sm text-red-500'>{err}</p>
					{formik.touched.confirmPassword && formik.errors.confirmPassword ? (
						<div className='text-sm text-red-600'>{formik.errors.confirmPassword}</div>
					) : null}

					<div className="pt-4">
						<button onClick={register} className="border rounded p-2 text-base mt-2 bg-orange-950 text-yellow-100"
							type="submit">Submit</button>
					</div>
					<Link className="text-sm text-indigo-500 hover:underline"
						to="/login"><p>Already have an account? Login</p></Link>
				</form>
			</div>
		</div>
	</div>
}


export default SignUp;