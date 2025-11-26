import React, { useState } from 'react'
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import restaurants from './utils/ResturantData';

const App = () => {
  const [showTopRated, setShowTopRated] = useState(false);
  const [searchText, setSearchText] = useState("");

  // ✅ Apply both filters
  const filteredRestaurants = restaurants
    .filter(r =>
      r.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter(r => (showTopRated ? r.rating >= 4.5 : true));

  return (
    <div>
      <Header />

      {/* SEARCH BAR */}
      <div className="search-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="search-box">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Search for restaurants..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                  <button className="btn btn-search" type="button">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RESTAURANTS */}
      <div className="restaurants-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Popular Restaurants</h2>

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={showTopRated}
                onChange={(e) => setShowTopRated(e.target.checked)}
              />
              Top Rated
            </label>
          </div>

          <div className="row">
            {filteredRestaurants.length > 0 ? (
              filteredRestaurants.map((restaurant, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                  <RestaurantCard restaurant={restaurant} />
                </div>
              ))
            ) : (
              <p className="text-center">No restaurants found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
