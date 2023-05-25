import { Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import CreatePageHeader from "./CreatePageHeader";

const CreateForm = ({ structure, title, onSave, onCancel, handleOnChange, editData }) => {

	return (
		<div>
			<CreatePageHeader title={title} onSave={onSave} onCancel={onCancel} />
			<div className="formContainer">
				{structure.map((item, index) => {
					return (
						<div key={index} className="formSubHeading">
							<h4>{item.title}</h4>
							<div className="formSubHeadingContent">
								{item.fields.map((field, index) => {
									let defaultValue = editData?.[field.key];
									if (field.type === 'select' && defaultValue) {
										defaultValue = field.options.find(option => option.value === defaultValue)?.value;
									}
									return (
										<div key={index} className="formField">
											{(field.type === 'input') &&
												<div className="formFieldInput">
													<label>{field.label}</label>
													<input type={field.inputType} defaultValue={defaultValue} required={field.required} onChange={e => handleOnChange({key: field.key, value: e.target.value})} />
												</div>
											}
											{(field.type === 'select') &&
												<div className="formFieldSelect">
													<label>{field.label}</label>
													<Select
														placeholder={field.placeholder}
														options={field.options}
														onChange={(value) => handleOnChange({key: field.key, value: value})}
														defaultValue={defaultValue}
														
													/>
												</div>
											}
											{(field.type === 'textarea') &&
												<div className="formFieldTextarea">
													<label>{field.label}</label>
													<TextArea
														onChange={e => handleOnChange({key: field.key, value: e.target.value})} 
														required={field.required}
														value={defaultValue}
													/>
												</div>
											}
											{(field.type === 'checkbox') &&
												<div className="formFieldCheckbox">
													<label>{field.label}</label>
													<input type="checkbox" value={defaultValue} required={field.required} onChange={e => handleOnChange({key: field.key, value: e.target.value})} />
												</div>
											}
										</div>
									);
								})}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	);
};

export default CreateForm;