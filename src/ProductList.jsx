import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});
    
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prev) => ({
            ...prev,
            [plant.name]: true,
        }));
    };

    const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const plantsArray = [
        {
          category: "Air Purifying Plants",
          plants: [
            {
              name: "Snake Plant",
              image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
              description: "Produces oxygen at night, improving air quality.",
              cost: "$15"
            },
            {
              name: "Spider Plant",
              image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
              description: "Filters formaldehyde and xylene from the air.",
              cost: "$12"
            },
            {
              name: "Peace Lily",
              image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
              description: "Removes mold spores and purifies the air.",
              cost: "$18"
            },
            {
              name: "Boston Fern",
              image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
              description: "Adds humidity to the air and removes toxins.",
              cost: "$20"
            },
            {
              name: "Rubber Plant",
              image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
              description: "Easy to care for and effective at removing toxins.",
              cost: "$17"
            },
            {
              name: "Aloe Vera",
              image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
              description: "Purifies the air and has healing properties for skin.",
              cost: "$14"
            }
          ]
        },
        {
          category: "Aromatic Plants",
          plants: [
            {
              name: "Lavender",
              image: "https://cdn.pixabay.com/photo/2017/07/08/04/44/lavender-2484229_1280.jpg",
              description: "Known for its calming scent, ideal for stress relief.",
              cost: "$16"
            },
            {
              name: "Mint",
              image: "https://cdn.pixabay.com/photo/2015/06/08/15/11/mint-801305_1280.jpg",
              description: "Fresh aroma, commonly used in teas and dishes.",
              cost: "$10"
            },
            {
              name: "Rosemary",
              image: "https://cdn.pixabay.com/photo/2016/05/16/21/07/rosemary-1390164_1280.jpg",
              description: "Strong aroma, great for cooking and air freshening.",
              cost: "$11"
            }
          ]
        },
        {
          category: "Medicinal Plants",
          plants: [
            {
              name: "Tulsi (Holy Basil)",
              image: "https://cdn.pixabay.com/photo/2020/08/30/07/34/tulsi-5530659_1280.jpg",
              description: "Boosts immunity and has numerous health benefits.",
              cost: "$13"
            },
            {
              name: "Neem",
              image: "https://cdn.pixabay.com/photo/2020/06/20/10/23/neem-leaves-5321326_1280.jpg",
              description: "Used in skincare and traditional medicine.",
              cost: "$14"
            },
            {
              name: "Amla",
              image: "https://cdn.pixabay.com/photo/2019/11/15/05/38/fruit-4627040_1280.jpg",
              description: "Rich in Vitamin C, great for digestion and immunity.",
              cost: "$15"
            }
          ]
        },
        {
          category: "Ornamental Plants",
          plants: [
            {
              name: "Money Plant",
              image: "https://cdn.pixabay.com/photo/2021/08/30/03/25/money-plant-6587215_1280.jpg",
              description: "Popular indoor plant believed to bring prosperity.",
              cost: "$12"
            },
            {
              name: "Croton",
              image: "https://cdn.pixabay.com/photo/2019/08/15/06/12/croton-4406366_1280.jpg",
              description: "Colorful foliage, adds vibrancy to home decor.",
              cost: "$18"
            },
            {
              name: "Jade Plant",
              image: "https://cdn.pixabay.com/photo/2018/03/25/13/38/jade-plant-3257502_1280.jpg",
              description: "Easy to grow, symbolizes good luck.",
              cost: "$14"
            }
          ]
        }
      ];
      

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
    };

    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    };

    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true);
        setShowCart(false);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" onClick={handleHomeClick}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div><a href="#" onClick={handlePlantsClick} style={styleA}>Plants</a></div>
                    <div>
                        <a href="#" onClick={handleCartClick} style={styleA}>
                            <h1 className='cart'>🛒<span className="cart-count">{totalCartItems}</span></h1>
                        </a>
                    </div>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((categoryObj, catIdx) => (
                        <div key={catIdx}>
                            <h2>{categoryObj.category}</h2>
                            <div className="plant-category">
                                {categoryObj.plants.map((plant, idx) => (
                                    <div key={idx} className="plant-card">
                                        <img src={plant.image} alt={plant.name} className="plant-image" />
                                        <h3>{plant.name}</h3>
                                        <p>{plant.description}</p>
                                        <p className="plant-cost">{plant.cost}</p>
                                        <button
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={addedToCart[plant.name]}
                                            className="add-to-cart-btn"
                                        >
                                            {addedToCart[plant.name] ? 'Added' : 'Add to Cart'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
