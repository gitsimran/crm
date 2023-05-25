import React, { useEffect, useState } from "react";
import CreateForm from "../CreateForm";
import { useNavigate } from "react-router-dom";
import { contactsFormStructure } from "../../data/contactsData";
import { v4 as uuidv4 } from 'uuid';

const CreateContact = ({addNewItem, editData}) => {

	const navigate = useNavigate();
	const [newContactDetails, setNewContactDetails] = useState({});
	const [editDetails, setEditDetails] = useState({});

	const handleOnSave = () => {
		if (editData?.itemId && editData?.itemType && editData?.itemType === 'contacts') {
			addNewItem({itemType: 'contacts', item: {...editDetails, ...newContactDetails, createdTime: new Date()}, isEdit: true});
		} else {
			addNewItem({itemType: 'contacts', item: {...newContactDetails, _id: uuidv4(), createdTime: new Date()}});
		}
		setNewContactDetails({});
		navigate('/contacts');
	}

	const handleOnCancel = () => {
		setNewContactDetails({});
		navigate('/contacts');
	}

	const handleOnChange = ({ key, value }) => {
		if (key && value)
			setNewContactDetails({...newContactDetails, ...{[key]: value}});
	}

	useEffect(() => {
		if (editData?.itemId && editData?.itemType && editData?.itemType === 'contacts') {
			const localStorageData = JSON.parse(localStorage.getItem(editData.itemType));
			const itemIndex = localStorageData.findIndex(item => item._id === editData.itemId);
			const item = localStorageData[itemIndex];
			setEditDetails(item);
		}
	}, [editData]);

	return <div>
		<CreateForm 
			title={'Create Contact'}
			structure={contactsFormStructure}
			onSave={handleOnSave}
			onCancel={handleOnCancel}
			handleOnChange={handleOnChange}
			editData={editDetails}
		/>
	</div>;
}

export default CreateContact;
