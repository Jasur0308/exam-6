import React, { useState, useEffect } from 'react';
import './Hero.css';
import axios from '../../api/axios';
import ProductCard from '../ProductCard/ProductCard';
import { Link, useLocation } from 'react-router-dom';
import row from '../../images/row.svg';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import info from '../../images/info.svg';

const Hero = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('query') || '';

  useEffect(() => {
    axios.get('/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredProducts(
        products.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  return (
    <div className='hero max-w-[1512px] mx-auto my-0 mt-[52px]'>
        <div className="container">
            <div className="hero__links flex justify-between items-center">
                <a className='text-[12px] leading-[16px] text-[#555555]' href="#">Home</a>
                <a className='text-[12px] leading-[16px] text-[#555555]' href="#">Saved</a>
                <a className='text-[12px] leading-[16px] text-[#555555]' href="#">Motors</a>
                <a className='text-[12px] leading-[16px] text-[#555555]' href="#">Electronics</a>
                <a className='text-[12px] leading-[16px] text-[#555555]' href="#">Collectibles</a>
                <a className='text-[12px] leading-[16px] text-[#555555]' href="#">Home & Garden</a>
                <a className='text-[12px] leading-[16px] text-[#555555]' href="#">Fashion</a>
                <a className='text-[12px] leading-[16px] text-[#555555]' href="#">Toys</a>
                <a className='text-[12px] leading-[16px] text-[#555555]' href="#">Sporting Goods</a>
                <a className='text-[12px] leading-[16px] text-[#555555]' href="#">Business & Industrial</a>
                <a className='text-[12px] leading-[16px] text-[#555555]' href="#">Jewelry & Watches</a>
                <a className='text-[12px] leading-[16px] text-[#555555]' href="#">eBay Live</a>
                <a className='text-[12px] leading-[16px] text-[#555555]' href="#">Refurbished</a>
            </div>
            <div className="products max-w-[1224px] w-full flex justify-between mt-[48px]">
                    {filteredProducts.slice(0, 7).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
            <div className="hero__bottom mt-[24px] flex gap-[20px] items-center">
                    <h4 className='italic text-[24px] leading-[32px] text-[#191919]'>Score these trending kicks</h4>
                    <Link to="/all-products" target="_blank" className='flex items-center gap-[7px]'>
                        <span className='text-[20px] leading-[18px] text-[#191919]'>See all</span>
                        <img src={row} alt="arrow icon" />
                    </Link>
            </div>
            <div className="hero__bottom mt-[24px] flex gap-[20px] items-center">
                    <h4 className='italic text-[24px] leading-[32px] text-[#191919]'>Today's Deals – All With Free Shipping</h4>
                    <Link to="/all-products" target="_blank" className='flex items-center gap-[7px]'>
                        <span className='text-[20px] leading-[18px] text-[#191919]'>See all</span>
                        <img src={row} alt="arrow icon" />
                    </Link>
            </div>
            <div className="products max-w-[1224px] w-full flex justify-between mt-[48px]">
                    {products.slice(7, 14).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </div>
        <div className="mt-[48px]">
            <div className="container">
                <div className="footer__wrapper flex justify-between">
                    <div className="footer__cols">
                        <h4>Buy</h4>
                        <ul>
                            <li><a href="#">Registration</a></li>
                            <li><a href="#">eBay Money Back Guarantee</a></li>
                            <li><a href="#">Bidding & buying help</a></li>
                            <li><a href="#">Stores</a></li>
                            <li><a href="#">eBay for Charity</a></li>
                            <li><a href="#">Charity Shop</a></li>
                            <li><a href="#">Seasonal Sales and events</a></li>
                        </ul>
                    </div>
                    <div className="footer__cols">
                        <div className="cols__wrapper">
                            <h4>Sell</h4>
                            <ul>
                                <li><a href="#">Start selling</a></li>
                                <li><a href="#">How to sell</a></li>
                                <li><a href="#">Business sellers</a></li>
                                <li><a href="#">Affiliates</a></li>
                            </ul>
                        </div>
                        <div className="cols__wrapper">
                            <h4>Tools & Apps</h4>
                            <ul>
                                <li><a href="#">Developers</a></li>
                                <li><a href="#">Security center</a></li>
                                <li><a href="#">Site map</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__cols">
                        <h4>Stay Connected</h4>
                        <ul>
                            <li>
                                <a className='flex items-center gap-[5px]' href="#">
                                    <img src={facebook} alt="" />
                                    <span className='website'>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a className='flex items-center gap-[5px]' href="#">
                                    <img src={twitter} alt="" />
                                    <span className='website'>Twitter</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__cols">
                        <h4>About eBay</h4>
                        <ul>
                            <li><a href="#">Company info</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Diversity & Inclusion</a></li>
                            <li><a href="#">Global Impact</a></li>
                            <li><a href="#">Government relations</a></li>
                            <li><a href="#">Advertise with us</a></li>
                            <li><a href="#">Policies</a></li>
                            <li><a href="#">Verified Rights Owner (VeRO) Program</a></li>
                            <li><a href="#">eCI Licenses</a></li>
                        </ul>
                    </div>
                    <div className="footer__cols">
                        <div className="cols__wrapper">
                            <h4>Help & Contact</h4>
                            <ul>
                                <li><a href="#">Seller Center</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">eBay Returns</a></li>
                            </ul>
                        </div>
                        <div className="cols__wrapper">
                            <h4>Community</h4>
                            <ul>
                                <li><a href="#">Announcements</a></li>
                                <li><a href="#">eBay Community</a></li>
                                <li><a href="#">eBay for Business Podcast</a></li>
                            </ul>
                        </div>
                        <h4>eBay Sites</h4>
                    </div>
                </div>
            </div>
            <div className="footer__links mt-[22px] px-[10px] pt-[40px] pb-[22px]">
                <div className="container">
                    <div className="footer__wrapper flex gap-[10px] items-center">
                        <p className='text-[11px] leading-[13px] text-[#41413F]'>Copyright © 1995-2023 eBay Inc. All Rights Reserved.</p>
                        <a className='text-[11px] leading-[13px] text-[#707070] underline' href="#">Accessibility</a>
                        <a className='text-[11px] leading-[13px] text-[#707070] underline' href="#">User Agreement</a>
                        <a className='text-[11px] leading-[13px] text-[#707070] underline' href="#">Privacy</a>
                        <a className='text-[11px] leading-[13px] text-[#707070] underline' href="#">Payments Terms of Use</a>
                        <a className='text-[11px] leading-[13px] text-[#707070] underline' href="#">Cookies</a>
                        <a className='text-[11px] leading-[13px] text-[#707070] underline' href="#">Your Privacy Choices</a>
                        <span className='text-[11px] leading-[13px] text-[#41413F]'>and</span>
                        <a className='text-[11px] leading-[13px] text-[#707070] underline' href="#">AdChoice</a>
                        <img src={info} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Hero