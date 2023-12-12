import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from './../../components/Header/Header.module.css';
import NavigationLink from "../../components/Header/NavigationLink";
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';



const Login = (props) => {

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Invalid email address').required('Required'),
			password: Yup.string().max(15, 'Must be less than 15 characters').min(4,'Must be more than 3 characters').required('Required'),
		}),

	});
	let signin=(e)=>{	
		e.preventDefault();
		signInWithEmailAndPassword(auth, formik.values.email, formik.values.password)
	   .then((user)=>{			
		  console.log(user.user.email);
		  window.location.replace('/home');
	

	   })
		
	   .catch((error)=>{
			console.log(error);			
		}); 
		
	}
	
	
	

	return <div className="min-h-screen">
		<NavigationLink />
		<div className="pt-5">
			<div id={style.login} className='w-7/12 m-auto border-double border-4 p-1'>
				<div className='text-2xl font-bold text-orange-950 pt-2'>Login</div>
				<form id={style.form} onSubmit={formik.handleSubmit} className="text-xl space-y-2 flex justify-center flex-col m-auto w-64 h-80">
					<label htmlFor='email'>Email</label>
					<input className='p-1 border rounded border-gray-400 text-sm '
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
					
					<div className="pt-4">
						<button onClick={signin} className="border rounded p-2 text-base mt-2 bg-orange-950 text-yellow-100" type="submit">Submit</button>
					</div>
					<Link className="text-sm text-indigo-500 hover:underline" to="/signup"><p>Create Account</p></Link>
				</form>
			</div>
		</div>
	</div>
}


export default Login;