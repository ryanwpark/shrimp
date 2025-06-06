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
				<CardBody>
					<Stack>
						<Input type='dropdown' />
						<Button color={'blue'}>Find</Button>
					</Stack>
				</CardBody>
			</Card>
		</Stack>
	);
}
