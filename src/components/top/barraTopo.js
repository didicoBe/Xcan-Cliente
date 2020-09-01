import React, { Component } from 'react';
import {Row, Col, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faHeart,faMobileAlt, faChartLine,faCircleNotch, faGripLines, faThLarge, faTh } from '@fortawesome/free-solid-svg-icons'

import './style.css'

class BarraTopo extends Component {
    state={
        esconde: '',
        perfil:''
    }

    componentDidMount(){
        if(this.props.esconde == 'sim')
        this.setState({
            esconde:'none',
            
        })
    }
    render() {
        return (
            <div className={'barratop'}>
                <Row>
                    <Col md={3}>
                        <FontAwesomeIcon icon={faStar} color="white" className={ "iconesBarraEsquerda"}/>
                        <FontAwesomeIcon icon={faHeart} color="white" className={ "iconesBarraEsquerda"}/>
                        <FontAwesomeIcon icon={faMobileAlt} color="white" className={ "iconesBarraEsquerda"}/>
                        <FontAwesomeIcon icon={faChartLine} color="white" className={ "iconesBarraEsquerda"}/>
                    </Col>
                    <Col md={4}>
                        <div style={{display:'flex'}}>
                            <div className='barraCat'>
                                <FontAwesomeIcon icon={faCircleNotch} color="white" className={ "iconesBarraCategoria"}/> Garotas 
                            </div>
                            <div className='barraCat'>
                                <FontAwesomeIcon icon={faCircleNotch} color="white" className={ "iconesBarraCategoria"}/> Garotos 
                            </div>
                            <div className='barraCat'>
                                <FontAwesomeIcon icon={faCircleNotch} color="white" className={ "iconesBarraCategoria"}/> Trans 
                            </div>
                            <div className='barraCat'>
                                <FontAwesomeIcon icon={faCircleNotch} color="white" className={ "iconesBarraCategoria"}/> Travestis 
                            </div>
                        </div>
                        
                    </Col>
                    <Col md={5}>
                        <div style={{float:'right',display:'flex',alignContent:'center',alignItems:'center',}}>
                            <FontAwesomeIcon icon={faGripLines} color="white" style={{display:this.state.esconde}} onClick={this.props.linha} className={ "iconeBarraViews"}/>
                            <FontAwesomeIcon icon={faThLarge} color="white" style={{display:this.state.esconde}} onClick={this.props.tres} className={ "iconeBarraViews"}/>
                            <FontAwesomeIcon icon={faTh} color="white" style={{display:this.state.esconde}} onClick={this.props.cinco} className={ "iconeBarraViews"}/>
                            <Button className='btnRegistrar'>Registrar</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default BarraTopo;