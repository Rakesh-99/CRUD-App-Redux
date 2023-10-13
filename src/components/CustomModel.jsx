import React from 'react'
import { useSelector } from 'react-redux'

const CustomModel = ({ showPopup, setShowPopup, id }) => {

    const getAllUsers = useSelector((state) => state.app.user);

    const singleUser = getAllUsers.filter((val) => {
        return val.id === id;
    })


    const close = () => {
        setShowPopup(false)
    }




    return (

        <>
            <div className="customBackground fixed left-0 top-0 z-50 flex items-center justify-center w-full h-screen bg-white ">

                <div className="customContainer w-96 shadow-2xl h-60 rounded-md bg-white border py-3 px-5 flex flex-col justify-center items-center space-y-2 shadow-blue-300">
                    <h1 className='font-semibold text-sm'>Username -{singleUser[0].username}</h1>
                    <h1 className='font-semibold text-sm'>Email - {singleUser[0].email}</h1>
                    <h1 className='font-semibold text-sm'>Gender - {singleUser[0].gender}</h1>
                    <button className='bg-red-500 py-1 px-5 rounded-md active:bg-red-900 text-white text-right' onClick={close}>Close</button>

                </div>
            </div>
        </>
    )
}

export default CustomModel
