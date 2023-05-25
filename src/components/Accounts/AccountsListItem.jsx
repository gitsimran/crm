import { Avatar, List } from "antd";
import '../../styles.css';
import { EditOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const AccountsListItem = ({ item, index, onPress, type, setEditData }) => {

	const subDetails = [
		{
			key: 'phone',
			label: 'Phone',
		}, {
			key: 'website',
			label: 'Website',
		}, {
			key: 'industry',
			label: 'Industry',
		}, {
			key: 'accountType',
			label: 'Account Type',
		}, {
			key: 'billingCity',
			label: 'Billing City',
		}, {
			key: 'billingCountry',
			label: 'Billing Country',
		}
	]

	const handleEdit = (id) => {
		setEditData({itemType: 'accounts', itemId: id});
	}

	return <List.Item className="listItem">
		<div style={{display: 'flex'}}>
			<Link to={'/accounts/create'}  className="editIconContainer" id={item._id} onClick={(e) => handleEdit(e.currentTarget.id)}>
				<EditOutlined className="editIcon"/>
			</Link>
			<div className="listItemDetailsContainer">
                <div className="listItemAvatarContainer"></div>
				<div className="detailsContainer">
					<div className="listItemName">{item.accountName}</div>
					<div className="listItemSubDetailsContainer">
						{subDetails.map((detail, index) => {
							return item[detail.key] && <div className="subDetail">
								<div className="subDetailLabel">{detail.label}: </div>
								<div className="subDetailValue">{item[detail.key]}</div>
								{index < subDetails.length - 1 && <span> |</span>}
							</div>;
						})}
					</div>
				</div>
			</div>
		</div>
	</List.Item>;
};

export default AccountsListItem;