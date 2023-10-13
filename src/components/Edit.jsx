import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser } from '../features/userSlice';
import { useNavigate, useParams } from 'react-router-dom';





const Edit = () => {

    const [newUser, setNewUser] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { id } = useParams();
    const allUsers = useSelector((state) => state.app.user);

    useEffect(() => {
        const singleUser = allUsers.filter((val) => val.id === id);
        setNewUser(singleUser[0]);
    }, []);

    const updateChangeHandle = (e) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser, [name]: value
        })

    };

    const submitHandle = (e) => {
        e.preventDefault();
        dispatch(updateUser(newUser));
        alert('User has been updated');
        navigate('/read');

    }


    return (
        <>
            <h1 className='text-center font-semibold text-2xl mt-10'>Update user</h1>

            <form action="" className='flex flex-col w-96 mx-auto py-10 space-y-5' onSubmit={submitHandle} >

                <input type="text" placeholder='Username' className='outline-none border px-5 rounded-lg py-2' name='username' required value={newUser && newUser.username} onChange={updateChangeHandle} />

                <input type="email" placeholder='Email' className='outline-none border px-5 rounded-lg py-2' name='email' required value={newUser && newUser.email} onChange={updateChangeHandle} />

                <div className="flex space-x-3">
                    <label htmlFor="" className='text-center'>Male</label>
                    <input type="radio" placeholder='gender' name='gender' value='male' checked={newUser && newUser.gender === 'male'} onChange={updateChangeHandle} />

                    <label htmlFor="" className='text-center'>Female</label>
                    <input type="radio" placeholder='gender' name='gender' required value='female' checked={newUser && newUser.gender === 'female'} onChange={updateChangeHandle} />
                </div>
                <button type='submit' className='bg-indigo-500 text-white rounded-lg py-2 active:bg-indigo-900'>Update</button>
            </form>
        </>
    )
}

export default Edit;
