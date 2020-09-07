import React, { Component } from 'react'
import Top from '../../top'
import BarraTopo  from "../../top/barraTopo";
import Sidebar from '../../sidebar'
import {Container,Button,Col, Row,Carousel, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages,faFilm, faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";

import './style.css'

export default class Perfil extends Component {

    state={
        perfil:this.props.match.params.nome
    }

    vaiPrivado = ()=>{
       
        this.props.history.push("/privado/1");
    }



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
                    <Row>
                        {/* perfil */}
                        <Col md={3}>
                            <div className="avatar" style={{backgroundImage:"url('/img/perfil.jpg')"}}></div>
                            <div className="d-sm-block  d-md-none d-lg-none d-xl-none float-right">
                                <div className="NomeMobi">
                                    <div className='nomePerfil' style={{marginLeft:0}}>
                                            {this.state.perfil}
                                    </div>
                                    <Button className='btnPrivado' onClick={()=>{this.vaiPrivado()}}>Privado</Button>
                                </div>
                                <div className="NomeMobi" style={{top:100}}>
                                    <FontAwesomeIcon icon={faImages} color="white" style={{marginRight:15,fontSize:25}}/>
                                    <FontAwesomeIcon icon={faFilm} color="white" style={{marginRight:15,fontSize:25}}/>
                                    <FontAwesomeIcon icon={faStar} color="white" style={{marginRight:15,fontSize:25}}/>
                                    <FontAwesomeIcon icon={faHeart} color="white" style={{marginRight:15,fontSize:25}}/>
                                </div>
                                
                            </div>
                            <div className="d-none d-md-block">
                                <div className='nomePerfil'>
                                    {this.state.perfil}
                                </div>
                                <div className='itensPerfil'><FontAwesomeIcon icon={faImages} color="white" style={{marginRight:5}}/>Fotos</div>
                                <div className='itensPerfil'><FontAwesomeIcon icon={faFilm} color="white" style={{marginRight:5}}/>Videos</div>
                                <div className='itensPerfil'><FontAwesomeIcon icon={faStar} color="white" style={{marginRight:5}}/>Add favoritos</div>
                                <div className='itensPerfil'><FontAwesomeIcon icon={faHeart} color="white" style={{marginRight:5}}/>Like</div>
                                <Button className='btnPrivado' onClick={()=>{this.vaiPrivado()}}>Privado</Button>
                            </div>
                            
                        </Col>
                        {/* slide */}
                        <Col md={8}>
                            <Carousel >
                                <Carousel.Item  style={{maxHeight:400,alignContent:'center',alignItems:'center'}}>
                                    <img
                                        className="img-fluid"
                                        src="/img/slide.jpg"
                                        alt="First slide"
                                        
                                    />
                                </Carousel.Item>
                                <Carousel.Item  style={{maxHeight:400,alignContent:'center',alignItems:'center'}}>
                                    <img
                                        className="img-fluid"
                                        src="/img/slide.jpg"
                                        alt="First slide"
                                        
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                    
                    {/* fotos */}
                    <div className="subtituloPerfil">Fotos</div>
                    <Row className="estiloLateral" >
                        <Col md={3} sm={6}>
                            <div style={{color:'#fff',marginBottom:20}}>
                                <Image src='/img/imgBlock.jpg' fluid />
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div style={{color:'#fff',marginBottom:20}}>
                                <Image src='/img/imgBlock.jpg' fluid />
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div style={{color:'#fff',marginBottom:20}}>
                                <Image src='/img/imgBlock.jpg' fluid />
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div style={{color:'#fff',marginBottom:20}}>
                                <Image src='/img/imgBlock.jpg' fluid />
                            </div>
                        </Col>
                    </Row>
                    {/* videos */}
                    <div className="subtituloPerfil">Videos</div>
                    <Row className="estiloLateral" >
                        <Col md={3}>
                            <div style={{color:'#fff',marginBottom:20}}>
                                <Image src='/img/videoBlock.jpg' fluid />
                            </div>
                        </Col>
                        <Col md={3}>
                            <div style={{color:'#fff',marginBottom:20}}>
                                <Image src='/img/videoBlock.jpg' fluid />
                            </div>
                        </Col>
                        <Col md={3}>
                            <div style={{color:'#fff',marginBottom:20}}>
                                <Image src='/img/videoBlock.jpg' fluid />
                            </div>
                        </Col>
                        <Col md={3}>
                            <div style={{color:'#fff',marginBottom:20}}>
                                <Image src='/img/videoBlock.jpg' fluid />
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>

        )
    }
}
