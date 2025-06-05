import ShopCatalog from '../components/ShopCatalog';
import shrimpData from '../shrimp.json';
// import { useState } from 'react';

export default function Shop() {
	// const [data, setData] = useState(shrimpData)
	return <ShopCatalog data={shrimpData} />;
}
