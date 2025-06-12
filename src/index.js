import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import Error from './pages/Error.js';
import Shop from './pages/Shop.js';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { ShopContextProvider } from './components/cart-context.jsx';
import shrimpData from './shrimp.json';
import Cart from './pages/Cart.js';

export default function App() {
	return (
		<div className='App'>
			<ChakraProvider>
				<ShopContextProvider>
					<BrowserRouter>
						<Header />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route
								path='shop'
								element={<Shop shrimpData={shrimpData} />}
							/>
							<Route path='login' element={<Home />} />
							<Route
								path='cart'
								element={<Cart data={shrimpData} />}
							/>
							<Route path='*' element={<Error />} />
						</Routes>
					</BrowserRouter>
				</ShopContextProvider>
			</ChakraProvider>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
