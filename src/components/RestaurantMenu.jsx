import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import restaurants from '../utils/ResturantData';
import Header from './Header';

const RestaurantMenu = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = restaurants.find(r => r.id === parseInt(id));

  if (!restaurant) {
    return (
      <div>
        <Header />
        <div className="container mt-5">
          <h2>Restaurant not found</h2>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const { name, image, rating, cuisine, deliveryTime, menu } = restaurant;

  return (
    <div>
      <Header />
      
      {/* Restaurant Header */}
      <div 
        className="restaurant-header" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`
        }}
      >
        <div className="container">
          <button 
            className="btn btn-light mb-3" 
            onClick={() => navigate('/')}
          >
            <i className="bi bi-arrow-left me-2"></i>
            Back to Restaurants
          </button>
          <div className="row align-items-center">
            <div className="col-md-3">
              <img 
                src={image} 
                alt={name} 
                className="img-fluid rounded"
                style={{ maxHeight: '200px', objectFit: 'cover', width: '100%' }}
              />
            </div>
            <div className="col-md-9">
              <h1 className="display-4 mb-3">{name}</h1>
              <p className="lead mb-2">{cuisine} Cuisine</p>
              <div className="d-flex align-items-center gap-4">
                <div className="d-flex align-items-center">
                  <i className="bi bi-star-fill text-warning me-2 rating-icon"></i>
                  <span className="rating-text">{rating}</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-clock me-2"></i>
                  <span>{deliveryTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="container mb-5">
        <h2 className="mb-4">Menu</h2>
        <div className="row">
          {menu.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 menu-item-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="card-title mb-0">{item.name}</h5>
                    <span className="text-primary fw-bold">₹{item.price}</span>
                  </div>
                  <p className="card-text text-muted menu-item-description">
                    {item.description}
                  </p>
                  <button className="btn btn-primary btn-sm mt-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
