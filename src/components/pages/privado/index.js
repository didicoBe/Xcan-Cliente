import React, { Component } from 'react'
import Top from '../../top'
import BarraTopo  from "../../top/barraTopo";
import {Container,Button,Col, Row,Carousel, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopCircle } from '@fortawesome/free-regular-svg-icons'
import { faWallet,faGift,faDonate } from '@fortawesome/free-solid-svg-icons'
import Chatprivado from '../../chatPrivado'

import './style.css'

export default class Privado extends Component {
    render() {
        return (
            <div>
                <Top/>
                <BarraTopo
                    linha={()=>this.setState({grid:12})}
                    tres={()=>this.setState({grid:5})}
                    cinco={()=>this.setState({grid:3})}
                    esconde={'sim'}
                />
                
                <Container fluid className="corpo">
                    <div className="bg">
                        <Image src={'/img/perfil.jpg'} alt=""/>
                    </div>
                    <div className="barraMedia">
                        <div className="btnsMedia">
                            <FontAwesomeIcon icon={faStopCircle} color="white" style={{marginRight:15,fontSize:35,cursor:'pointer'}}/>
                            <div className="btnsMedia d-none d-md-block">
                                <FontAwesomeIcon icon={faWallet} color="#ffe400" style={{marginLeft:60,marginRight:25,fontSize:35,cursor:'pointer'}}/>
                                <FontAwesomeIcon icon={faGift} color="#ae2435" style={{marginRight:25,fontSize:35,cursor:'pointer'}}/>
                                <FontAwesomeIcon icon={faDonate} color="#ffe400" style={{marginRight:25,fontSize:35,cursor:'pointer'}}/>
                                <div className="comprarCredito">Comprar Crédito</div>
                            </div>
                        </div>
                        
                    </div>
                    <Chatprivado/>
                </Container>
            </div>
        )
    }
}
