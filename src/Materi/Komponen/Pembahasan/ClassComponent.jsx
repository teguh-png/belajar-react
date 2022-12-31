import React from "react";

class ClassComponent extends React.Component {
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         value: 0
    //     }

    //     this.handlePlus = this.handlePlus.bind(this);
    //     this.handleMinus = this.handleMinus.bind(this);
    // }
    state = {
        value: 0
    }

    handlePlus = () => {
        this.setState({value: this.state.value +1})
    }

    handleMinus = () => {
        if (this.state.value > 0) {

            this.setState({value: this.state.value -1})
        }
    }

    render() {
        return (
            <div>
                <h1>Komponen ini dibuat dengan class component</h1>
                <h2>Hello {this.props.name} </h2>
                <button onClick={this.handleMinus}>-</button>
                <span>{' '} {this.state.value} {' '}</span>
                <button onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

export default ClassComponent;