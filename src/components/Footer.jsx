import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHouseMedical } from "react-icons/fa6";
import { faUserMd, faHospital, faChartLine, faUser } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="w-full bg-gray-200 p-3 fixed bottom-0">
      <nav>
        <ul className="flex justify-around list-none p-0 m-0">
          <li className="text-gray-500  flex flex-col items-center">
            <FontAwesomeIcon icon={faUserMd} className="mb-1 font-bold" />
            <span className='font-bold'>Doctor</span>
          </li>
          <li className="text-gray-500 flex flex-col items-center">
            <FontAwesomeIcon icon={faHospital} className="mb-1 font-bold" />
            <span className='font-bold'>Hospital</span>
          </li>
         
      <FaHouseMedical className=' -mt-7 p-3 w-12 h-12 rounded-full text-xl bg-custom-teal text-white ' />
    
          <li className="text-gray-500 flex flex-col items-center">
            <FontAwesomeIcon icon={faChartLine} className="mb-1 font-bold" />
            <span className='font-bold'>Analytics</span>
          </li>
          <li className="text-gray-500 flex flex-col items-center">
            <FontAwesomeIcon icon={faUser} className="mb-1 font-bold" />
            <span className='font-bold'>Account</span>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
