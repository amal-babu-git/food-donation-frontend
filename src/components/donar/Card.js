import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserInfo } from '../../features/auth/authUserSlice'

const Card = ({ donation }) => {

    const userInfo = useSelector(selectUserInfo)

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
                        </tbody>
                    </table>
                    <div>
                        {
                            userInfo.user_type === 'A' && <button className='btn btn-outline btn-primary m-1'>Book </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card