import React from 'react';
import "./Product.css"
import { Link } from "react-router-dom"
import {useDispatch} from "react-redux";

const Product = ({ 
    id, 
    title, 
    image, 
    price, 
    quantities,
    }) => {

    const dispatch = useDispatch();
    
    }

    return (
        <div className="product">
            <div className="info">
                <Link to={`/product/${id}`} className="title">
                    <p>{title}</p>
                </Link>
                <p className="price">
                    <strong>$</strong>
                    <strong>{price}</strong>
                </p>
               
            </div>
            <img src={image} alt="" />
            <button onClick={onAddItem}>
                <i>
                    <ShoppingCartIcon />
                </i>
               Comprar
            </button>
        </div>
    )
}

export default Product;
