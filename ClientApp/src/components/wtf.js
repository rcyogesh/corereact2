import React, { Component } from 'react';
export class wtf extends Component {



    constructor(props) {
        super(props);
        this.state = { i: 0, k: '' };
        this.emojis = [
            '🦃', '🌉', '😺', '🏫', '👳', '🏞️', '🌤️', '🌑', '🙊', '🦊', '🐼', '🐁', '🐳',
            '🍎', '🥦', '🌮', '🍝', '🥘', '🌯',
            '🍧', '🥧', '🥮', '🍥', '🛴', '🚲', '🚦', '🏎️', '✈️', '🚡', '🚤',

        ];
        this.interval = 500;
    }

    componentWillMount() {
        setTimeout(() => this.increment(this), this.interval);
        //setInterval(() => this.increment(), 2000);
    }

    increment(w) {
        if (w.state.i >= this.emojis.length) {
            w.setState({ i: 0 });
        }
        else {
            w.setState({ i: w.state.i + 1 });
        }
        setTimeout(() => w.increment(w), this.interval);
        if (this.interval > 50) {

            this.interval = this.interval * 0.9;
        }
    }

    //increment() {
    //    this.setState({ i: this.state.i + 1 });
    //}

    render() {
        return (<h1>heyyyy {this.emojis[this.state.i]}</h1>);
    }
}