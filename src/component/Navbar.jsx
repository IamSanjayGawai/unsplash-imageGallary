
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { setSearchQuery, fetchPhotos, SetIsDarkMode } from "../redux/reducer/imageReducer";

function Navbar() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.imageReducer.searchQuery);
  const isDarkMode = useSelector((state) => state.imageReducer.isDarkMode)

  const handleDarkMode = () => {
    dispatch(SetIsDarkMode(!isDarkMode)); // Toggle the dark mode state
  }

// handling serach as per input 
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchPhotos(searchQuery));

  }

// after clicking enter it can serach
  const handleEnterSearch = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      dispatch(fetchPhotos(searchQuery));

    }
  }

  return (
    // nabar darkmode toggle
    <nav className={`navbar navbar-expand-lg px-4 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div class="container-fluid ">
        <a class="navbar-brand me-5" href="#"><h5>Image-Gallary</h5></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="" ><i class="fa fa-bars" aria-hidden="true"></i></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          {/* input form */}
          <form class="d-flex me-5">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              style={{ width: '15rem' }}
              class="form-control me-2" placeholder="Search" aria-label="Search" />
            <button
              onClick={handleSearch}
              onKeyDown={handleEnterSearch}
              class="btn btn-success" ><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
            {/* input form  end*/}
{/* Navbar - ul llist */}
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Explore</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Community</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Collection
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Cars</a></li>
                <li><a class="dropdown-item" href="#">Avengers</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Nature</a></li>
              </ul>
            </li>
            {/* change icon after toggle */}
            <li className="d-flex justify-content-center align-items-center mx-5">
              <i
                className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}
                onClick={handleDarkMode}

              ></i>
            </li>
          </ul>
{/* Navbar - ul llist end */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
