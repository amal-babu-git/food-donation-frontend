import React, { useEffect, useState } from 'react';
import axiosInstance from '../../features/auth/axios';

const Card = ({ order }) => {
	const [collected, setCollected] = useState(false);

    useEffect(()=>{
        if(collected){

        }
    },[collected])


    // TODO:
    // const updateCollectedStatus=async()=>{
    //     await axiosInstance.is
    // }


	return (
		<div className="card w-96 shadow-xl bg-base-100">
			<div className="card-body">
				{/* <h2 className="card-title">{order?.id}</h2> */}
				<div className="overflow-x-auto">
					<table className="table w-full">
						{/* <!-- head --> */}

						<tbody>
							<tr>
								<th>Order ID</th>
								<td>{order?.id}</td>
							</tr>

							<tr className="active">
								<th>Food Details</th>
								<td>{order?.food_details}</td>
							</tr>

							<tr>
								<th>Donar Details</th>
								<td>{order?.donar_details}</td>
							</tr>
							<tr className="active">
								<th>Donar Contact</th>
								<td>{order?.donar_contact}</td>
							</tr>
							<tr>
								<th>Agent</th>
								<td>{order?.user}</td>
							</tr>
							<tr>
								<th>Is Collected</th>
								{order?.is_collected ? (
									<td className="text-blue-400">Collected</td>
								) : (
									<td className="text-red-400">Not collected</td>
								)}
							</tr>
						</tbody>
					</table>
				</div>

				{/* <div className="form-control w-52">
					<label className="cursor-pointer label">
						<span className="label-text">Collected</span>
						<input
							type="checkbox"
							className="toggle toggle-primary"
                            onChange={()=>setCollected(true)}
                            // disabled={collected}
						/>
					</label>
				</div> */}
			</div>
		</div>
	);
};

export default Card;