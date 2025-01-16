import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import Shrimp from '../images/shrimp.png';
import Cart from '../images/cart.png';
import Search from '../images/search.png';
import {
	HStack,
	Stack,
	InputGroup,
	InputLeftAddon,
	Input,
} from '@chakra-ui/react';

export default function Header() {
	const [activeLink, setActiveLink] = useState('intro');
	return (
		<>
			<nav className='NavBar'>
				<HStack className='headerbar' spacing={5}>
					<img className='sitelogo' src={Shrimp} alt='Shrimp' />
					<HStack className='headerbar-left' spacing={5}>
						<Link
							className={activeLink === '/' ? 'active' : ''}
							to='/'
							onClick={() => setActiveLink('/')}
						>
							About us
						</Link>
						<Link
							className={activeLink === 'contact' ? 'active' : ''}
							to='/contact'
							onClick={() => setActiveLink('contact')}
						>
							Contact information
						</Link>
						<Link
							className={activeLink === 'shop' ? 'active' : ''}
							to='/shop'
							onClick={() => setActiveLink('shop')}
						>
							Shop
						</Link>
					</HStack>
					<Stack
						className='headerSearchBar'
						// marginLeft={10}
						marginTop={1}
						marginBottom={1}
					>
						<InputGroup>
							<InputLeftAddon>
								<img className='searchlogo' src={Search} />
							</InputLeftAddon>
							<Input
								placeholder='				Search...'
								width={400}
								backgroundColor='orange.50'
							/>
						</InputGroup>
					</Stack>
					<HStack
						className='headerback-right'
						marginLeft={190}
						spacing={5}
					>
						<Link
							class={activeLink === 'login' ? 'active' : ''}
							to='/login'
							onClick={() => setActiveLink('login')}
						>
							Login
						</Link>
						<Link
							className={activeLink === 'cart' ? 'active' : ''}
							to='/cart'
							onClick={() => setActiveLink('cart')}
						>
							<img className='cartLogo' src={Cart} alt='Cart' />
						</Link>
					</HStack>
				</HStack>
			</nav>

			<Outlet />
		</>
	);
}
