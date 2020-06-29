import React from 'react';
import { Jumbotron } from 'reactstrap';

const Header = () => {
    return (
        <Jumbotron>
            <img src='https://ca.slack-edge.com/T4JUEB3ME-US8LU3MRV-a9e330fe46d7-512' alt='picture of Nick Migel' />
            <h1 className="display-3">Nick Migel</h1>
            <p className="lead">Full Stack Web Developer studying at Lambda school currently learning computer science</p>
            <hr className="my-2" />
            <p>Languages: HTML, CSS, Javascript, React, Redux, Node.js, Express</p>
            <p className="lead">
                Mission: Hard worker with a passion for coding in general
            </p>
        </Jumbotron>
    )
}

export default Header