//NavBar.js: create the Navigation Bar used on pages after the login was successful
//pulls styles from NavBarElements.js

//react components
import React from 'react';
//in navbarelements created navbar styles
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>

		<NavLink to='/personal'>
			Personal Information
		</NavLink>
		<NavLink to='/transaction' activeStyle>
			Transaction History
		</NavLink>
		<NavLink to='/voting' activeStyle>
			Vote
		</NavLink>
		<NavLink to='/about' activeStyle>
			About Us
		</NavLink>
		<NavLink to='/contactUs' activeStyle>
			Contact Us
		</NavLink>
	
		
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/'>Logout</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;

