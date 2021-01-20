import React from 'react'
import classNames from 'classnames';
// import { Container } from 'react-bootstrap';
import {Container , Body, Title, Text, Image, Button} from './styles/Card'


function Card({classes, children, ...restProps }) {
    return (
        <div>
            <Container className={classNames('card', classes)} { ...restProps}>
                {children}
            </Container>
        </div>
    )
}




Card.Body = function CardBody({ classes, children, ...restProps }) {
    return (
        <Body className={classNames('card_body', classes)} { ...restProps}>
            {children}
        </Body>
    )
}




Card.Title = function CardTitle({ classes, children, ...restProps }) {
    return (
        <Title className={classNames('card_title', classes)} { ...restProps}>
            {children}
        </Title>
    )
}



Card.Text = function CardTitle({ classes, children, ...restProps }) {
    return (
        <Text className={classNames('card_text', classes)} { ...restProps}>
            {children}
        </Text>
    )
}




Card.Image = function CardImage({ src, alt, classes, ...restProps}) {
    return (
        <Image
            src={src}
            className={classNames('card_image'), classes}
            {...restProps}
            />
    )
}



Card.Button = function CardButton({ classes, children, ...restProps }) {
    return (
        <Button
            type="button"
            className={classNames('card_button', classes)}
            {...restProps}
        >
            {children}
            </Button>
    )
}


export default Card;
