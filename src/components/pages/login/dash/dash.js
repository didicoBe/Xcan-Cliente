import React, { Component } from 'react'
import Top from '../../../top'
import BarraTopo  from "../../../top/barraTopo";
import {Container,Card,Col, Row } from 'react-bootstrap';

export default class Dash extends Component {
    render() {
        return (
            <div>
                <Top/>
                <BarraTopo
                    linha={()=>this.setState({grid:12})}
                    tres={()=>this.setState({grid:5})}
                    cinco={()=>this.setState({grid:3})}
                />
                <Container fluid className="corpo">
                    <Row>
                        <Col>
                            <h1 style={{color:'#fff'}}>Bem Vindo Fulado</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
