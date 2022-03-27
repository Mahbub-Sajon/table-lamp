import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }
    ,[]);

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        
    }

    return (
        <div className='shop-container'>
           <div className="products-container">
                {
                    products.map(product=> <Product
                    key={product.id}
                    product={product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
           </div>
           <div className="cart-container">
                    <h3>Selected Item:</h3>
                    {
                        cart.map(selectedItem => <Cart
                        key={selectedItem.id}
                        selectedItem = {selectedItem}
                        ></Cart>)
                    }
                    <button>Suggest One</button> <br />
                    <button>Reset</button>
           </div>
        </div>
    );
};

export default Shop;