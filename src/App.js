import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from './components/NavBar';
import Leads from './components/Leads/Leads';
import Contacts from './components/Contacts/Contacts';
import Accounts from './components/Accounts/Accounts';
import './index.css';
import CreateLead from './components/Leads/CreateLead';
import CreateAccount from './components/Accounts/CreateAccount';
import CreateContact from './components/Contacts/CreateContact';

function App() {

	const addNewItem = ({itemType, item, isEdit}) => {
		const localStorageData = JSON.parse(localStorage.getItem(itemType));
		if (!localStorageData || localStorageData.length === 0) {
			localStorage.setItem(itemType, JSON.stringify([item]));
		} else {
			if (isEdit) {
				// edit existing item
				const index = localStorageData.findIndex((data) => data._id === item._id);
				localStorageData[index] = item;
			} else {
				localStorageData.push(item);
			}
			localStorage.setItem(itemType, JSON.stringify(localStorageData));
		}
	}

	const [editData, setEditData] = useState({itemType: '', itemId: ''});
	const [filterBy, setFilterBy] = useState('none');
	const [filterType, setFilterType] = useState('');
	const [inputValue, setInputValue] = useState('');

	const setFilterValue = ({selectedFilter, inputValue, type}) => {
		setFilterBy(selectedFilter);
		setFilterType(type);
		setInputValue(inputValue);

	}
	
	return (
		<Routes>
			<Route path="/" element={<NavBar />}>
				<Route index element={<Leads />} />
				<Route path='leads' element={<Leads setEditData={setEditData} filterValue={filterBy} filterType={filterType} filterInputValue={inputValue} setFilterValue={setFilterValue} />} />
				<Route path='leads/create' element={<CreateLead addNewItem={addNewItem} editData={editData} />} />
				<Route path="contacts" element={<Contacts setEditData={setEditData} filterValue={filterBy} filterType={filterType} filterInputValue={inputValue} setFilterValue={setFilterValue} />} />
				<Route path='contacts/create' element={<CreateContact addNewItem={addNewItem} editData={editData} />} />
				<Route path="accounts" element={<Accounts setEditData={setEditData} filterValue={filterBy} filterType={filterType} filterInputValue={inputValue} setFilterValue={setFilterValue} />} />
				<Route path='accounts/create' element={<CreateAccount addNewItem={addNewItem} editData={editData} />} />
			</Route>
		</Routes>
	);
};

export default App;
