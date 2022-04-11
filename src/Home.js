import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                <img className="home_image" src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt="" />

                <div className="home_row">
                    <Product
                        id={1}
                        title="TRed Kap Men's Standard Industrial Work Shirt, Regular Fit, Short Sleeve, Black, 2X-Large"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_2X._SY608_CB626369146_.jpg"
                        rating={5}
                    />

                    <Product
                        id={2}
                        title="TAmazon Basics Kids/Youth Gaming Recliner with Headrest and Back Pillow, 3+ Age Group, Black and Red"
                        price={189.99}
                        image="https://m.media-amazon.com/images/I/71KYhORbEUL._AC_UL480_FMwebp_QL65_.jpg"
                        rating={5}
                    />

                </div>

                <div className="home_row">
                    <Product
                        id={3}
                        title="Amazon Basics Dog and Puppy Pads, Leak-proof 5-Layer Pee Pads with Quick-dry Surface for Potty Training, Regular (22 x 22 Inches) - Pack of 100"
                        price={29.25}
                        image="https://m.media-amazon.com/images/I/81vkislowDL._AC_UL480_FMwebp_QL65_.jpg"
                        rating={4}
                    />


                    <Product
                        id={4}
                        title="TSeagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation,  Xbox - 1-Year Rescue Service (STGX2000400)"
                        price={59.99}
                        image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL480_QL65_.jpg"
                        rating={4}
                    />

                    <Product
                        id={5}
                        title="Etekcity Smart Scale for Body Weight, Accurate Digital Bathroom Weighing Machine with Body Fat Percentage Water Muscle"
                        price={79.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_2X._SY608_CB626369146_.jpg"
                        rating={4}
                    />

                </div>

                <div className="home_row">
                    <Product
                        id={6}
                        title="Samsung C49HG90DMU 124.2 cm (48.9') Quantum Dot LED LCD Monitor - 32:9-1 ms - 3840 x 1080"
                        price={799.99}
                        image="https://m.media-amazon.com/images/I/71MlcO29QOL._AC_SL1500_.jpg"
                        rating={5}
                    />


                </div>
            </div>
        </div>
    )
}

export default Home