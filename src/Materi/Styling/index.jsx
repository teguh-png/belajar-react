import React from "react";
import Bootstrap from "./Bootstrap";
import Inline from "./Inline";
import Module from "./Module";
import Plain from "./Plain";
import Sass from "./Sass";
import Styled from "./Styled";

export default class Styling extends React.Component {

    render () {
        return (
            <div>
                <Bootstrap/>
                <Plain/>
                <Sass/>
                <Inline/>
                <Module/>
                <Styled/>
            </div>
        )
    }
}