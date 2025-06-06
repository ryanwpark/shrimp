import { Stack } from '@chakra-ui/react';
import ShopCatalog from '../components/ShopCatalog';
import ShopFilter from '../components/ShopFilter';
import shrimpData from '../shrimp.json';
// import { useState } from 'react';

export default function Shop() {
	// const [data, setData] = useState(shrimpData)
	return (
		<Stack
			className='ShopContainer'
			alignItems={'center'}
			justifyContent='center'
			bg='rgb(245, 245, 220)'
		>
			<ShopFilter />
			<ShopCatalog data={shrimpData} />
		</Stack>
	);
}
