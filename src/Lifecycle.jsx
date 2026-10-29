import { Component } from "react";

export class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        console.log("1. constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("2. getDerivedStateFromProps");
        return null;
    }

    render() {
        console.log("3. render");

        return (
            <div>
                <h1>Count: {this.state.count}</h1>

                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click Here
                </button>
            </div>
        );
    }

    componentDidMount() {
        console.log("4. componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("5. shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("6. getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("7. componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("8. componentWillUnmount");
    }
}
