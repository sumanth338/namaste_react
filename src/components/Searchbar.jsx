import React from 'react'

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

export default Searchbar