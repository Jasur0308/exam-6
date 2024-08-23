import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import Navbar from '../../../components/navbar/Navbar';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    if (!product) {
        return <div className='loading-screen'>Loading...</div>;
    }

    return (
        <>
            <Navbar/>
            <div className='product-page container mx-auto p-6'>
            <div className='product-header flex flex-col md:flex-row md:items-center md:justify-between mb-8'>
                <img 
                    src={product.thumbnail} 
                    alt={product.title} 
                    className='w-full md:w-1/2 lg:w-1/3 h-auto object-cover rounded-lg shadow-lg'
                />
                <div className='product-details md:ml-8 flex-1'>
                    <h1 className='text-3xl font-bold mb-4'>{product.title}</h1>
                    <p className='text-xl text-red-500 font-semibold mb-2'>
                        ${product.price} <span className='text-sm line-through text-gray-500'>${(product.price * (1 + product.discountPercentage / 100)).toFixed(2)}</span>
                    </p>
                    <div className='flex items-center mb-2'>
                        <span className='text-lg font-medium mr-2'>{product.rating} stars</span>
                        <span className='text-sm text-gray-600'>({product.stock} reviews)</span>
                    </div>
                    <p className='text-lg mb-4'>{product.description}</p>
                </div>
            </div>
            <div className='product-details bg-gray-100 p-6 rounded-lg shadow-md'>
                <h2 className='text-2xl font-semibold mb-4'>Details</h2>
                <ul className='list-disc pl-6'>
                    <li className='mb-2'>Brand: <span className='font-medium'>{product.brand}</span></li>
                    <li className='mb-2'>Category: <span className='font-medium'>{product.category}</span></li>
                    <li className='mb-2'>Stock: <span className='font-medium'>{product.stock}</span></li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default ProductPage;
