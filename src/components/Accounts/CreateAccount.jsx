import React, { useEffect, useState } from "react";
import CreateForm from "../CreateForm";	
import { useNavigate } from "react-router-dom";
import { accountsFormStructure } from "../../data/accountsData";
import { v4 as uuidv4 } from 'uuid';


const CreateAccount = ({addNewItem, editData}) => {

	const navigate = useNavigate();
	const [newAccountDetails, setNewAccountDetails] = useState({});
	const [editDetails, setEditDetails] = useState({});


	const handleOnSave = () => {
		if (editData?.itemId && editData?.itemType && editData?.itemType === 'accounts') {
			addNewItem({itemType: 'accounts', item: {...editDetails, ...newAccountDetails, createdTime: new Date()}, isEdit: true});
		} else {
			addNewItem({itemType: 'accounts', item: {...newAccountDetails, _id: uuidv4(), createdTime: new Date()}});
		}
		setNewAccountDetails({});
		navigate('/accounts');
	}

	const handleOnCancel = () => {
		setNewAccountDetails({});
		navigate('/accounts');
	}

	const handleOnChange = ({ key, value }) => {
		if (key && value)
			setNewAccountDetails({...newAccountDetails, ...{[key]: value}});
	}

	useEffect(() => {
		if (editData?.itemId && editData?.itemType && editData?.itemType === 'accounts') {
			const localStorageData = JSON.parse(localStorage.getItem(editData.itemType));
			const itemIndex = localStorageData.findIndex(item => item._id === editData.itemId);
			const item = localStorageData[itemIndex];
			setEditDetails(item);
		}
	}, [editData]);

	return <div>
		<CreateForm 
			title={'Create Account'}
			structure={accountsFormStructure}
			onSave={handleOnSave}
			onCancel={handleOnCancel}
			handleOnChange={handleOnChange}
			editData={editDetails}
		/>
	</div>;
}

export default CreateAccount;
