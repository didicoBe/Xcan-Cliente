import React, { Component } from 'react';
import {Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import './style.css'

class index extends Component {
    render() {
        return (
            <div className="sidebar">
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Pesquisar"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            style={{backgroundColor:'#282828',border:0, borderRadius:'10px 0px 0px 10px', boxShadow:'inset 3px 2px 4px black'}}
                            />
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2" style={{backgroundColor:'#282828', border:0,borderRadius:'0px 10px 10px 0px',boxShadow:'inset -3px 2px 4px black'}}>
                                    <FontAwesomeIcon icon={faSearch} color="white" style={{fontSize:20}}/>
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="tituloFiltro">Filtros</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="subtituloFiltro">Idade</div>
                        <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
                            <Link to="#" style={{textDecoration:'none',color:'#fff'}}>
                                <FontAwesomeIcon icon={faCircle} color="white" style={{fontSize:13,marginLeft:10, marginRight:15}}/> 18
                            </Link>                            
                        </div>
                        <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
                            <Link to="#" style={{textDecoration:'none',color:'#fff'}}>
                                <FontAwesomeIcon icon={faCircle} color="white" style={{fontSize:13,marginLeft:10, marginRight:15}}/> 18
                            </Link>                            
                        </div>
                        <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
                            <Link to="#" style={{textDecoration:'none',color:'#fff'}}>
                                <FontAwesomeIcon icon={faCircle} color="white" style={{fontSize:13,marginLeft:10, marginRight:15}}/> 18
                            </Link>                            
                        </div>
                        <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
                            <Link to="#" style={{textDecoration:'none',color:'#fff'}}>
                                <FontAwesomeIcon icon={faCircle} color="white" style={{fontSize:13,marginLeft:10, marginRight:15}}/> 18
                            </Link>                            
                        </div>
                        <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
                            <Link to="#" style={{textDecoration:'none',color:'#fff'}}>
                                <FontAwesomeIcon icon={faCircle} color="white" style={{fontSize:13,marginLeft:10, marginRight:15}}/> 18
                            </Link>                            
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="subtituloFiltro">Categoria</div>
                        <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
                            <Link to="#" style={{textDecoration:'none',color:'#fff'}}>
                                <FontAwesomeIcon icon={faCircle} color="white" style={{fontSize:13,marginLeft:10, marginRight:15}}/> Loren ipsum
                            </Link>                            
                        </div>
                        <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
                            <Link to="#" style={{textDecoration:'none',color:'#fff'}}>
                                <FontAwesomeIcon icon={faCircle} color="white" style={{fontSize:13,marginLeft:10, marginRight:15}}/> Loren ipsum
                            </Link>                            
                        </div>
                        <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
                            <Link to="#" style={{textDecoration:'none',color:'#fff'}}>
                                <FontAwesomeIcon icon={faCircle} color="white" style={{fontSize:13,marginLeft:10, marginRight:15}}/> Loren ipsum
                            </Link>                            
                        </div>
                        <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
                            <Link to="#" style={{textDecoration:'none',color:'#fff'}}>
                                <FontAwesomeIcon icon={faCircle} color="white" style={{fontSize:13,marginLeft:10, marginRight:15}}/> Loren ipsum
                            </Link>                            
                        </div>
                        <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
                            <Link to="#" style={{textDecoration:'none',color:'#fff'}}>
                                <FontAwesomeIcon icon={faCircle} color="white" style={{fontSize:13,marginLeft:10, marginRight:15}}/> Loren ipsum
                            </Link>                            
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="subtituloFiltro">Tipo</div>
                        <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
                            <Link to="#" style={{textDecoration:'none',color:'#fff'}}>
                                <FontAwesomeIcon icon={faCircle} color="white" style={{fontSize:13,marginLeft:10, marginRight:15}}/> Loren ipsum
                            </Link>                            
                        </div>
                        <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
                            <Link to="#" style={{textDecoration:'none',color:'#fff'}}>
                                <FontAwesomeIcon icon={faCircle} color="white" style={{fontSize:13,marginLeft:10, marginRight:15}}/> Loren ipsum
                            </Link>                            
                        </div>
                        <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
                            <Link to="#" style={{textDecoration:'none',color:'#fff'}}>
                                <FontAwesomeIcon icon={faCircle} color="white" style={{fontSize:13,marginLeft:10, marginRight:15}}/> Loren ipsum
                            </Link>                            
                        </div>
                        <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
                            <Link to="#" style={{textDecoration:'none',color:'#fff'}}>
                                <FontAwesomeIcon icon={faCircle} color="white" style={{fontSize:13,marginLeft:10, marginRight:15}}/> Loren ipsum
                            </Link>                            
                        </div>
                        <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
                            <Link to="#" style={{textDecoration:'none',color:'#fff'}}>
                                <FontAwesomeIcon icon={faCircle} color="white" style={{fontSize:13,marginLeft:10, marginRight:15}}/> Loren ipsum
                            </Link>                            
                        </div>

                    </Col>
                </Row>

                 
            </div>
        );
    }
}

export default index;