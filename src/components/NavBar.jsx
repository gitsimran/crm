// basic react component
import React from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

const NavBar = () => {

	const navigate = useNavigate();

	const items = [
		{
			label: 'Leads',
			path: '/leads',
		},
		{
			label: 'Contacts',
			path: '/contacts',
		},
		{
			label: 'Accounts',
			path: '/accounts',
		},
	];

	const path = window.location.pathname;
	const index = items.findIndex((item) => {
		return path.includes(item.path);
	});
	const defaultSelectedKeys = (index === -1) ? ['0'] : [index.toString()];
	

	const handleNavigate = (e) => {
		const path = items[e.key].path;
		navigate(path);
	}

	return (
		<>
		<Layout className="layout">
			<Header>
				<div className="logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={defaultSelectedKeys}
					onClick={handleNavigate}
					items={items.map((item, index) => {
						const key = index;
						return {
							key,
							label: item.label,
							path: item.path,
						};
					})}
				/>
			</Header>
		</Layout>
		<Outlet />
		</>
	  );
};

export default NavBar;

