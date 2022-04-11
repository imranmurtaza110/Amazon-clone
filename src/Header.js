import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    const isGuest = () => {
        if (!user) {
            return <h5>Guest</h5>
        } else {
            let output = '';
            for (var i = 0; user.email[i] != '@'; i++) {
                output += user.email[i];
            }
            return output;
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="bimg" />
            </Link>

            <div className="header_search">
                <input className='header_searchInput' type="text" />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className='header_nav'>
                <Link to={!user && '/Login'}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className='header_optionLineOne'>Hello {isGuest()}</span>
                        <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to='./orders'>
                    <div className="header_option">
                        <span className='header_optionLineOne'>Returns</span>
                        <span className='header_optionLineTwo'>& orders</span>
                    </div>
                </Link>

                <div className="header_option">
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>

                <Link to='/checkout'>
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className='header_optionLineOne header_basketCount'>{basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header