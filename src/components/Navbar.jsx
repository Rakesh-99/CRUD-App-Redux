import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const allUsers = useSelector((data) => data.app.user);

    return (

        <>
            <nav className='w-full shadow-2xl py-2 bg-indigo-800 text-white font-semibold sticky top-0 left-0'>
                <ul className='flex justify-evenly items-center'>
                    <li><Link to={'/read'}>Users ({allUsers && allUsers.length}) </Link></li>
                    <li><Link to={'/create'}>Create Data</Link></li>
                    <input type="text" placeholder='Search user' className='py-2 px-4 w-60 outline-none text-black rounded-lg' />

                </ul>
            </nav>
        </>
    )
}

export default Navbar;
