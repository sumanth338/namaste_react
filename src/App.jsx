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
    
const Searchbar = () =>{

}

const Resturantcard = () =>{
  
}

const App = () => {
  return (
    <div>
      <Header />
      {/* Main content will go here */}
    </div>
  )
}

export default App
