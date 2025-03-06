import React from 'react';
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';

const ProductData = [
    {
        id: 1,
        img: '/src/assets/product/p-1.jpg',
        title: 'Boat Headphone',
        price: '120',
        aosDelay: '0'
    },
    {
        id: 2,
        img: '/src/assets/product/p-2.jpg',
        title: 'Rocky Mountain',
        price: '420',
        aosDelay: '100'
    },
    {
        id: 3,
        img: '/src/assets/product/p-3.jpg',
        title: 'Goggles',
        price: '320',
        aosDelay: '200'
    },
    {
        id: 4,
        img: '/src/assets/product/p-4.jpg',
        title: 'Printed',
        price: '220',
        aosDelay: '300'
    }
];

const ProductData2 = [
    {
        id: 1,
        img: '/src/assets/product/p-5.jpg',
        title: 'Boat Headphone',
        price: '120',
        aosDelay: '400'
    },
    {
        id: 2,
        img: '/src/assets/product/p-7.jpg',
        title: 'Rocky Mountain',
        price: '420',
        aosDelay: '500'
    },
    {
        id: 3,
        img: '/src/assets/product/p-9.jpg',
        title: 'Goggles',
        price: '320',
        aosDelay: '600'
    },
    {
        id: 4,
        img: '/src/assets/product/p-5.jpg',
        title: 'Printed',
        price: '220',
        aosDelay: '700'
    }
];

const Products = () => {
  return (
    <div className='my-14'>
        <div className='container mx-auto px-8'>
            {/* heading section */}
            <Heading title='Our Products' subtitle={'Explore Our Products'} />
            {/* body section */}
            <ProductCard data={ProductData} />
            <ProductCard data={ProductData2} />
        </div>
    </div>
  );
};

export default Products;