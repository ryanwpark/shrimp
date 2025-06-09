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
import ReactPaginate from 'react-paginate';

export default function ShopCatalog({ data }) {
	const [menuItem, setMenuItem] = useState('Best Sellers');
	const [displayData, setDisplayData] = useState(data.slice(0, 100));
	const [pageNumber, setPageNumber] = useState(0);

	const shrimpPerPage = 20;
	const shrimpVisited = pageNumber * shrimpPerPage;

	const pageCount = Math.ceil(data.length / shrimpPerPage);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	const displayShrimp = displayData
		.slice(shrimpVisited, shrimpVisited + shrimpPerPage)
		.map((shrimp) => {
			return (
				<Card className='catalogCard'>
					<CardBody>
						<img
							src={require(`../${shrimp.image_url}`)}
							alt={shrimp.name}
							borderRadius='lg'
						/>
						<Stack mt='6' spacing='3'>
							<Heading size='md'>
								{shrimp.name || 'Shrimp'}
							</Heading>
							<Text>${shrimp.price_single || '--'} for 1</Text>
							<Text>${shrimp.price_pack_10 || '--'} for 10</Text>
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
			);
		});

	return (
		<Stack>
			<Menu className='catalogMenu'>
				<MenuButton
					as={IconButton}
					variant='outline'
					icon={<HamburgerIcon />}
					aria-label='Options'
					className='menuButton'
					width='5vw'
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
					<MenuItem onClick={() => setMenuItem('Z-A')}>
						Z - A
					</MenuItem>
				</MenuList>
			</Menu>
			<div className='catalogContainer'>
				{displayShrimp}
				<ReactPaginate
					previousLabel='Previous'
					nextLabel='Next'
					pageCount={pageCount}
					onPageChange={changePage}
					containerClassName='paginationBttns'
					previousLinkClassName='previousBttn'
					nextLinkClassName='nextBttn'
					disabledClassName='paginationDisabled'
					activeClassName='paginationActive'
				/>
			</div>
		</Stack>
	);
}
