import React, { Component } from 'react';
import {Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import './style.css'

class index extends Component {

    state={
        idade:[
            {
                nome:'18',
                link:'18'
            },
            {
                nome:'22',
                link:'22'
            },
            {
                nome:'37',
                link:'37'
            },
            {
                nome:'50',
                link:'50'
            },
            {
                nome:'60',
                link:'60'
            },
            {
                nome:'70',
                link:'70'
            },

        ],
        categoria:[
            {
                nome:'loira'
            },
            {
                nome:'Morena'
            },
            {
                nome:'Ruiva'
            },
            {
                nome:'Asiatica'
            },
            {
                nome:'Preta'
            },
            {
                nome:'Parda'
            },
        ],
        tipo:[
            {
                nome:'Madura'
            },
            {
                nome:'BBW'
            },
            {
                nome:'Milf'
            },
            {
                nome:'Lesbicas'
            },
            {
                nome:'Squirting'
            },
        ]
    }


    render() {
        return (
            <div className="sidebar d-none d-md-block">
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
                        {this.state.idade.map((dados,i)=>{
                            return(
                                <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
                                    <Link to={"/filtro/" + dados.link} style={{textDecoration:'none',color:'#fff'}}>
                                        <FontAwesomeIcon icon={faCircle} color="white" style={{fontSize:13,marginLeft:10, marginRight:15}}/> {dados.nome}
                                    </Link>                            
                                </div>
                            )
                        })}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="subtituloFiltro">Categoria</div>
                        {
                            this.state.categoria.map((dados,i)=>{
                                return(
                                    <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
                                        <Link to={"/filtro/" + dados.nome} style={{textDecoration:'none',color:'#fff'}}>
                                            <FontAwesomeIcon icon={faCircle} color="white" style={{fontSize:13,marginLeft:10, marginRight:15}}/> {dados.nome}
                                        </Link>                            
                                    </div>    
                                )
                            })
                        }


                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="subtituloFiltro">Tipo</div>
                        {
                            this.state.tipo.map((dados,i)=>{
                                return(
                                    <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
                                        <Link to={"/filtro/" + dados.nome} style={{textDecoration:'none',color:'#fff'}}>
                                            <FontAwesomeIcon icon={faCircle} color="white" style={{fontSize:13,marginLeft:10, marginRight:15}}/> {dados.nome}
                                        </Link>                            
                                    </div>    
                                )
                            })
                        }


                    </Col>
                </Row>

                 
            </div>
        );
    }
}

export default index;