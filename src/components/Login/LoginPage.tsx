import * as React from 'react';
import { Formik } from 'formik';
import DividerIcon from '../Icons/DividerIcon/DividerIcon';
import GoogleIcon from '../Icons/GoogleIcon/GoogleIcon';
import OAuthSection from '../OAuthSection/OAuthSection';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import EyeIcon from '../Icons/EyeIcon/EyeIcon';

interface IErrors {
	email: string;
	password: string;
}

const SignupSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string()
		.min(8, 'Too Short!')
		.max(255, 'Too Long!')
		.required('Required'),
});

const LoginPage = () => {
	const [isShow, setIsShow] = React.useState<boolean>(false);
	const getInputClassName = (error: string | boolean | undefined) => (
		`qc-form__input ${error ? "qc-form__input-error" : ""}`
	);

	return (
		<div className="qc-login-wrapper">
			<h2 className="qc-login__title">Log in to your account</h2>
			<OAuthSection />
			<DividerIcon />

			<div className="qc-form-wrapper">
				<Formik
					initialValues={{ email: '', password: '' }}
					validationSchema={SignupSchema}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							console.log(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
					>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
					}) => (
						<form className="qc-form" onSubmit={handleSubmit}>
							<div className="qc-form__input-wrapper">
								<input
									placeholder='Email'
									type="email"
									name="email"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									className={getInputClassName(errors.email && touched.email)}
								/>
								<div className="qc-form-error">
									{errors.email && touched.email && errors.email}
								</div>
							</div>
							<div className="qc-form__input-wrapper">
								<input
									placeholder='Password'
									type={isShow ? 'text' : 'password'}
									name="password"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
									className={getInputClassName(errors.password && touched.password)}
								/>
								<div className="qc-eye-icon" onClick={() => setIsShow(!isShow)}>
									<EyeIcon isShow={isShow}/>
								</div>
								<div className="qc-form-error">
									{errors.password && touched.password && errors.password}
								</div>
							</div>
							<div className="qc-link-wrapper">
								<Link className="qc-link" to="/forgotPassword">Forgot your password?</Link>
							</div>
							<div className="qc-form__submit">
								<button
									type="submit"
									disabled={isSubmitting}
									className="qc-form__submit-btn"
								>
									Log in to Qencode
								</button>
							</div>
						</form>
					)}
				</Formik>
				<div className="qc-link-wrapper bottom">
					Is your company new to Qencode?
					<Link className="qc-link" to="/forgotPassword"> SignUp</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
