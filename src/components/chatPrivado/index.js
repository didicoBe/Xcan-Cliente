import React, { Component } from 'react'
import {Form,Button,Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons'
import './style.css'

export default class Chatprivado extends Component {
    render() {
        return (
            <div className="chat">
                <div className="boxConversa">a</div>
                <div className="enviar">
                    <Row>
                        <Col md={8}>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows="2" placeholder="enviar msg" />
                            </Form.Group>
                        </Col>
                        <Col md={4} className="botoesenviar">
                            <FontAwesomeIcon icon={faMicrophoneAlt} color="black" style={{marginRight:15,fontSize:20,cursor:'pointer'}}/>
                            <Button variant="dark" clas>
                                Enviar
                            </Button>
                        </Col>
                    </Row>
                   
                    
                </div>
                
            </div>
        )
    }
}
