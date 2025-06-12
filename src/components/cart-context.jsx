import React from 'react';
import './css/cart.css';
import shrimpData from '../shrimp.json';

export const ShopContext = React.createContext(null);

const getDefaultCart = () => {
	let cart = {};
	for (let i = 1; i < shrimpData.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

export const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = React.useState(getDefaultCart);
	const [totalPrice, setTotalPrice] = React.useState(0);

	function addToCart(itemId) {
		setCartItems((prevItems) => ({
			...prevItems,
			[itemId]: prevItems[itemId] + 1,
		}));
	}
	function removeFromCart(itemId) {
		setCartItems((prevItems) => ({
			...prevItems,
			[itemId]: prevItems[itemId] - 1,
		}));
	}

	function calcCartTotal() {
		let total = 0;
		Object.values(cartItems).forEach((item) => {
			let count_10 = item.quantity % 10;
			let count = Math.floor(item.quantity / 10);
			total += item.price_single * count + item.price_ten * count_10;
		});
		setTotalPrice(total);
	}

	function calcItemTotal(item) {
		let count_10 = item.quantity % 10;
		let count = Math.floor(item.quantity / 10);
		let total = item.price_single * count + item.price_ten * count_10;
		return total;
	}

	const contextValue = {
		cartItems,
		totalPrice,
		addToCart,
		removeFromCart,
		getDefaultCart,
		calcCartTotal,
		calcItemTotal,
	};

	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};
