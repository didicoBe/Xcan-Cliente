import React, { Component } from 'react'
import Top from '../../top'
import BarraTopo  from "../../top/barraTopo";
import Sidebar from '../../sidebar'
import {Container,Button,Col, Row,Carousel, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages,faFilm, faStar, faHeart } from '@fortawesome/free-solid-svg-icons'

import './style.css'

export default class Perfil extends Component {

    state={
        perfil:this.props.match.params.nome
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
                            <div className='nomePerfil'>
                                {this.state.perfil}
                            </div>
                            <div className='itensPerfil'><FontAwesomeIcon icon={faImages} color="white" style={{marginRight:5}}/>Fotos</div>
                            <div className='itensPerfil'><FontAwesomeIcon icon={faFilm} color="white" style={{marginRight:5}}/>Videos</div>
                            <div className='itensPerfil'><FontAwesomeIcon icon={faStar} color="white" style={{marginRight:5}}/>Add favoritos</div>
                            <div className='itensPerfil'><FontAwesomeIcon icon={faHeart} color="white" style={{marginRight:5}}/>Like</div>
                            <Button className='btnPrivado'>Privado</Button>
                        </Col>
                        {/* slide */}
                        <Col md={8}>
                            <Carousel >
                                <Carousel.Item wrap={true} style={{maxHeight:400,alignContent:'center',alignItems:'center'}}>
                                    <img
                                        className="d-block d-100"
                                        src="/img/slide.jpg"
                                        alt="First slide"
                                        
                                    />
                                </Carousel.Item>
                                <Carousel.Item wrap={true} style={{maxHeight:400,alignContent:'center',alignItems:'center'}}>
                                    <img
                                        className="d-block d-100"
                                        src="/img/slide.jpg"
                                        alt="First slide"
                                        
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                    
                    {/* fotos */}
                    
                    <div className="subtituloPerfil">Fotos</div>
                    <Row style={{marginLeft:50,marginRight:50}}>
                        <Col>
                            <div style={{color:'#fff'}}>
                                <Image src='/img/imgBlock.jpg' fluid />
                            </div>
                        </Col>
                        <Col>
                            <div style={{color:'#fff'}}>
                                <Image src='/img/imgBlock.jpg' fluid />
                            </div>
                        </Col>
                        <Col>
                            <div style={{color:'#fff'}}>
                                <Image src='/img/imgBlock.jpg' fluid />
                            </div>
                        </Col>
                        <Col>
                            <div style={{color:'#fff'}}>
                                <Image src='/img/imgBlock.jpg' fluid />
                            </div>
                        </Col>
                    </Row>
                    {/* fotos */}
                    <div className="subtituloPerfil">Videos</div>
                    <Row style={{marginLeft:50,marginRight:50}}>
                        <Col>
                            <div style={{color:'#fff'}}>
                                <Image src='/img/videoBlock.jpg' fluid />
                            </div>
                        </Col>
                        <Col>
                            <div style={{color:'#fff'}}>
                                <Image src='/img/videoBlock.jpg' fluid />
                            </div>
                        </Col>
                        <Col>
                            <div style={{color:'#fff'}}>
                                <Image src='/img/videoBlock.jpg' fluid />
                            </div>
                        </Col>
                        <Col>
                            <div style={{color:'#fff'}}>
                                <Image src='/img/videoBlock.jpg' fluid />
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>

        )
    }
}
