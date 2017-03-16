import React, { Component } from 'react';

class Title extends Component {
    render() {
        /*console.log(this.props,'--------------')*/
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.props.pageTitle}</h1>
            </div>
        );
    }
}

export default Title;
