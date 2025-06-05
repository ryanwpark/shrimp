import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home.js';
import Error from './pages/Error.js';
import Shop from './pages/Shop.js';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';

export default function App() {
	return (
		<ChakraProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='shop' element={<Shop />} />
					<Route path='login' element={<Home />} />
					<Route path='register' element={<Home />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
