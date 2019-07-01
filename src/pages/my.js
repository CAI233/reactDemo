
/*
   Message 主页
*/
import React, { Component } from 'react';
 
class my extends Component {
    constructor (props) {
        super(props)
        console.log(props)
    }
 
   render() {
       return (
            <p>Message{this.props.match.params.id}</p>
       );
   }
}
 
export default my
