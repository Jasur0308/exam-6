import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        return (
            <>
                {Array(fullStars).fill().map((_, i) => <span key={i} className="star full">★</span>)}
                {halfStar === 1 && <span className="star half">★</span>}
                {Array(emptyStars).fill().map((_, i) => <span key={i} className="star empty">★</span>)}
            </>
        );
    };

    return (
        <div className='product-card p-[16px] border border-[#e5e5e5] rounded-[8px] hover:shadow-lg transition-shadow'>
            <img src={product.thumbnail} alt={product.title} className='product-image mb-[16px] w-full h-[200px] object-cover rounded-[8px]' />
            <h3 className='product-title text-[20px] leading-[26px] mb-[8px] font-semibold text-[#333]'>
                {product.title}
            </h3>
            <p className='product-price text-[18px] leading-[24px] text-[#ff5a5f] font-bold mb-[8px]'>
                ${product.price} <span className='text-[14px] line-through text-[#999]'>${(product.price * (1 + product.discountPercentage / 100)).toFixed(2)}</span>
            </p>
            <div className='product-rating flex items-center mb-[8px]'>
                {renderStars(product.rating)}
                <span className='ml-[8px] text-[14px] text-[#777]'>{product.rating} ({product.stock} reviews)</span>
            </div>
            <Link to={`/all-products/${product.id}`} className='product-link inline-block text-[14px] leading-[20px] text-[#1a73e8] underline mt-[8px]'>
                View Details
            </Link>

        </div>
    );
};

export default ProductCard;