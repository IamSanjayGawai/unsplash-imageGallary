import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, setSearchQuery } from "../redux/reducer/imageReducer";

function Search() {
    const dispatch = useDispatch();
    const searchQuery = useSelector((state) => state.imageReducer.searchQuery);


    const handleSearch = () => {

        dispatch(fetchPhotos(searchQuery));
        // Dispatch setSearchQuery with the new search query or 'nature' if empty
        dispatch(setSearchQuery(newSearchQuery));
    }

    const handleEnterSearch = (e) => {
        e.preventDefault();
        if (e.key === 'Enter') {
            dispatch(fetchPhotos(searchQuery));
        }
    }

    return (
        <div className="container-fluid border bx-shadow" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1567739665094-c24f043b8407?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '1',
        }}
        >
            <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center" style={{ height: '10rem' }}>
                    <form className="d-flex">
                        <input
                            type="search"
                            className="form-control "
                            placeholder="Search"
                            aria-label="Search"
                            value={searchQuery}
                            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                            style={{ width: '15rem' }}
                        />
                        <button
                            className="btn btn-success"
                            type="button"
                            onClick={handleSearch}
                            onKeyDown={handleEnterSearch}
                        >
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Search;



























