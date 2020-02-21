import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Section = (title, text, btn, link) => {
    return (
        <Card body className="text-center">
            <CardTitle>{title}</CardTitle>
            <CardText>{text}</CardText>
            <a href={link}>{btn}</a>
        </Card>
    )
}

export default Section