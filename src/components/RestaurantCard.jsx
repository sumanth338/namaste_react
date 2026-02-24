import React from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
    const navigate = useNavigate();
    const { id, name, image, rating, cuisine, deliveryTime } = restaurant;
    
    const handleClick = () => {
      navigate(`/restaurant/${id}`);
    };
    
    return (
      <div 
        className="restaurant-card" 
        onClick={handleClick}
      >
        <div className="card-image">
          <img src={image} alt={name} className="food-image" />
          <div className="rating-badge">
            <i className="bi bi-star-fill"></i>
            <span>{rating}</span>
          </div>
        </div>
        <div className="card-content">
          <h5 className="restaurant-name">{name}</h5>
          <p className="cuisine-type">{cuisine}</p>
          <div className="delivery-info">
            <span className="delivery-time">
              <i className="bi bi-clock"></i>
              {deliveryTime}
            </span>
          </div>
        </div>
      </div>
    );
  };

export default RestaurantCard