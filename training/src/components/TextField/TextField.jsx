import React, { Component } from 'react';

class TextField extends Component {
    
    render() {
        const { value, disabled, error } = this.props;
            
        return(
            <input type="text" defaultValue= {value} disabled= {disabled} error= {error} />
        )
    }
}

export default TextField;