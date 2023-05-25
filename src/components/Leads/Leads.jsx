
import { Avatar, Button, Dropdown, List, Select } from 'antd';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../page-styles.css';
import LeadsListItem from './LeadsListItem';
import { leadsData, leadsSortBy } from '../../data/leadsData';


const Leads = ({setEditData}) => {
	
	const [sortByKey, setSortByKey] = useState('none');
	const [sortOrder, setSortOrder] = useState('ascend');

	const handleOnChange = (e) => {
		setSortByKey(e.key);
	}
	  
	const [position, setPosition] = useState('bottom');
  	const [align, setAlign] = useState('center');

	let addedLeads = JSON.parse(localStorage.getItem('leads'));

	if (!addedLeads) {
		localStorage.setItem('leads', JSON.stringify([]));
		addedLeads = [];
	}

	const data = [...addedLeads];

	const sortedData = data.sort((a, b) => {
		if (sortByKey === 'none') return 0;
		if (sortByKey === 'createdTime') {
			if (sortOrder === 'ascend') {
				return new Date(a[sortByKey]) - new Date(b[sortByKey]);
			} else {
				return new Date(b[sortByKey]) - new Date(a[sortByKey]);
			}
		}
		
		if (sortOrder === 'ascend') {
			return a[sortByKey]?.toLowerCase().localeCompare(b[sortByKey]?.toLowerCase());
		} else {
			return b[sortByKey]?.toLowerCase().localeCompare(a[sortByKey]?.toLowerCase());
		}

	});

	return (
		<>
			<div className='subHeader'>
				<Button>
					<Link to={'/leads/create'}>Create lead</Link>
				</Button>
			</div>
			<hr />
			<div className='sortHeader'>
				<span style={{marginRight: '6px'}}>Sort by: </span>
				<Select
					placeholder="Sort by"
					style={{ width: 120 }}
					options={leadsSortBy}
					onChange={(_, obj) => handleOnChange(obj)}
				/>
				{sortByKey !== 'none' && (
					<Select
						className='sortOrder'
						options={[
							{ label: 'Asc', value: 'ascend' },
							{ label: 'Desc', value: 'descend' },
						]}
						defaultValue={sortOrder}
						onChange={val => {
							setSortOrder(val);
						}}
					>
						{sortOrder === 'ascend' ? 'Desc' : 'Asc'}
					</Select>
				)}
			</div>
			<hr style={{marginBottom: '0'}} />
			<List
				pagination={{ position, align, pageSize: 10 }}
				className='list'
				dataSource={sortedData}
				renderItem={(item, index) => (
					<LeadsListItem item={item} index={index} type={'leads'} setEditData={setEditData} />
				)}
			/>
		
		</>
		
	);
};

export default Leads;

