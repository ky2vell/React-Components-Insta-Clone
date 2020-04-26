// You do not need to change any code in this file
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faHeart,
  faCircle,
  faCompass
} from '@fortawesome/free-regular-svg-icons';
import logo from '../../assets/logo.png';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='search-bar-wrapper'>
      <div className='social logo-contain'>
        <FontAwesomeIcon icon={faInstagram} />
        <img src={logo} alt='logo' id='logo' />
      </div>
      <form className='search-form'>
        <input type='text' placeholder='Search' />
      </form>
      <div className='social-wrapper'>
        <div className='social'>
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className='social'>
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className='social'>
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
