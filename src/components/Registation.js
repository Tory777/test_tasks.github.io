import React, { Component } from 'react';
import '../sass/registration.scss';

export default class Registation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { icon_name, type, title } = this.props;

        return (
            <div className="landingPage__content__features__item">
                <span data-type={ type }></span>
                <img src={icon_name} width='200px'/>
                <div> { title }</div>
            </div>
        );
    }
}