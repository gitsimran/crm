import React, { useEffect, useState } from "react";
import { leadsFormStructure } from "../../data/leadsData";
import CreateForm from "../CreateForm";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


const CreateLead = ({addNewItem, editData}) => {

	const navigate = useNavigate();
	const [newLeadDetails, setNewLeadDetails] = useState({});
	const [editDetails, setEditDetails] = useState({});


	const handleOnSave = () => {
		if (editData?.itemId && editData?.itemType && editData?.itemType === 'leads') {
			addNewItem({itemType: 'leads', item: {...editDetails, ...newLeadDetails, createdTime: new Date()}, isEdit: true});
		} else {
			addNewItem({itemType: 'leads', item: {...newLeadDetails, _id: uuidv4(), createdTime: new Date()}});
		}
		setNewLeadDetails({});
		navigate('/leads');
	}

	const handleOnCancel = () => {
		setNewLeadDetails({});
		navigate('/leads');
	}


	const handleOnChange = ({ key, value }) => {
		if (key && value)
			setNewLeadDetails({...newLeadDetails, ...{[key]: value}});
	}

	useEffect(() => {
		if (editData?.itemId && editData?.itemType && editData?.itemType === 'leads') {
			const localStorageData = JSON.parse(localStorage.getItem(editData.itemType));
			const itemIndex = localStorageData.findIndex(item => item._id === editData.itemId);
			const item = localStorageData[itemIndex];
			setEditDetails(item);
		}
	}, [editData]);


	return <div>
		<CreateForm 
			title={'Create Lead'}
			structure={leadsFormStructure}
			onSave={handleOnSave}
			onCancel={handleOnCancel}
			handleOnChange={handleOnChange}
			editData={editDetails}
		/>
	</div>;
}

export default CreateLead;
