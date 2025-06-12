import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react';
import { ShopContext } from '../components/cart-context';
import React from 'react';

export default function Cart(data) {
	// const [displayData, setDisplayData] = React.useState(data.shrimpData);
	const {
		cartItems,
		calcCartTotal,
		totalPrice,
		addToCart,
		removeFromCart,
		calcItemTotal,
	} = React.useContext(ShopContext);

	console.log('cartItems', cartItems);
	calcCartTotal(cartItems);
	function cartList() {
		Object.values.forEach((item) => {
			return (
				<Card>
					<CardBody>
						<li key={item.product_id}>{item.name}</li>
						<li key={item.product_id}>{item.quantity}</li>
						<li key={item.product_id}>{calcItemTotal(item)}</li>
					</CardBody>
				</Card>
			);
		});
	}

	return (
		<div className='Cart'>
			<Card>
				<CardHeader padding={'4rem'}>Your Cart</CardHeader>
				<CardBody>{cartList}</CardBody>
				<CardFooter>{totalPrice}</CardFooter>
			</Card>
		</div>
	);
}
