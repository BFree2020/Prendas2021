import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import {useContext} from 'react';



const Header = () => {
 const{SearchIcon} =useContext()

}

return (
    <nav className="header">
        <div className="search">
            <select>
                <option>Articulos</option>
            </select>
            <input type="text" className="searchInput" />
            <SearchIcon className="searchIcon" />
        </div>
        <Link to="/categorias" className="header-link">
            <div className="header-option">
                <span className="header-option1">Categorias</span>
            </div>
        </Link>
    </nav>
)  


export default Header;