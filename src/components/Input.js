import React, { Component } from 'react';
import '../sass/record.scss';

export default class Input extends Component {
    constructor(props) {
        super(props);
    }

    inputChange(event) {
        let el = event.target;

        this.props.dataChange(el.name, el.value);
    }

    render() {
        const {name, value, placeholder } = this.props;

        return (
            <input
                name={ name }
                type="text"
                placeholder={ placeholder }
                value={ value }
                onChange={this.inputChange.bind(this)}
            />
        );
    }
}