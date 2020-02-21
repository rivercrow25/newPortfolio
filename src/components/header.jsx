import React from 'react';
import { Jumbotron } from 'reactstrap';

const Header = () => {
    return (
        <Jumbotron>
            <img src='https://ca.slack-edge.com/T4JUEB3ME-US8LU3MRV-a9e330fe46d7-512' alt='picture of Nick Migel' />
            <h1 className="display-3">Nick Migel</h1>
            <p className="lead">Web Dev with a bad hobby of playing videos games</p>
            <hr className="my-2" />
            <p>Languages: Html, Css, Javascript</p>
            <p className="lead">
                Mission: Here to chew gum and learn to code and I'm all out of gum
            </p>
        </Jumbotron>
    )
}

export default Header