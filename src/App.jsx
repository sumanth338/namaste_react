import React from 'react'

const Header = () => {
  return (
        <header className="sticky-top" style={{ backgroundColor: "#fdf2e9" }}>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              {/* Logo */}
              <a className="navbar-brand d-flex align-items-center" href="#">
                <img
                  src="/src/assets/logo-2.png"
                  alt="Namaste Foods Logo"
                  width="65"
                  height="80"
                  className="me-2"
                />
              </a>
    
              {/* Mobile toggle button */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
    
              {/* Navigation items */}
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto me-3">
                  <li className="nav-item">
                    <a className="nav-link fw-semibold px-3" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-semibold px-3" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-semibold px-3" href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
    
                {/* Cart Button */}
                <button className="btn btn-cart position-relative">
                  <i className="bi bi-cart3 me-2"></i>
                  Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0
                  </span>
                </button>
              </div>
            </div>
          </nav>
        </header>
      );
    }
    
const Searchbar = () => {
  return (
    <div className="search-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="search-box">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search for restaurants, cuisines, or dishes..."
                  aria-label="Search"
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
  );
};

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

const App = () => {
  // Sample restaurant data
  const restaurants = [
    {
      name: "Spice Palace",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3171?w=400&h=300&fit=crop",
      rating: 4.5,
      cuisine: "Indian",
      deliveryTime: "25-30 mins"
    },
    {
      name: "Bella Italia",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      rating: 4.2,
      cuisine: "Italian",
      deliveryTime: "20-25 mins"
    },
    {
      name: "Sushi Master",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
      rating: 4.8,
      cuisine: "Japanese",
      deliveryTime: "30-35 mins"
    },
    {
      name: "Burger Junction",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      rating: 4.3,
      cuisine: "American",
      deliveryTime: "15-20 mins"
    }
  ];

  return (
    <div>
      <Header />
      <Searchbar />
      
      {/* Restaurant Cards Section */}
      <div className="restaurants-section">
        <div className="container">
          <h2 className="section-title">Popular Restaurants</h2>
          <div className="row">
            {restaurants.map((restaurant, index) => (
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