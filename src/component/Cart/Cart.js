import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name, img} = props.selectedItem
  
    return (
        <div className='cart'>
          
            <div>
            <img className='cart-img' src={img} alt="" />
            </div>
             <div>
             <p className='cart-name'>{name}</p>
             </div>
        </div>
    );
};

export default Cart;