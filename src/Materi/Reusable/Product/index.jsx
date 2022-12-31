import React from "react";
import styled from "styled-components";
import Counter from "../Counter";

const imgProduct = 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80';

const CardContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
`;

const Image = styled.img`
    width: 100%;
`;

const Heading = styled.h1`
    font-size: 18px;
`;

const Price = styled.p`
    color: grey;
    font-size: 22px;
`;

const Description = styled.p`
    font-size: small;
`;

export default class Product extends React.Component {

    handleValue = (value) => {
        this.props.receiveValue(value);
    }

    render () {
        return (
            <div>
                <CardContainer>
                    <Image src={imgProduct} alt="image" />
                    <Heading>Title card</Heading>
                    <Price>$19.99</Price>
                    <Description>Phasellus rutrum molestie elementum. Mauris porttitor dapibus neque non scelerisque.</Description>
                    <Counter receiveValue={this.handleValue}/>
                </CardContainer>
            </div>
        )
    }
}