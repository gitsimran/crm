import { v4 as uuidv4 } from 'uuid';

export const contactsSortBy = [
	{ key: 'none', label: (<div>None</div>), value: 'None' },
	{ key: 'contactName', label: (<div>Contact name</div>), value: 'Contact name' },
	{ key: 'firstName', label: (<div>First name</div>), value: 'First name' },
	{ key: 'lastName', label: (<div>Last name</div>), value: 'Last name' },
	{ key: 'contactOwner', label: (<div>Contact owner</div>), value: 'Contact owner' },
	{ key: 'createdTime', label: (<div>Created time</div>), value: 'Created time' },
	{ key: 'email', label: (<div>Email</div>), value: 'Email' },
	{ key: 'website', label: (<div>Website</div>), value: 'Website' },
	{ key: 'phone', label: (<div>Phone</div>), value: 'Phone' },
	{ key: 'title', label: (<div>Title</div>), value: 'Title' },
	{ key: 'leadSource', label: (<div>Lead source</div>), value: 'Lead source' },
];

const leadSourceOptions = [
	{
		key: 'none',
		label: (
			<div>None</div>
		),
		value: 'none',
	},

	{
		key: 'advertisement',
		label: (
			<div>Advertisement</div>
		),
		value: 'advertisement',
	},
	{
		key: 'coldCall',
		label: (
			<div>Cold Call</div>
		),
		value: 'coldCall'
	},
	{
		key: 'employeeReferral',
		label: (
			<div>Employee Referral</div>
		),
		value: 'employeeReferral'
	},
	{
		key: 'externalReferral',
		label: (
			<div>External Referral</div>
		),
		value: 'externalReferral'
	},
	{
		key: 'onlineStore',
		label: (
			<div>Online Store</div>
		),
		value:  'onlineStore'
	},
	{
		key: 'partner',
		label: (
			<div>Partner</div>
		),
		value: 'partner'
	},
	{
		key: 'publicRelations',
		label: (
			<div>Public Relations</div>
		),
		value: 'publicRelations'
	},
	{
		key: 'salesMailAlias',
		label: (

			<div>Sales Mail Alias</div>
		),
		value: 	'salesMailAlias'
	},
	{
		key: 'seminarPartner',
		label: (
			<div>Seminar Partner</div>
		),
		value: 'seminarPartner'
	},
	{
		key: 'internalSeminar',
		label: (
			<div>Internal Seminar</div>
		),

		value:  'internalSeminar'
	},
	{
		key: 'tradeShow',
		label: (
			<div>Trade Show</div>
		),
		value: 'tradeShow'
	},
	{
		key: 'webDownload',
		label: (
			<div>Web Download</div>
		),
		value: 'webDownload'
	},
	{
		key: 'webResearch',
		label: (
			<div>Web Research</div>
		),
		value: 'webResearch'
	},
	{
		key: 'chat',
		label: (
			<div>Chat</div>
		),
		value: 'chat'
	},
	{
		key: 'facebook',
		label: (
			<div>Facebook</div>
		),
		value: 'facebook'
	},
	{
		key: 'twitter',
		label: (
			<div>Twitter</div>
		),
		value: 'twitter'
	},
	{
		key: 'other',
		label: (
			<div>Other</div>
		),
		value:  'other' 
	},

];

export const contactsFormStructure = [
	{
		title: 'Contact Information',
		fields: [
			{ key: 'contactOwner', label: 'Contact Owner', type: 'input', },
			{ key: 'leadSource', label: 'Lead Source', type: 'input', options: leadSourceOptions },
			{ key: 'firstName', label: 'First Name', type: 'input' },
			{ key: 'lastName', label: 'Last Name', type: 'input' },
			{ key: 'accountName', label: 'Account Name', type: 'input' },
			{ key: 'vendorName', label: 'Vendor Name', type: 'input' },
			{ key: 'email', label: 'Email', type: 'input' },
			{ key: 'title', label: 'Title', type: 'input' },
			{ key: 'phone', label: 'Phone', type: 'input' },
			{ key: 'department', label: 'Department', type: 'input' },
			{ key: 'mobile', label: 'Mobile', type: 'input' },
			{ key: 'homePhone', label: 'Home Phone', type: 'input' },
			{ key: 'fax', label: 'Fax', type: 'input' },
			{ key: 'dateOfBirth', label: 'Date of Birth', type: 'input' },
			{ key: 'assistant', label: 'Assistant', type: 'input' },
			{ key: 'assistantPhone', label: 'Assistant Phone', type: 'input' },
			{ key: 'emailOptOut', label: 'Email Opt Out', type: 'checkbox' },
			{ key: 'skypeId', label: 'Skype ID', type: 'input' },
			{ key: 'secondaryEmail', label: 'Secondary Email', type: 'input' },
			{ key: 'twitter', label: 'Twitter', type: 'input' },
			{ key: 'reportingTo', label: 'Reporting To', type: 'input' },
		],
	}, {
		title: 'Address Information',
		fields: [
			{ key: 'mailingStreet', label: 'Mailing Street', type: 'input', },
			{ key: 'mailingCity', label: 'Mailing City', type: 'input' },
			{ key: 'mailingState', label: 'Mailing State', type: 'input' },
			{ key: 'mailingZip', label: 'Mailing Zip', type: 'input' },
			{ key: 'mailingCountry', label: 'Mailing Country', type: 'input' },
			{ key: 'otherStreet', label: 'Other Street', type: 'input' },
			{ key: 'otherCity', label: 'Other City', type: 'input' },
			{ key: 'otherState', label: 'Other State', type: 'input' },
			{ key: 'otherZip', label: 'Other Zip', type: 'input' },
			{ key: 'otherCountry', label: 'Other Country', type: 'input' },
		],
	}, {
		title: 'Description Information',
		fields: [
			{ key: 'description', label: 'Description', type: 'textarea' },
		],
	}
]

export const contactsData = [
	{
		id: uuidv4(),
		contactOwner: 'John Doe',
		firstName: 'John',
		lastName: 'Doe',
		accountName: 'Acme Corporation',
		email: 'johndoe@noemail.com',
		phone: '123456',
		mobile: '123456',
		assistant: 'Jane Doe',
		leadSource: 'web',
		vendorName: 'Acme Corporation',
		title: 'CEO',
		department: 'Management',
		homePhone: '123456',
		fax: '123456',
		dateOfBirth: '01/01/1970',
		assistantPhone: '123456',
		emailOptOut: 'false',
		skypeId: 'johndoe',
		secondaryEmail: null,
		twitter: '@johndoe',
		reportingTo: 'Jane Doe',
	},
];