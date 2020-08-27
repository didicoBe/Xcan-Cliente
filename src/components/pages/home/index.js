import React, { Component } from 'react';
import Top from '../../top'
import BarraTopo  from "../../top/barraTopo";
import Sidebar from '../../sidebar'
import Vitrine from '../../vitrine'
import {Container,Card,Col, Row } from 'react-bootstrap';

import './style.css'

class index extends Component {
    state = {
        grid:3
    }


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
                    <div style={{display:'flex'}}>
                        <Sidebar/>
                        <div style={{width:'100%',marginLeft:250}}>
                            <Row>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://i.gifer.com/Dmde.gif"/>
                                </Col>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://i.gifer.com/Dmde.gif"/>
                                </Col>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://i.gifer.com/Dmde.gif"/>
                                </Col>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://i.gifer.com/Dmde.gif"/>
                                </Col>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://steamuserimages-a.akamaihd.net/ugc/98349963198956412/BFBADC9EF422B1C5EC2CE04D047F560D86EB6097/"/>
                                </Col>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://steamuserimages-a.akamaihd.net/ugc/98349963198956412/BFBADC9EF422B1C5EC2CE04D047F560D86EB6097/"/>
                                </Col>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://steamuserimages-a.akamaihd.net/ugc/98349963198956412/BFBADC9EF422B1C5EC2CE04D047F560D86EB6097/"/>
                                </Col>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://steamuserimages-a.akamaihd.net/ugc/98349963198956412/BFBADC9EF422B1C5EC2CE04D047F560D86EB6097/"/>
                                </Col>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://steamuserimages-a.akamaihd.net/ugc/393296440554970498/E2F4C0D2E382F620DC83FD2429599647C87B1E76/"/>
                                </Col>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://steamuserimages-a.akamaihd.net/ugc/393296440554970498/E2F4C0D2E382F620DC83FD2429599647C87B1E76/"/>
                                </Col>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://steamuserimages-a.akamaihd.net/ugc/393296440554970498/E2F4C0D2E382F620DC83FD2429599647C87B1E76/"/>
                                </Col>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://steamuserimages-a.akamaihd.net/ugc/393296440554970498/E2F4C0D2E382F620DC83FD2429599647C87B1E76/"/>
                                </Col>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://31.media.tumblr.com/6bc09c9076098cefeea6200bdc351c29/tumblr_my63xq0NBX1r2hz45o1_400.gif"/>
                                </Col>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://31.media.tumblr.com/6bc09c9076098cefeea6200bdc351c29/tumblr_my63xq0NBX1r2hz45o1_400.gif"/>
                                </Col>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://31.media.tumblr.com/6bc09c9076098cefeea6200bdc351c29/tumblr_my63xq0NBX1r2hz45o1_400.gif"/>
                                </Col>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://31.media.tumblr.com/6bc09c9076098cefeea6200bdc351c29/tumblr_my63xq0NBX1r2hz45o1_400.gif"/>
                                </Col>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://i.gifer.com/BucA.gif"/>
                                </Col>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://i.gifer.com/BucA.gif"/>
                                </Col>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://i.gifer.com/BucA.gif"/>
                                </Col>
                                <Col md={this.state.grid}>
                                    <Vitrine video="https://i.gifer.com/BucA.gif"/>
                                </Col>
                            
                            </Row>
                            
                        </div>
                    </div>
                    
                    
                </Container>
                
            </div>
        );
    }
}

export default index;