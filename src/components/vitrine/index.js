import React, { Component } from 'react'
import {Image,Card,Col, Row } from 'react-bootstrap';

export default class index extends Component {
    render() {
        return (
            <div style={{color:'#fff',display:'block',marginTop:15}}>
                <div style={{position:'absolute',zIndex:9,top:20,left:35}}>online</div>
                <div style={{position:'absolute',zIndex:9,bottom:0}}>barra</div>
                <div style={{position:'relative'}}><Image src={this.props.video} rounded fluid /></div>
            </div>
        )
    }
}
//"https://i.gifer.com/Dmde.gif"