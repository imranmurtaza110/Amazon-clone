import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
    const [{ user, basket }, dispatch] = useStateValue();
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
        <div className='checkout'>
            <div className="checkout_left">
                <img className='checkout_ad' src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Certified_Refurbished/XCM_Manual_1228189_1199690_US_us_evergreen_gg_shop_all_us_en_3133593_1500x150_en_US.jpg" alt="" />

                <div>
                    <h4>Hello, {isGuest()}</h4>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                </div>

                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}

            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>

        </div>


    );
}

export default Checkout