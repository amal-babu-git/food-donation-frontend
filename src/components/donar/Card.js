import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserInfo } from '../../features/auth/authUserSlice'
import axiosInstance from '../../features/auth/axios'
import { AGENT_ORDER_API, DONATION_API } from '../../apis'
import { toast } from 'react-toastify'
import { setDonations } from '../../features/donar/donarSlice'
import BookModal from './BookModal'

const Card = ({ donation }) => {

    const userInfo = useSelector(selectUserInfo)
    const food_type = donation?.food_type
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    let food_t = ''
    if (food_type === 'N') {
        food_t = 'Non Veg'
    }
    else {
        food_t = 'Veg'
    }
    const food_details = donation?.food_name + ', ' + food_t
    const donar_details = donation?.user + ', ' + donation.address
    const donar_contact = donation?.contact

    const onClickBook = async () => {
        setLoading(true)
        await axiosInstance.post(AGENT_ORDER_API, {
            "food_details": food_details,
            "donar_details": donar_details,
            "donar_contact": donar_contact
        })

            .then((response) => {
                console.log('booking', response.data)
                toast.success('Successfully Booked')
                setLoading(true)
                updateIsBookedStatus()
                // fetchDonations()

            })
            .catch((err) => {
                console.log('book error', err)
                toast.error('Booking failed')
                setLoading(false)

            })
    }

    const updateIsBookedStatus = async () => {
        await axiosInstance.put(`${DONATION_API}${donation.id}/`, {
            is_booked: true
        })
            .then((response) => {
                console.log('update is_booked', response.data)
                toast.success('is_booked Status updated', { hideProgressBar: true })


            })
            .catch((err) => {
                console.log("update status  book error", err)
                toast.err("Can't update the status, Please contact to admin!")
            })
    }

    // FIXME: same code used in diff component fix this later  with single code
    // const fetchDonations = async () => {
    //     await axiosInstance
    //         .get(DONATION_API)
    //         .then((response) => {
    //             console.log('donation', response.data);
    //             dispatch(setDonations(response.data));
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             toast.error('Something went wrong!, cant fetch donation list');
    //         });
    // };




    return (
        <div className="card w-96 shadow-xl bg-base-100">
            <div className="card-body">
                <h2 className="card-title">{donation?.food_name}</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}

                        <tbody>

                            <tr>
                                <th>Food name</th>
                                <td>{donation?.food_name}</td>

                            </tr>

                            <tr className="active">
                                <th>Food type</th>
                                {(donation?.food_type === 'V') && <td> Veg </td>}
                                {(donation?.food_type === 'N') && <td> Non-Veg </td>}
                            </tr>

                            <tr>
                                <th>Address</th>
                                <td>{donation.address}</td>

                            </tr>
                            <tr className='active'>
                                <th>Contact</th>
                                <td>{donation.contact}</td>

                            </tr>
                            <tr>
                                <th>Donar</th>
                                <td>{donation.user}</td>

                            </tr>
                            <tr>
                                <th>Is Booked</th>
                                {(donation?.is_booked) && <td> Booked </td>}
                                {(!donation?.is_booked) && <td> Not Booked </td>}

                            </tr>
                        </tbody>
                    </table>

                </div>
                <div>
                    {
                        (userInfo[0]?.user_type === 'A' && !donation?.is_booked) && <button onClick={onClickBook} disabled={loading} className='btn btn-outline btn-primary m-1'>Book </button>
                    }
                    {
                        donation?.is_booked && true && <BookModal donation={donation} agent={selectUserInfo} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Card