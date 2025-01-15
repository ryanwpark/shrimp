import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import Shrimp from '../images/shrimp.png';
import Cart from '../images/cart.png';
import Search from '../images/search.png';

export default function Header() {
	const [activeLink, setActiveLink] = useState('intro');
	return (
		<>
			<header className='Header'>
				<nav className='NavBar'>
					<div className='logo'>
						<img src={Shrimp} alt='Shrimp' />
					</div>
					<div className='topleft'>
						<ul className='directory'>
							<li className='home'>
								<Link
									className={
										activeLink === '/' ? 'active' : ''
									}
									to='/'
									onClick={() => setActiveLink('/')}
								>
									About us
								</Link>
							</li>

							<li className='contact'>
								<Link
									className={
										activeLink === 'contact' ? 'active' : ''
									}
									to='/contact'
									onClick={() => setActiveLink('contact')}
								>
									Contact information
								</Link>
							</li>
							<li className='shop'>
								<Link
									className={
										activeLink === 'shop' ? 'active' : ''
									}
									to='/shop'
									onClick={() => setActiveLink('shop')}
								>
									Shop
								</Link>
							</li>
							<li className='searchbar'>
								<div className='searchcontainer'>
									<input
										className='searchinput'
										placeholder='Search...'
									/>
									<img
										className='searchlogo'
										src={Search}
										alt='Search'
									/>
								</div>
							</li>
						</ul>
					</div>

					<div className='topright'>
						<ul className='usermenu'>
							<li className='login'>
								<Link
									class={
										activeLink === 'login' ? 'active' : ''
									}
									to='/login'
									onClick={() => setActiveLink('login')}
								>
									Login
								</Link>
							</li>
							<li className='register'>
								<Link
									className={
										activeLink === 'register'
											? 'active'
											: ''
									}
									to='/register'
									onClick={() => setActiveLink('register')}
								>
									Register
								</Link>
							</li>
							<li className='cart'>
								<Link
									className={
										activeLink === 'cart' ? 'active' : ''
									}
									to='/cart'
									onClick={() => setActiveLink('cart')}
								>
									<img
										className='cartLogo'
										src={Cart}
										alt='Cart'
									/>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
			<Outlet />
		</>
	);
}
