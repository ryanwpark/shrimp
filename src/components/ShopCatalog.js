import {
	Card,
	CardBody,
	Stack,
	Heading,
	Text,
	Button,
	ButtonGroup,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import './css/shopCatalog.css';
import { useState } from 'react';

export default function ShopCatalog({ data }) {
	var [menuItem, setMenuItem] = useState('Best Sellers');

	return (
		<div className='catalogContainer'>
			<Menu className='catalogMenu'>
				<MenuButton
					as={IconButton}
					variant='outline'
					icon={<HamburgerIcon />}
					aria-label='Options'
				>
					{menuItem}
				</MenuButton>
				<MenuList>
					<MenuItem onClick={() => setMenuItem('Best Sellers')}>
						Best Sellers
					</MenuItem>
					<MenuItem onClick={() => setMenuItem('Featured')}>
						Featured
					</MenuItem>
					<MenuItem onClick={() => setMenuItem('Ascending Price')}>
						Ascending Price
					</MenuItem>
					<MenuItem onClick={() => setMenuItem('Descending Price')}>
						Descending
					</MenuItem>
					<MenuItem onClick={() => setMenuItem('A-Z')}>
						A - Z
					</MenuItem>
					<MenuItem onCLick={() => setMenuItem('Z-A')}>
						Z - A
					</MenuItem>
				</MenuList>
			</Menu>
			{data.map((item) => (
				<Card
					bg='rgb(245, 245, 220)'
					borderColor='red.black'
					border='1px solid'
					className='=catalogCard'
				>
					<CardBody>
						<img
							src={require(`../${item.image_url}`)}
							alt={item.name}
							borderRadius='lg'
						/>
						<Stack mt='6' spacing='3'>
							<Heading size='md'>{item.name || 'Shrimp'}</Heading>
							<Text>${item.price_single || '--'} for 1</Text>
							<Text>${item.price_pack_10 || '--'} for 10</Text>
						</Stack>
					</CardBody>
					<ButtonGroup spacing='3' padding='.5rem'>
						<Button variant='solid' colorScheme='green'>
							Buy now
						</Button>
						<Button variant='solid' colorScheme='blue'>
							Add cart
						</Button>
					</ButtonGroup>
				</Card>
			))}
		</div>
	);
}
