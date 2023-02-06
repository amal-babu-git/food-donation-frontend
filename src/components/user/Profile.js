import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchUserInfo,
	getFetchUserInfoError,
	getFetchUserInfoStatus,
	selectUserInfo,
} from '../../features/auth/authUserSlice';
import { FAILED, LOADING, SUCCESS } from '../../apis';
import { toast } from 'react-toastify';

const Profile = () => {
	const dispatch = useDispatch();
	const userInfoStatus = useSelector(getFetchUserInfoStatus);
	const userInfoError = useSelector(getFetchUserInfoError);
	const userInfo = useSelector(selectUserInfo);

	useEffect(() => {
		console.log('fetch-user-info');
		dispatch(fetchUserInfo());
	}, []);

	let content = '';

	switch (userInfoStatus) {
		case LOADING:
			content = (
				<progress className="progress progress-primary mt-0 mb-1"></progress>
			);
			break;
		case SUCCESS:
			console.log("email",userInfo[0]?.email)
			content = (
				<div className="hero min-h-screen bg-base-200">
					<div className="hero-content flex-col lg:flex-row-reverse">
						<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
							<div className="card-body">
								<p className="card-title mb-5 ">My Profile</p>
								<p className="text-blue-600">{userInfo[0]?.user_type==='D' && 'Donar' }</p>
								<p className="text-blue-600">{userInfo[0]?.user_type==='A' && 'Agent' }</p>
								<p className="text-blue-600">{userInfo[0]?.user_type==='AD' && 'Admin' }</p>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Full Name</span>
									</label>
									<input
										type="text"
										placeholder="full_name"
										className="input input-bordered"
										value={userInfo[0]?.full_name}
										disabled
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input
										type="email"
										placeholder="email"
										className="input input-bordered"
										value={userInfo[0]?.email}
										disabled
									/>
								</div>

								{/* <div className="form-control mt-6">
								<button className="btn btn-primary">Login</button>
							</div> */}
							</div>
						</div>
					</div>
				</div>
			);

			break;

		case FAILED:
			toast.error(
				'cant load, please login again. Or Contact the customer care.'
			);
			break;
		default:
			break;
	}
	return (
		<div className="mt-0 ">
			{content}
		</div>
	);
};

export default Profile;
