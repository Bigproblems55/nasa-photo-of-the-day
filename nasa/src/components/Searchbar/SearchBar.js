import React, {useState} from "react";
import alienImg from "./assets/NasaAlein1.png";
import "./SearchBarStyle.css";
const SearchBar = ({date,handleBar,handleSearch}) =>{
    return (
        <div className="App-header">
            <div>
            <img className="App-logo" alt='noimg' src={alienImg} />
            </div>
            <h1>Welcome To NASA </h1>
            <input value={date} onChange={(e)=>handleBar(e)}type="text"/>
            <button onClick={handleSearch}>yyyy-mm-dd</button>
        </div>
    );

};

export default SearchBar;