import React from 'react';
import axiosInstance from '../../features/auth/axios';
import { AGENT_ORDER_API } from '../../apis';
import { toast } from 'react-toastify';

const Modal = ({ order_id = 0 }) => {
	const onClickCollected = async () => {
		await axiosInstance
			.put(`${AGENT_ORDER_API}${order_id}/`, {
				is_collected: true,
			})

			.then((response) => {
				console.log(response.data);
				toast.success('updated', { hideProgressBar: true });
			})
			.catch((err) => {
				console.log(err.data);
				toast.error("Can't update, retry or contact customer service!");
			});
	};

	return (
		<div>
			<label
				htmlFor="my-modal"
				className="btn btn-sm btn-outline"
			>
				Make Collected
			</label>

			{/* Put this part before </body> tag */}
			<input
				type="checkbox"
				id="my-modal"
				className="modal-toggle"
			/>
			<div className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Confirm !</h3>
					<p className="py-4">Are you sure!, change status to collected?</p>
					<div className="modal-action">
						<label
							htmlFor="my-modal"
							className="btn btn-primary"
                            onClick={onClickCollected}
						>
							Yes
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
