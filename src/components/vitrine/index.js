import React, { Component } from 'react'
import {Image,Card,Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faStar,faDotCircle } from '@fortawesome/free-solid-svg-icons'
import  { Redirect } from 'react-router-dom'


export default class index extends Component {



    vai = (link)=>{
        this.props.history.push('/perfil/'+link)

    }

    componentDidMount(){
        const id = this.props.id
    }


    render() {
        return (
            <div style={{color:'#fff',display:'block',marginTop:15,position:'relative',maxWidth:500}}>
                <div style={{position:'absolute',zIndex:9,top:10,left:10}}>
                    <FontAwesomeIcon icon={faDotCircle} color="#00f200" className={ ""}/>  online
                </div>
                <div style={{position:'absolute',zIndex:9,bottom:0,width:'100%'}}>
                    <div style={{backgroundColor:'#1d1c1cbd',padding:15,display:'flex',justifyContent:'space-between'}}>
                        <div onClick={()=>{this.vai(this.props.link)}} style={{cursor:'pointer'}}>{this.props.nome}</div>
                        <div style={{display:'none'}}>{this.props.atributos}</div>
                        <div>
                            <FontAwesomeIcon icon={faHeart} color="white" className={ "iconeLoginTopo"} style={{cursor:'pointer'}}/>   
                            <FontAwesomeIcon icon={faStar} color="white" className={ "iconeLoginTopo"} style={{cursor:'pointer'}}/> 
                        </div>
                    </div>
                </div>
                <div style={{}}><Image src={this.props.video} rounded fluid /></div>
            </div>
        )
    }
}
//"https://i.gifer.com/Dmde.gif"