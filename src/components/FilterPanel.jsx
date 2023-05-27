import { Input } from 'antd';
import React, { useEffect, useState } from 'react'

const FilterPanel = ({filterByOptions, setFilterValue, type}) => {
	
	
	const [inputValue, setInputValue] = useState('');
	const [selectedFilter, setSelectedFilter] = useState('');

	useEffect(() => {
		setFilterValue({selectedFilter, inputValue, type});
	}, [inputValue, selectedFilter]);
	
	return <div className="filterContainer">
		{(selectedFilter !== 'none' && selectedFilter !== '') && <Input allowClear placeholder='Enter filter value here' type="text" className='filterInput' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />}
		{filterByOptions.map((option, index) => {
			return <div className={`filterItem ${selectedFilter === option.value && 'selectedFilter'}`} onClick={() => setSelectedFilter(option.value)} key={index}>
				{option.label}
			</div>;
		})}
	</div>

};

export default FilterPanel;