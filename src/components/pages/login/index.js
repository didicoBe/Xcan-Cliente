import React, { Component } from 'react';
import {Form,Button,Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './style.css'
class index extends Component {
    render() {
        return (
            <div className='loginp'>
                <div>
                    <div style={{fontSize:30,textAlign:'center',marginBottom:15}}>
                        <Link to="/" style={{color:'#fff',textDecoration:'none'}}>Logo</Link>
                    </div>
                    <div className='caixaLogin'>
                        <div style={{fontSize:25,marginBottom:15}}>Login</div>
                        <Form >
                            <Form.Group controlId="formBasicEmail"  >
                                <Form.Control type="email" placeholder="Usuario" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" >
                                <Form.Control type="password" placeholder="senha" />
                            </Form.Group>
                            <Button variant="dark" type="submit" className='float-right'>
                                Entrar
                            </Button>
                            <br/>
                            <div className='criar'>
                                <Link to="/registro" style={{color:'#fff'}}>Criar conta</Link>
                                <Link to="/esqueci" style={{color:'#fff'}}>Esqueci minha senha</Link>
                            </div>
                        </Form>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default index;