import './Shop.css';

export default function Shop() {
	return (
		<div className='pagelayout'>
			<div className='horizontalstack'>
				<div className='leftstack'>
					<div className='filter'>Filters</div>
					<div className='faq'>FAQ</div>
				</div>
				<div className='rightstack'>
					<div className='catalog'>Catalog</div>
					<div className='pageindice'>page indicators</div>
				</div>
			</div>
		</div>
	);
}
