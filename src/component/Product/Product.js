import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, price} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Product;