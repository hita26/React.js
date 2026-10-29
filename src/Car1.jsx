
import { Component } from "react";

export class Car1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favoritecolor: props.favcol
        };
    }

    changeColor = () => {
        this.setState({
            favoritecolor: "Green"
        });
    };

    render() {
        return (
            <div>
                <h1>
                    My favourite color is {this.state.favoritecolor}
                </h1>

                <button onClick={this.changeColor}>
                    Change Color
                </button>
            </div>
        );
    }
}

