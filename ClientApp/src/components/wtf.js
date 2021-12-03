import React, { Component } from 'react';
export class wtf extends Component {

    
    constructor(props) {
        super(props);
        this.state = { i : 0 };
    }

    componentWillMount() {
        //setTimeout(()=> this.increment(this), 500);
        setInterval(() => this.increment(), 500);
    }

    //increment(w) {
    //    w.setState({ i:w.state.i + 1 });
    //    setTimeout(()=>w.increment(w), 500);
    //}

    increment() {
        this.setState({ i: this.state.i + 1 });
    }

    render() {
        return (<h1>who taa foo {this.state.i}</h1>);
    }
}