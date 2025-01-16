import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
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
					<Route path='contact' element={<Contact />} />
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
