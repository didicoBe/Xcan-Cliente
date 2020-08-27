import React, { Component } from 'react';
import {Form,Button,Col, Row } from 'react-bootstrap';
import './style.css'
class index extends Component {
    render() {
        return (
            <div className='loginp'>
                <div>
                    <div style={{fontSize:30,textAlign:'center',marginBottom:15}}>Logo</div>
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
                                <div>Criar conta</div>
                                <div>Esqueci minha senha</div>
                            </div>
                        </Form>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default index;