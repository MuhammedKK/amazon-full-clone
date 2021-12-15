import React from 'react';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './Nav.css';

const Navbar = () => {

    return (
        <div className="nav">
            {/* Nav Logo */}
            <Link to="/">
                <img className="nav__logo" src="http://www.bizmonthly.com/wp-content/uploads/2020/04/amazon-logo-black.png" alt="Logo" />
            </Link>
            {/* Nav Input */}
            <div className="nav__searchbar">
                <input type="text" className="nav__input--search" />
                <SearchIcon className="nav__search__icon" />
            </div>
            {/* Nav Links */}
            <div className="nav__links__container">
                <Link className="nav__link" to="/login">
                    <div>
                        <span className="nav__link--user">Mohamed</span>
                        <span className="nav__link--status">Signin</span>
                    </div>
                </Link>
                <Link className="nav__link" to="/orders">
                    <div>
                        <span className="nav__link--user">Returns</span>
                        <span className="nav__link--status">& Orders</span>
                    </div>
                </Link>
                <Link className="nav__link" to="/checkout">
                    <div className="nav__link--ship">
                        {/* Shipping Icon */}
                        <AddShoppingCartIcon className="nav__link--shippingcart" />
                        <span className="nav__link--count">{cart?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
