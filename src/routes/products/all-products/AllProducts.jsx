import React, { useState, useEffect } from 'react';
import axios from '../../../api/axios';
import Swiper from 'swiper';
import './AllProduct.css';
import ProductCard from '../product-card/ProductCard';
import Navbar from '../../../components/navbar/Navbar';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        axios.get('/products')
            .then(response => {
                const productData = response.data.products;
                setProducts(productData);
                setFilteredProducts(productData);

                const newSwiper = new Swiper(".mySwiper", {
                    loop: true,
                    spaceBetween: 30,
                    centeredSlides: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        type: "fraction",
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });
                setSwiper(newSwiper);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        if (searchQuery) {
            setFilteredProducts(
                products.filter(product =>
                    product.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        } else {
            setFilteredProducts(products);
        }
    }, [searchQuery, products]);

    return (
        <>
            <Navbar />
            <div className='all-products max-w-[1512px] w-full mx-auto my-0 mt-[52px]'>
                <div className="container">
                    <h2 className='text-center text-[24px] leading-[32px] mb-[24px]'>All Products</h2>
                    <div className="search-bar mb-[24px]">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='w-full px-[10px] py-[8px] border border-gray-300 rounded'
                        />
                    </div>
                    <div className="swiper mySwiper my-[50px] rounded-lg">
                        <div className="swiper-wrapper">
                            {filteredProducts.map(product => (
                                <div className="swiper-slide" key={product.id}>
                                    <img src={product.image} alt={product.title} />
                                </div>
                            ))}
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-pagination"></div>
                    </div>
                    <div className="products-grid w-full">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllProducts;