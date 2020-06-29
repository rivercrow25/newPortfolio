import React from 'react';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

const Project = (title, text1, text2, text3, text, github, link) => {
    return (
        <Card>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>
                    <ul id='fix'>
                        <li>{text1}</li>
                        <li>{text2}</li>
                        <li>{text3}</li>
                    </ul>
                </CardSubtitle>
            </CardBody>
            <CardBody>
                <CardText>{text}</CardText>
                <CardLink href={github}>Take a look at the code!</CardLink>
                <CardLink href={link}>Check out the website!</CardLink>
            </CardBody>
        </Card>
    )
}

export default Project