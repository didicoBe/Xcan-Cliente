import React, { Component } from 'react';
import {Form,Button,Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
class Registrar extends Component {
    render() {
        return (
            <div className='loginp'>
                <div>
                    <div style={{fontSize:30,textAlign:'center',marginBottom:15}}>
                        <Link to="/" style={{color:'#fff',textDecoration:'none'}}>Logo</Link>
                    </div>
                    <div className='caixaLogin' style={{height:360}}>
                        <div style={{fontSize:25,marginBottom:15}}>Cadastro</div>
                        <Form >
                            <Form.Group controlId="formBasicEmail"  >
                                <Form.Control type="text" placeholder="Nome de usuario" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail"  >
                                <Form.Control type="email" placeholder="Seu E-mail" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" >
                                <Form.Control type="password" placeholder="senha" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Confirmo que tenho mais de 18 anos e aceito os termos" />
                            </Form.Group>
                            <Button variant="dark" type="submit" className='float-right'>
                                Registrar
                            </Button>
                            <br/>
                            
                        </Form>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Registrar;