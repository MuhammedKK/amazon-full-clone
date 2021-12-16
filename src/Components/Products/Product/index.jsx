import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './Product.css';

const Product = ({id, title, price, img, rating}) => {

    return (
        <div className="product">
            <div className="product__info">
                <h3 className="product__info--title">{title}</h3>
                <p className="product__info--price">
                    <span className="product__info--price--currency">$</span> 
                    <span className="product__info--price--amount">{price}</span> 
                </p>
                <div className="product__info--rating">
                    {Array(rating).fill().map(_ => (
                        <StarIcon key={rating++} className="product__info--rating--stars" />
                    ))}
                </div>
            </div>
            <img className="product__img" src={img} alt="Product Image" />
            <button className="product__btn">
                <span>Add To Cart </span>
                <AddShoppingCartIcon />
            </button>
        </div>
    )
}

export default Product
