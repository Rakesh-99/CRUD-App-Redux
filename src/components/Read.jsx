import React, { useEffect, useState } from 'react';
import { getUser, deleteUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CustomModel from './CustomModel';
import { Link } from 'react-router-dom';


const Read = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [id, setId] = useState();


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, []);

    const { user, loading } = useSelector((state) => {
        return state.app
    })

    if (loading) {
        return (
            <div className="h-screen w-full flex justify-center items-center">
                <h1 className='text-2xl font-semibold text-indigo-500'>Loading...</h1>
            </div>
        )
    }

    const clickShowPopUp = (id) => {
        setShowPopup(true);
        setId(id);
    }

    return (
        <div className='grid grid-cols-3 gap-5 py-10 px-10  '>
            {showPopup && <CustomModel showPopup={setShowPopup} setShowPopup={setShowPopup} id={id} />}
            {user && user.map((getInfo) => {
                return (
                    <div className='w-full  shadow-md py-2 px-3 rounded-md ' key={getInfo.id}>
                        <ul className='h-24 items-center flex flex-col '>
                            <li><span className='font-semibold'>Username :</span> - {getInfo.username}</li>
                            <li><span className='font-semibold'>Email :</span> {getInfo.email}</li>
                            <li><span className='font-semibold'>Gender :</span>  {getInfo.gender}</li>
                        </ul>
                        <div className="flex justify-center space-x-5">
                            <button className='text-blue-700 font-semibold border py-1 px-2 rounded-sm  cursor-pointer' onClick={() => { clickShowPopUp(getInfo.id) }}>View</button>

                            <Link className='text-blue-700 font-semibold border py-1 px-2 rounded-sm cursor-pointer' to={`/edit/${getInfo.id}`}>Update</Link>

                            <button className='text-blue-700 font-semibold border py-1 px-2 rounded-sm cursor-pointer' onClick={() => { dispatch(deleteUser(getInfo.id)) }}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Read
