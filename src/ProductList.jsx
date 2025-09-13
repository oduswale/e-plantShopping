import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const plants = [
    { name: 'Aloe Vera', image: '/images/aloe-vera.jpg', description: 'Great for skin care.', cost: '$5.00' },
    { name: 'Snake Plant', image: '/images/snake-plant.jpg', description: 'Low maintenance indoor plant.', cost: '$10.00' },
    { name: 'Peace Lily', image: '/images/peace-lily.jpg', description: 'Beautiful flowering plant.', cost: '$12.00' },
    { name: 'Spider Plant', image: '/images/spider-plant.jpg', description: 'Great air purifier.', cost: '$8.00' },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (plantName) => cart.some((item) => item.name === plantName);

  // Calculate total items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="product-list">
      {/* 🛒 Show total cart count */}
      <h2 className="cart-count">🛒 Cart ({totalItems})</h2>

      {plants.map((plant) => (
        <div key={plant.name} className="product-card">
          <img src={plant.image} alt={plant.name} className="product-image" />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p>{plant.cost}</p>
          <button
            className="add-to-cart"
            onClick={() => handleAddToCart(plant)}
            disabled={isInCart(plant.name)}
          >
            {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
