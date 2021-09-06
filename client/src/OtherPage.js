import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class OtherPage extends Component {
    render() {
        return (
            <div>
        
            Here are some tips on how the calculator works
            <Link to="/">Go back home </Link>
        
            </div>
        )
    }
}
