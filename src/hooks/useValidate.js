import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function useValidate(){
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			confirmPassword: ''
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Invalid email address').required('Required'),
			password: Yup.string().max(15, 'Must be less than 15 characters').min(4, 'Must be more than 3 characters').required('Required'),
			confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Passwords must be same").required("Required")
		}),
	});


  return {
    formik
  };
};

