import React, { useState } from 'react'
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import RestaurantCard from './components/RestaurantCard';
import restaurants from './utils/ResturantData';

const App = () => {
  const [showTopRated, setShowTopRated] = useState(false);

  const filtered = showTopRated
    ? restaurants.filter(r => r.rating >= 4.5)
    : restaurants;

  return (
    <div>
      <Header />
      <Searchbar />
      <div className="restaurants-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Popular Restaurants</h2>
            <span className="filter-checkbox-wrapper">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={showTopRated}
                  onChange={e => setShowTopRated(e.target.checked)}
                  className="custom-checkbox"
                />
                Top Rated
              </label>
            </span>
          </div>
          <div className="row">
            {filtered.map((restaurant, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App