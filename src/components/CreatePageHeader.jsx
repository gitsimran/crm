import { Button } from 'antd';
import React from 'react';

const CreatePageHeader = ({title, onSave, onCancel }) => {
	return (
		<div className="pageHeadingContainer">
			<h2>{title}</h2>
			<div className="actionButtonsContainer">
				<Button onClick={onCancel}>Cancel</Button>
				<Button type="primary" onClick={onSave}>Save</Button>
			</div>
		</div>
	);
};

export default CreatePageHeader;