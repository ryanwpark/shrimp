import {
	Card,
	CardBody,
	Stack,
	Input,
	Heading,
	Flex,
	Text,
	Button,
	ButtonGroup,
} from '@chakra-ui/react';
import './css/shopFilter.css';

export default function ShopFilter() {
	return (
		<Stack className='ShopFilterContainer'>
			<Card className='ShopFilterCard' background={'rgb(245, 245, 220)'}>
				<CardBody className='ShopFilterCardBody'>
					<Stack>
						<Input className='ShopFilterInput' bg='white' />
						<Button className='ShopFilterButton' bg={'blue.100'}>
							Find
						</Button>
					</Stack>
				</CardBody>
			</Card>
		</Stack>
	);
}
