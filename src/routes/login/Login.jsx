import React, { useState } from 'react';
import axios from '../../api/axios';
import './Login.css';
import logo from '../../images/logo.svg';
import pencil from '../../images/pencil.svg';
import notice from '../../images/notice.svg';
import info from '../../images/info.svg';

const Login = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', {
        username: email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));

      alert('Login successful!');

    } catch (err) {
      setError('Login failed. Please check your credentials.');
      console.error('Error logging in:', err);
    }
  };

  return (
    <div className='login max-w-[1512px] mx-auto my-0 pl-[16px] pt-[40px]'>
      <div className="login__wrapper">
        <img src={logo} alt="Logo" />
        <div className="login__form max-w-[355px] mx-auto my-0 mt-[16px]">
          <h3 className='italic text-[36px] leading-[36px] text-center text-[#151E27]'>Hello</h3>
          <p className='mt-[5px] text-center text-[14px] leading-[16.55px] text-[#000000]'>
            Sign in to eBay or <a className='text-[#3665F3]' href="#">create an account</a>
          </p>
          {error && <p className='text-red-500 text-center'>{error}</p>}
          <form className="flex flex-col gap-[16px] mt-[45px]" onSubmit={handleSubmit}>
            <input
              className='bg-[#F7F7F7] rounded-[8px] input pt-[12px] pl-[16px] pr-[24px] pb-[9px]'
              type="text"
              placeholder='Username'
              value={email}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className='bg-[#F7F7F7] rounded-[8px] input pt-[12px] pl-[16px] pr-[24px] pb-[9px]'
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              className='rounded-[20px] bg-[#3665F3] text-center py-[14px] button italic text-[#FFFFFF] leading-[22.4px]'
              type='submit'
            >
              Continue
            </button>
          </form>
          <div className="login__form__bottom mt-[272px] text-center">
            <div className="top flex gap-[12px] items-center justify-center">
              <input className='w-[14px] h-[14px]' type="checkbox" />
              <p>Stay signed in</p>
            </div>
            <p className='mt-[6px] text-[13px] leading-[16px] text-[#000000]'>Using a public or shared device?</p>
            <p className='text-[13px] leading-[16px] text-[#000000]'>Uncheck to protect your account.</p>
            <div className="link max-w-[355px] w-full flex justify-center py-[13px]">
              <a className='flex gap-[8px] items-center' href="#">
                <span className='underline text-[13px] leading-[16px] text-[#3665F3]'>Learn more</span>
                <img src={pencil} alt="Pencil" />
              </a>
            </div>
            <div className="notice absolute z-20">
              <img src={notice} alt="Notice" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer mt-[155px] px-[10px] pt-[40px] pb-[22px] relative">
        <div className="footer__wrapper flex justify-center gap-[10px] items-center">
          <p className='text-[11px] leading-[13px] text-[#41413F]'>Copyright © 1995-2023 eBay Inc. All Rights Reserved.</p>
          <a className='text-[11px] leading-[13px] text-[#707070] underline' href="#">Accessibility</a>
          <a className='text-[11px] leading-[13px] text-[#707070] underline' href="#">User Agreement</a>
          <a className='text-[11px] leading-[13px] text-[#707070] underline' href="#">Privacy</a>
          <a className='text-[11px] leading-[13px] text-[#707070] underline' href="#">Payments Terms of Use</a>
          <a className='text-[11px] leading-[13px] text-[#707070] underline' href="#">Cookies</a>
          <a className='text-[11px] leading-[13px] text-[#707070] underline' href="#">Your Privacy Choices</a>
          <span className='text-[11px] leading-[13px] text-[#41413F]'>and</span>
          <a className='text-[11px] leading-[13px] text-[#707070] underline' href="#">AdChoice</a>
          <img src={info} alt="Info" />
        </div>
      </div>
    </div>
  );
};

export default Login;