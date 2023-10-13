import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';





const Create = () => {

    const navigate = useNavigate();


    const dispatch = useDispatch();

    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        gender: ''
    });

    const inputChangeHandle = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });

    };

    const submitHandle = (e) => {
        e.preventDefault();
        dispatch(addUser(userInfo));
        navigate('/read');
    }

    return (
        <>
            <h1 className='text-center font-semibold text-2xl mt-10'>Add User</h1>

            <form action="" className='flex flex-col w-96 mx-auto py-10 space-y-5' onSubmit={submitHandle}>

                <input type="text" placeholder='Username' onChange={inputChangeHandle} className='outline-none border px-5 rounded-lg py-2' name='username' value={userInfo.username} required />

                <input type="email" placeholder='Email' onChange={inputChangeHandle} className='outline-none border px-5 rounded-lg py-2' name='email' value={userInfo.email} required />

                <div className="flex space-x-3">
                    <label htmlFor="" className='text-center'>Male</label>
                    <input type="radio" placeholder='gender' name='gender' value='male' onChange={inputChangeHandle} required/>
                    <label htmlFor="" className='text-center'>Female</label>
                    <input type="radio" placeholder='gender' name='gender' value='female' onChange={inputChangeHandle} required/>
                </div>
                <button type='submit' className='bg-indigo-500 text-white rounded-lg py-2 active:bg-indigo-900'>Add User</button>
            </form>
        </>
    )
}

export default Create;
