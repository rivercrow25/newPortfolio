import React, { useState } from 'react'
import { Nav, NavLink, Tooltip } from 'reactstrap';

const NavBar = () => {
    const [tooltipOpen1, setTooltipOpen1] = useState(false);
    const [tooltipOpen2, setTooltipOpen2] = useState(false);

    const toggle = () => setTooltipOpen1(!tooltipOpen1);
    const toggle1 = () => setTooltipOpen2(!tooltipOpen2);

    return (
        <div>
            <Nav>
                <NavLink href="about.html" id='about'>About</NavLink> <NavLink href="#">Blog</NavLink> <NavLink href="#">Resume</NavLink> <NavLink href="#" id='contact'>Contact</NavLink>
                <Tooltip placement='bottom' isOpen={tooltipOpen1} target='about' toggle={toggle}>
                    An aspiring game/web developer<br /> studying at lamda school to try and<br /> change his life for the better
                </Tooltip>
                <Tooltip id='contactstyle' placement='bottom' isOpen={tooltipOpen2} target='contact' toggle={toggle1}>
                    <h4 >Contact</h4>
                    <slack>Reach me on slack: nick migel<br /></slack>
                    <email>Email me: nickmigel2@gmail.com</email>
                </Tooltip>
            </Nav>
        </div>
    )
}

export default NavBar

