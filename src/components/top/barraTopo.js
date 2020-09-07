import React, { Component } from 'react';
import {Row, Col, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faHeart,faMobileAlt, faChartLine,faCircleNotch, faGripLines, faThLarge, faTh } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

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
            <div className={'barratop '}>
                <Row>
                    <Col md={3}>
                        <FontAwesomeIcon icon={faStar} color="white" className={ "iconesBarraEsquerda"}/>
                        <FontAwesomeIcon icon={faHeart} color="white" className={ "iconesBarraEsquerda"}/>
                        <FontAwesomeIcon icon={faMobileAlt} color="white" className={ "iconesBarraEsquerda"}/>
                        <FontAwesomeIcon icon={faChartLine} color="white" className={ "iconesBarraEsquerda"}/>
                    </Col>
                    <Col md={4} className="d-none d-md-block">
                        <div style={{display:'flex'}}>
                            <Link to="/categoria/Garotas" className='barraCat'>
                                <FontAwesomeIcon icon={faCircleNotch} color="white" className={ "iconesBarraCategoria"}/> Garotas 
                            </Link>
                            <Link to="/categoria/Garotos" className='barraCat'>
                                <FontAwesomeIcon icon={faCircleNotch} color="white" className={ "iconesBarraCategoria"}/> Garotos 
                            </Link>
                            <Link to="/categoria/Trans" className='barraCat'>
                                <FontAwesomeIcon icon={faCircleNotch} color="white" className={ "iconesBarraCategoria"}/> Trans 
                            </Link>
                            <Link to="/categoria/Travestis" className='barraCat'>
                                <FontAwesomeIcon icon={faCircleNotch} color="white" className={ "iconesBarraCategoria"}/> Travestis 
                            </Link>
                        </div>
                        
                    </Col>
                    <Col md={5} sm={1}>
                        <div style={{float:'right',display:'flex',alignContent:'center',alignItems:'center',}}>
                            <FontAwesomeIcon icon={faGripLines} color="white" style={{display:this.state.esconde}} onClick={this.props.linha} className={ "iconeBarraViews d-none d-md-block "}/>
                            <FontAwesomeIcon icon={faThLarge} color="white" style={{display:this.state.esconde}} onClick={this.props.tres} className={ "iconeBarraViews d-none d-md-block"}/>
                            <FontAwesomeIcon icon={faTh} color="white" style={{display:this.state.esconde}} onClick={this.props.cinco} className={ "iconeBarraViews d-none d-md-block"}/>
                            <Link to="/registro"><Button className='btnRegistrar'>Registrar</Button></Link>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default BarraTopo;