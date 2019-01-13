import React, { Component } from 'react';
import '../sass/record.scss';

export default class Record extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        this.props.trashRecord(this.props.numberItem);
    }

    render() {
        const { date, name, description } = this.props;

        return (
            <div className="record list-group-item d-flex justify-content-between align-items-center">
                <span className="record__date">
                    { date }
                </span>
                <span className="record__name">
                    { name }
                </span>
                <span className="record__description">
                    { description }
                </span>
                <div className="badge badge-primary badge-pill"
                     onClick={this.handleClick.bind(this)}>
                    Done
                </div>

            </div>
        );
    }
}