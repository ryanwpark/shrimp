import {
	Card,
	CardBody,
	Stack,
	Heading,
	Text,
	Button,
	ButtonGroup,
} from '@chakra-ui/react';
import './css/shopCatalog.css';

export default function ShopCatalog({ data }) {
	return (
		<div className='catalogOrganization'>
			{data.map((item) => (
				<Card
					maxW='250'
					bg='rgb(245, 245, 220)'
					borderColor='red.black'
					border='1px solid'
				>
					<CardBody mb='-1rem'>
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
