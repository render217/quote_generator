import React from 'react'
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom'

export const Header = ({onClick}) => {
    return (
        <header className='py-4 px-10 mb-5'>
            <button  onClick={onClick} className='text-gray-500 text-md flex gap-2 items-center  float-right duration-300 hover:text-gray-900'>
                <p>rotate</p>
                <i className="fa-solid fa-arrows-rotate"></i>
            </button>
        </header>
    )
}
