import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EMAIL_REGEXP } from '../../apis';

const Register = () => {
	const navigate = useNavigate();

	const initialValues = {
		full_name: '',
		email: '',
		user_type: '',
		password: '',
		confirm_password: '',
	};

	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	// const [passwordType, setPasswordType] = useState('password');

	const onChangeInputFieldsHandler = (e) => {
		const { name, value } = e.target;

		setFormValues({ ...formValues, [name]: value });
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();

		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};

	const validate = (values) => {
		const errors = {};

		if (!EMAIL_REGEXP.test(values.email)) {
			errors.email = 'This is not valid email';
		}
		if (values.password.length < 6) {
			errors.password = 'Password must be more than 5 character';
		}
		if (!(values.password === values.confirm_password)) {
			errors.confirm_password = "Password doesn's match";
		}
		if ((values.user_type === '')) {
			errors.user_type = "Select user type";
		}

        console.log(errors)
		return errors;
	};

	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log('fv', formValues);

			// registerUserHandler(formValues);
		}
	}, [formErrors]);

	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Register now!</h1>
						<p className="py-6">
							"Make a difference in your community by registering for a Warm
							Hugs account. Join the fight against hunger and help nourish those
							in need today."
						</p>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<div className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Full Name</span>
								</label>
								<input
									type="text"
									placeholder="Full Name"
									className="input input-bordered input-primary"
									id="full_name"
									name="full_name"
									onChange={onChangeInputFieldsHandler}
									value={formValues.full_name}
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="text"
									placeholder="email"
									className="input input-bordered input-primary"
									id="email"
									name="email"
									onChange={onChangeInputFieldsHandler}
									value={formValues.email}
									required
								/>
								<p className="text-red-500">{formErrors.email}</p>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									placeholder="password"
									className="input input-bordered input-primary"
									id="password"
									name="password"
									onChange={onChangeInputFieldsHandler}
									value={formValues.password}
									required
								/>
								<p className="text-red-500">{formErrors.password}</p>

								{/* <label className="label">
									<a
										href="#"
										className="label-text-alt link link-hover"
									>
										Forgot password?
									</a>
								</label> */}
							</div>

							<div className="form-control">
								<label className="label">
									<span className="label-text">Confirm Password</span>
								</label>
								<input
									type="password"
									placeholder="password"
									className="input input-bordered input-primary"
									id="confirm_password"
									name="confirm_password"
									onChange={onChangeInputFieldsHandler}
									value={formValues.confirm_password}
									required
								/>
								<p className="text-red-500">{formErrors.confirm_password}</p>
							</div>

							<div className="form-control">
								<label className="label cursor-pointer">
									<span className="label-text">Donar</span>
									<input
										type="radio"
										name="user_type"
										className="radio checked:bg-blue-500"
										onChange={onChangeInputFieldsHandler}
										value="D"
									/>
								</label>
							</div>
							<div className="form-control">
								<label className="label cursor-pointer">
									<span className="label-text">Agent</span>
									<input
										type="radio"
										name="user_type"
										className="radio checked:bg-blue-500"
										onChange={onChangeInputFieldsHandler}
										value="A"
									/>
								</label>
								<p className="text-red-500">{formErrors.user_type}</p>
							</div>

							<div className="form-control mt-6">
								<button
									className="btn btn-primary"
									onClick={onSubmitHandler}
								>
									Register
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
