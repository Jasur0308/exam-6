import React, { useState } from 'react';
import './Navbar.css';
import notify from '../../images/notify.svg';
import backet from '../../images/backet.svg';
import logo from '../../images/logo.svg';
import search from '../../images/search.svg';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Navigate to search results page with the query as a parameter
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className='navbar max-w-[1512px] w-full mx-auto my-0'>
      <div className="container">
        <div className="top flex justify-between items-center py-[6px]">
          <div className="top__left flex gap-[10px]">
            <p className='text-[12px] leading-[12px] text-[#000000]'>
              Hi! <Link className='text-[#0654BA] underline' to='/auth/login'>Sign in</Link> or <a className='text-[#0654BA] underline' href="#">register</a>
            </p>
            <a className='text-[12px] leading-[12px] text-[#000000]' href="#">Daily Deals</a>
            <a className='text-[12px] leading-[12px] text-[#000000]' href="#">Brand Outlet</a>
            <a className='text-[12px] leading-[12px] text-[#000000]' href="#">Help & Contact</a>
          </div>
          <div className="top__right flex gap-[20px] items-center">
            <a className='text-[12px] leading-[12px] text-[#000000]' href="#">Sell</a>
            <select className='text-[12px] leading-[12px] text-[#000000]'>
              <option value="Watchlist">Watchlist</option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <select className='text-[12px] leading-[12px] text-[#000000]'>
              <option value="My eBay">My eBay</option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <img src={notify} alt="" />
            <img src={backet} alt="" />
          </div>
        </div>
        <div className="bottom mt-[13px] flex items-center justify-between">
          <img src={logo} alt="" />
          <div className="bottom__content flex gap-[7px] items-center">
            <select>
              <option value="Shop by category">Shop by category</option>
              <option value="Shop by category"></option>
              <option value="Shop by category"></option>
            </select>
            <div className="input w-[715px] flex items-center px-[17px] py-[12px]">
              <div className="input__form flex items-center gap-[9px] max-w-[600px] w-full">
                <img src={search} alt="" />
                <input
                  className='border-none max-w-[560px] w-full outline-none'
                  type="text"
                  placeholder='Search for anything'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select className='max-w-[160px] w-full text-[12px] leading-[14px]'>
                <option value="Shop by category">All categories</option>
                <option value="Shop by category"></option>
                <option value="Shop by category"></option>
              </select>
            </div>
            <button
              className='max-w-[170px] w-full px-[62px] py-[14px] bg-[#3665F3] text-[#FFFFFF]'
              type='button'
              onClick={handleSearch}
            >
              Search
            </button>
            <p className='text-[10px] leading-[40px] text-[#767676]'>Advanced</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;