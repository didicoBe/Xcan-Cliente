import React, { Component } from 'react';
import {Form,Button,Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './style.css'
class Esqueci extends Component {
    render() {
        return (
            <div className='loginp'>
                <div>
                    <div style={{fontSize:30,textAlign:'center',marginBottom:15}}>
                        <Link to="/" style={{color:'#fff',textDecoration:'none'}}>Logo</Link>
                    </div>
                    <div className='caixaLogin' style={{height:250}}>
                        <div style={{fontSize:25,marginBottom:15}}>Esqueci minha senha</div>
                        <div style={{fontSize:12,marginBottom:10}}>Coloque seu e-mail para enviarmos um link para recuperação de senha.</div>
                        <Form >
                            <Form.Group controlId="formBasicEmail"  >
                                <Form.Control type="email" placeholder="Usuario" />
                            </Form.Group>
                            <Button variant="dark" type="submit" className='float-right'>
                                enviar
                            </Button>
                        </Form>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Esqueci;