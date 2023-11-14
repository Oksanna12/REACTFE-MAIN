import { ReactDOM } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from './../../components/HEADER/Header.module.css';
import NavigationLink from "../../components/HEADER/NavigationLink";


const Login = (props) => {

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			confirmPassword: ''
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Invalid email address').required('Required'),
			password: Yup.string().max(15, 'Must be more than 10 characters').required('Required'),
			confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Passwords must be same").required("Required")
		}),

	});

	return <div className="min-h-screen">
		<NavigationLink />
		<div className="pt-5">
			<div id={style.login} className='w-7/12 m-auto border-double border-4 p-1'>
				<div className='text-2xl font-bold text-orange-950 pt-2'>Login</div>
				<form id={style.forma} onSubmit={formik.handleSubmit} className="  text-xl space-y-2 flex justify-center flex-col m-auto w-64 h-72">
					<label htmlFor='email'>Email</label>
					<input className='p-1 border rounded border-gray-400  text-sm '
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
						<button className="border rounded p-2 text-base mt-2 bg-orange-950 text-yellow-100" type="submit">Submit</button>
					</div>
				</form>
			</div>
		</div>
	</div>
}


export default Login;