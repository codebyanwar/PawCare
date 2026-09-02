import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlinePets } from 'react-icons/md';
import { RiMenu3Line } from 'react-icons/ri';
import { Link, NavLink } from 'react-router';


const Header = () => {

  const navItem = <>
      <li><NavLink className="font-medium py-2 my-1 lg:p-0 hover:bg-transparent active:bg-transparent! active:text-inherit!" to="/">Home</NavLink></li>
      <li><NavLink className="font-medium py-2 my-1 lg:p-0 hover:bg-transparent active:bg-transparent! active:text-inherit!" to="/about">About</NavLink></li>
      <li><NavLink className="font-medium py-2 my-1 lg:p-0 hover:bg-transparent active:bg-transparent! active:text-inherit!" to="/service">Service</NavLink></li>
      <li><NavLink className="font-medium py-2 my-1 lg:p-0 hover:bg-transparent active:bg-transparent! active:text-inherit!" to="/dashboard">My Profile</NavLink></li>
      <li><NavLink className="font-medium py-2 my-1 lg:p-0 hover:bg-transparent active:bg-transparent! active:text-inherit!" to="/contact">Contact</NavLink></li>
  </>

    return (
      <div className="shadow-sm bg-primary px-[4%] lg:px-0">
        <div className="navbar lg:w-7xl lg:mx-auto p-0 lg:flex lg:justify-between">
          <div className="navbar-start lg:w-18">
            <Link to="/" className="flex items-center gap-1 text-base-200">
              <MdOutlinePets className="text-[30px] lg:text-[40px] rotate-315"/>
              <span className="text-[30px] lg:text-[40px] mt-1 lg:mt-1.5 heading-font tracking-widest">
                {" "}
                PAWCARE
              </span>
            </Link>
          </div>

          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 lg:space-x-10">
              {navItem}
            </ul>
          </div>

          <div className="navbar-end lg:w-55">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="lg:hidden">
                <RiMenu3Line size={22} className='text-base-100' />
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navItem}
                <li className='mt-1'>
                  {" "}
                  <button className="btn border border-solid border-base-100 hover:bg-transparent hover:text-base-100">
                    <FaRegUserCircle className="text-[20px]" />
                    <span>Login</span>
                  </button>
                </li>
              </ul>
            </div>

            <Link to="/login" className="btn border border-solid border-base-100 hover:bg-transparent hover:text-base-100 hidden lg:flex">
              <FaRegUserCircle className="text-[20px]" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Header;