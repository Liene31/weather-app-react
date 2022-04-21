import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
    return( 
        <div className="SearchEngine">
            <form>
                <i className="fa fa-map-marker location" id="current-location"></i>
                <input
                type="search"
                id="search-city"
                placeholder="Search For City"
                autoComplete="off"
                />
                <button>
                <i className="fa fa-search search-icon" id="search-icon"></i>
                </button>
            </form>
        </div>);
}