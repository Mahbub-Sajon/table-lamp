import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './Product.css'

const Product = (props) => {
    const {name, img, price} = props.product
    // const handleAddToCart = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
           </div>
           <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'> <p>Add to cart <AiOutlineShoppingCart></AiOutlineShoppingCart></p> 
          
           </button>
        </div>
    );
};

export default Product;