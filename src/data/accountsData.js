import { v4 as uuidv4 } from 'uuid';

export const accountsSortBy = [
	{
	  key: 'none',
	  label: (
		<div>None</div>
	  ),
	  value: 'None',
	},
	{
		key: 'accountName',
		label: (
			<div>Account name</div>
		),
		value: 'Account name',
	},
	{
		key: 'accountOwner',
		label: (
			<div>Account owner</div>
		),
		value: 'Account owner',
	},
	{
		key: 'createdTime',
		label: (
			<div>Created time</div>
		),
		value: 'Created time',
	},
	{ key: 'website', label: (<div>Website</div>), value: 'Website' },
	{ key: 'phone', label: (<div>Phone</div>), value: 'Phone' },
	{ key: 'industry', label: (<div>Industry</div>), value: 'Industry' },
	{ key: 'accountType', label: (<div>Account type</div>), value: 'Account type' },
	{ key: 'billingCity', label: (<div>Billing city</div>), value: 'Billing city' },
	{ key: 'billingCountry', label: (<div>Billing country</div>), value: 'Billing country' },
];

const ratingOptions = [
	{ value: 'none', label: 'None' },
	{ value: 'acquired', label: 'Acquired' },
	{ value: 'active', label: 'Active' },
	{ value: 'marketFailed', label: 'Market Failed' },
	{ value: 'projectCancelled', label: 'Project Cancelled' },
	{ value: 'shutdown', label: 'Shutdown' },
];

const accountTypeOptions = [
	{ value: 'none', label: 'None' },
	{ value: 'analyst', label: 'Analyst' },
	{ value: 'competitor', label: 'Competitor' },
	{ value: 'customer', label: 'Customer' },
	{ value: 'integrator', label: 'Integrator' },
	{ value: 'investor', label: 'Investor' },
	{ value: 'partner', label: 'Partner' },
	{ value: 'press', label: 'Press' },
	{ value: 'prospect', label: 'Prospect' },
	{ value: 'reseller', label: 'Reseller' },
	{ value: 'supplier', label: 'Supplier' },
	{ value: 'vendor', label: 'Vendor' },
];

const industryOptions = [
	{ value: 'none', label: 'None' },
	{ value: 'applicationServiceProvider', label: 'ASP (Application Service Provider)' },
	{ value: 'consulting', label: 'Consulting' },
	{ value: 'communications', label: 'Communications' },
	{ value: 'dataTelecom', label: 'Data/Telecom OEM' },
	{ value: 'enterpriseResourcePlanning', label: 'ERP (Enterprise Resource Planning)' },
	{ value: 'educational', label: 'Educational' },
	{ value: 'financialServices', label: 'Financial Services' },
	{ value: 'government', label: 'Government/Military' },
	{ value: 'largeEnterprise', label: 'Large Enterprise' },
	{ value: 'managementISV', label: 'MSP (Management Service Provider)' },
	{ value: 'manufacturing', label: 'Manufacturing' },
	{ value: 'networkEquipmentEnterprise', label: 'Network Equipment Enterprise' },
	{ value: 'nonManagementISV', label: 'Non-management ISV' },
	{ value: 'opticalNetworking', label: 'Optical Networking' },
	{ value: 'realEstate', label: 'Real Estate' },
	{ value: 'serviceProvider', label: 'Service Provider' },
	{ value: 'smallMediumEnterprise', label: 'SMB (Small/Medium Business)' },
	{ value: 'storageEquipment', label: 'Storage Equipment' },
	{ value: 'storageServiceProvider', label: 'Storage Service Provider' },
	{ value: 'systemIntegrator', label: 'System Integrator' },
	{ value: 'technology', label: 'Technology' },
	{ value: 'wirelessIndustry', label: 'Wireless Industry' },
];

const ownershipOptions = [
	{ value: 'none', label: 'None' },
	{ value: 'public', label: 'Public' },	
	{ value: 'private', label: 'Private' },
	{ value: 'subsidiary', label: 'Subsidiary' },
	{ value: 'partnership', label: 'Partnership' },
	{ value: 'government', label: 'Government' },
	{ value: 'privatelyHeld', label: 'Privately Held' },
	{ value: 'publicEmployed', label: 'Publicly Employed' },
];

export const accountsFormStructure = [
	{
		title: 'Account Information',
		fields: [
			{ label: 'Account Owner', type: 'input', key: 'accountOwner' },
			{ label: 'Rating', type: 'select', options: ratingOptions, key: 'rating' },
			{ label: 'Account Name', type: 'input', key: 'accountName', required: true },
			{ label: 'Account Number', type: 'input', key: 'accountNumber' },
			{ label: 'Account Site', type: 'input', key: 'accountSite' },
			{ label: 'Account Type', type: 'select', options: accountTypeOptions, key: 'accountType' },
			{ label: 'Industry', type: 'select', options: industryOptions, key: 'industry' },
			{ label: 'Annual Revenue', type: 'input', key: 'annualRevenue' },
			{ label: 'Phone', type: 'input', key: 'phone' },
			{ label: 'Fax', type: 'input', key: 'fax' },
			{ label: 'Website', type: 'input', key: 'website' },
			{ label: 'Ticker Symbol', type: 'input', key: 'tickerSymbol' },
			{ label: 'Ownership', type: 'select', options: ownershipOptions, key: 'ownership' },
			{ label: 'Employees', type: 'input', key: 'employees' },
			{ label: 'SIC Code', type: 'input', key: 'sicCode' },
		],
	}, {
		title: 'Address Information',
		fields: [
			{ label: 'Billing Street', type: 'input', key: 'billingStreet' },
			{ label: 'Billing City', type: 'input', key: 'billingCity' },
			{ label: 'Billing State', type: 'input', key: 'billingState' },
			{ label: 'Billing Code', type: 'input', key: 'billingCode' },
			{ label: 'Billing Country', type: 'input', key: 'billingCountry' },
			{ label: 'Shipping Street', type: 'input', key: 'shippingStreet' },
			{ label: 'Shipping City', type: 'input', key: 'shippingCity' },
			{ label: 'Shipping State', type: 'input', key: 'shippingState' },
			{ label: 'Shipping Code', type: 'input', key: 'shippingCode' },
			{ label: 'Shipping Country', type: 'input', key: 'shippingCountry' },
		],
	}, {
		title: 'Description Information',
		fields: [
			{ label: 'Description', type: 'textarea', key: 'description' },
		],
	}
];

export const accountsData = [
	{
		id: uuidv4(),
		accountOwner: 'John Doe',
		rating: 'acquired',
		accountName: 'Acme Corp',
		accountNumber: '123456',
		accountSite: 'Acme Corp',
		accountType: 'analyst',
		industry: 'consulting',
		annualRevenue: '123456',
		phone: '123456',
		fax: '123456',
		website: 'www.acme.com',
		tickerSymbol: 'ACME',
		ownership: 'public',
		employees: '123456',
		sicCode: '123456',
		billingCity: 'New York',
		billingCountry: 'USA',
		createdTime: new Date(),
	},

];