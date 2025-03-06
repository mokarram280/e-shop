import React from 'react';
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';
import Product1 from '/src/assets/product/p-1.jpg';
import Product2 from '/src/assets/product/p-2.jpg';
import Product3 from '/src/assets/product/p-3.jpg';
import Product4 from '/src/assets/product/p-4.jpg';
import Product5 from '/src/assets/product/p-5.jpg';
import Product6 from '/src/assets/product/p-7.jpg';
import Product7 from '/src/assets/product/p-9.jpg';
import Product8 from '/src/assets/product/p-5.jpg';

const ProductData = [
    {
        id: 1,
        img: Product1,
        title: 'Boat Headphone',
        price: '120',
        aosDelay: '0'
    },
    {
        id: 2,
        img: Product2,
        title: 'Rocky Mountain',
        price: '420',
        aosDelay: '100'
    },
    {
        id: 3,
        img: Product3,
        title: 'Goggles',
        price: '320',
        aosDelay: '200'
    },
    {
        id: 4,
        img: Product4,
        title: 'Printed',
        price: '220',
        aosDelay: '300'
    }
];

const ProductData2 = [
    {
        id: 1,
        img: Product5,
        title: 'Boat Headphone',
        price: '120',
        aosDelay: '400'
    },
    {
        id: 2,
        img: Product6,
        title: 'Rocky Mountain',
        price: '420',
        aosDelay: '500'
    },
    {
        id: 3,
        img: Product7,
        title: 'Goggles',
        price: '320',
        aosDelay: '600'
    },
    {
        id: 4,
        img: Product8,
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