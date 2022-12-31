import React from "react";
import './index.scss';
import Title from "./Title";

export default class Sass extends React.Component {

    render () {
        return (
            <div>
            <h3 className="title">Belajar Mern</h3>
                <Title/>
                <button className="btn btn-danger">Go Eduwork</button>
            </div>
        )
    }
}