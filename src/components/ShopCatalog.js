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
	Flex,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import './css/shopCatalog.css';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const sortOptions = [
	{ label: 'Best Sellers', value: 'Best Sellers' },
	{ label: 'Featured', value: 'Featured' },
	{ label: 'Ascending Price', value: 'Ascending Price' },
	{ label: 'Descending Price', value: 'Descending Price' },
	{ label: 'A-Z', value: 'A-Z' },
	{ label: 'Z-A', value: 'Z-A' },
];

function getSortedData(data, sortType) {
	let sortedData = [...data];
	switch (sortType) {
		case 'Best Sellers':
			sortedData.sort((a, b) => b.sold - a.sold);
			break;
		case 'Featured':
			sortedData = sortedData.filter((item) => item.featured === true);
			break;
		case 'Ascending Price':
			sortedData.sort((a, b) => a.price_single - b.price_single);
			break;
		case 'Descending Price':
			sortedData.sort((a, b) => b.price_single - a.price_single);
			break;
		case 'A-Z':
			sortedData.sort((a, b) => a.name - b.name);
			break;
		case 'Z-A':
			sortedData.sort((a, b) => b.name - a.name);
			break;
		default:
			sortedData = data;
			break;
	}
	return sortedData;
}

export default function ShopCatalog({ data }) {
	const [menuItem, setMenuItem] = useState('Best Sellers');
	const [displayData, setDisplayData] = useState(data);
	const [pageNumber, setPageNumber] = useState(0);

	const handleSort = (sortType) => {
		setMenuItem(sortType);
		setDisplayData(getSortedData(data, sortType));
		setPageNumber(0);
	};

	const changePage = ({ selected }) => setPageNumber(selected);

	const shrimpPerPage = 20;
	const shrimpVisited = pageNumber * shrimpPerPage;
	const pageCount = Math.ceil(displayData.length / shrimpPerPage);

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
					<ButtonGroup spacing='2' padding='2rem' variant='solid'>
						<Button colorScheme='green'>Buy now</Button>
						<Button colorScheme='blue'>Add cart</Button>
					</ButtonGroup>
				</Card>
			);
		});

	return (
		<Stack>
			<Flex
				className='catalogMenuFlex'
				align='center'
				justify='space-between'
			>
				<Heading className='catalogHeading'>{menuItem}</Heading>
				<Menu className='catalogMenu'>
					<MenuButton
						as={IconButton}
						variant='outline'
						icon={<HamburgerIcon />}
						aria-label='Options'
						className='menuButton'
					>
						{menuItem}
					</MenuButton>
					<MenuList className='catalogMenuList'>
						{sortOptions.map((option) => (
							<MenuItem
								key={option.label}
								onClick={() => handleSort(option.label)}
							>
								{option.label}
							</MenuItem>
						))}
					</MenuList>
				</Menu>
			</Flex>
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
