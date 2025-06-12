import { Stack } from '@chakra-ui/react';
import ShopCatalog from '../components/ShopCatalog';
import ShopFilter from '../components/ShopFilter';
// import shrimpData from '../shrimp.json';

export default function Shop(shrimpData) {
	return (
		<Stack
			className='ShopContainer'
			alignItems={'center'}
			justifyContent='center'
			bg='rgb(245, 245, 220)'
		>
			<ShopFilter />
			{/* <ShopFilterMenyu/> */}
			<ShopCatalog data={shrimpData} />
		</Stack>
	);
}
