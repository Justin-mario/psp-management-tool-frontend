import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adminlogout } from '../redux/admin/adminSlice';
import { developerlogout } from '../redux/developer/developerSlice';

const TopNav = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {devInfo} = useSelector(state => state.developer)
    // const {adminInfo} = useSelector(state => state.admin)

    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Function to toggle the dropdown
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        if(devInfo){
            dispatch(developerlogout())
            navigate("/developer-signin")
        }else {
            dispatch(adminlogout())
            navigate("/signin")
        }
    }
  
    return (
      <div>
        <nav
          className="relative flex w-full flex-wrap items-center bg-neutral-100 py-2 shadow-dark-mild lg:py-4 justify-end"
        >
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div className="relative ms-3">
              {/* Avatar and Dropdown Toggle */}
              <button
                className="flex items-center whitespace-nowrap text-black/60 transition duration-200 hover:text-black/80 focus:outline-none"
                onClick={toggleDropdown} // Toggles dropdown on click
                aria-expanded={dropdownOpen}
              >
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                  className="rounded-full"
                  style={{ height: '22px', width: '22px' }}
                  alt="Avatar"
                  loading="lazy"
                />
              </button>
  
              {/* Dropdown Menu */}
              <ul
                className={`${
                  dropdownOpen ? 'block' : 'hidden'
                } absolute left-0 right-auto z-[1000] m-0 min-w-[10rem] list-none rounded-lg bg-white text-left text-base shadow-lg dark:bg-surface-dark`}
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a
                    className="p-2 flex text-center justify-center text-gray-600 hover:text-black"
                    href="#"
                    onClick={handleLogout}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default TopNav