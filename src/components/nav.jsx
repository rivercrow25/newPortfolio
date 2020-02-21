import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = () => {
    return (
        <div>
            <Nav>
                <NavLink href="about.html">About</NavLink> <NavLink href="#">Blog</NavLink> <NavLink href="#">Resume</NavLink> <NavLink disabled href="#">Contact</NavLink>
            </Nav>
        </div>
    )
}

export default NavBar