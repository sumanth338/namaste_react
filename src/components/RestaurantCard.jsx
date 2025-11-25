import React from 'react'

const RestaurantCard = ({ restaurant }) => {
    const { name, image, rating, cuisine, deliveryTime } = restaurant;
    
    return (
      <div className="restaurant-card">
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