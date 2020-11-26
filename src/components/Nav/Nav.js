import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar, Bars, NavMenu } from '../Styled-Components/StyledComponents';

function Nav() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeBurger = () => setClick(false);

	return (
		<>
			<Navbar>
				<NavLink to='/'>
					<img
						src='home-logo.png'
						alt='logo'
						className='home-logo'
						onClick={closeBurger}
					/>
				</NavLink>
				<Bars onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
				</Bars>
				<NavMenu className={click ? 'nav-menu active' : 'nav-menu'}>
					<NavLink
						to='/location'
						activeStyle
						onClick={closeBurger}
						className='nav-link'>
						<span>Location</span>
					</NavLink>
					<NavLink
						to='/breweries'
						activeStyle
						onClick={closeBurger}
						className='nav-link'>
						<span>Breweries</span>
					</NavLink>
					<NavLink
						to='/beer'
						activeStyle
						onClick={closeBurger}
						className='nav-link'>
						<span>Beer</span>
					</NavLink>
					<NavLink
						to='/form'
						activeStyle
						onClick={closeBurger}
						className='nav-link'>
						<span>Form</span>
					</NavLink>
					<NavLink
						to='/about'
						activeStyle
						onClick={closeBurger}
						className='nav-link'>
						<span>About</span>
					</NavLink>
				</NavMenu>
			</Navbar>
		</>
	);
}
export default Nav;

const NavLink = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	&.active {
		color: #15cdfc;
	}
`;