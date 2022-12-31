import React from "react";
import Bar from "./Bar";
import Product from "./Product";
import styled from "styled-components";


const Content = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export default class Reusable extends React.Component {

    state = {
        value:0
    }

    handleValue = (data) => {
        this.setState({
            value: data
        });
    }

    render () {
        return (
            <Content>
                <Bar value={this.state.value} />
                <Product receiveValue={this.handleValue} />
            </Content>
        )
    }
}