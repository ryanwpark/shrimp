import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import '../components/css/header.css';
import Shrimp from '../images/shrimp.png';
import Cart from '../images/cart.png';
import Search from '../images/search.png';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { HStack, InputGroup, Input, Flex, Spacer } from '@chakra-ui/react';

export default function Header() {
	const [activeLink, setActiveLink] = useState('');
	return (
		<>
			<Flex className='headerbar-flex'>
				<HStack className='headerbar-hstack'>
					<ChakraLink
						as={RouterLink}
						className={activeLink === '/' ? 'active' : ''}
						to='/'
						onClick={() => setActiveLink('/')}
					>
						<img className='site-logo' src={Shrimp} alt='Shrimp' />
					</ChakraLink>
					<ChakraLink
						as={RouterLink}
						className={activeLink === '/shop' ? 'active' : ''}
						to='shop'
						onClick={() => setActiveLink('/shop')}
					>
						Shop
					</ChakraLink>
					<Spacer />
					<InputGroup
						className='headerbar-searchbar'
						startElement={
							<img
								className='search-logo'
								src={Search}
								alt='Search'
							/>
						}
					>
						<Input
							className='headerbar-searchbar-input'
							placeholder='Search...'
							width='400px'
							background='white'
						/>
					</InputGroup>
					<ChakraLink
						as={RouterLink}
						className={activeLink === '/login' ? 'active' : ''}
						to='login'
						onClick={() => setActiveLink('/login')}
					>
						Login
					</ChakraLink>
					<ChakraLink
						as={RouterLink}
						className={activeLink === '/cart' ? 'active' : ''}
						to='cart'
						onClick={() => setActiveLink('/cart')}
					>
						<img
							className='cart-logo'
							src={Cart}
							alt='Cart'
							width={50}
						/>
					</ChakraLink>
				</HStack>
			</Flex>

			<Outlet />
		</>
	);
}
