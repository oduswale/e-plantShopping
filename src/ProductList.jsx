// ProductList.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items); // get cart items

  const plants = [
    { name: 'Aloe Vera', image: '/images/aloe-vera.jpg', description: 'Great for skin care.', cost: '$5.00' },
    { name: 'Snake Plant', image: '/images/snake-plant.jpg', description: 'Low maintenance indoor plant.', cost: '$10.00' },
    { name: 'Peace Lily', image: '/images/peace-lily.jpg', description: 'Beautiful flowering plant.', cost: '$12.00' },
    { name: 'Spider Plant', image: '/images/spider-plant.jpg', description: 'Great air purifier.', cost: '$8.00' },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  // Check if a plant is already in cart
  const isInCart = (plantName) => {
    return cart.some((item) => item.name === plantName);
  };

  return (
    <div className="product-list">
      {plants.map((plant) => (
        <div key={plant.name} className="product-card">
          <img src={plant.image} alt={plant.name} className="product-image" />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p>{plant.cost}</p>
          <button
            className="add-to-cart"
            onClick={() => handleAddToCart(plant)}
            disabled={isInCart(plant.name)} // disable if already in cart
          >
            {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
