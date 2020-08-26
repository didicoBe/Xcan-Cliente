import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Link } from "react-router-dom";
import './style.css'

class index extends Component {
    render() {
        return (
            <div>
                <Navbar style={{backgroundColor:'#69131d'}} fixed="top">
                    <Navbar.Brand href="#home" style={{color:'#fff',fontSize:25}}>Logo</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to="/login" style={{color:'#fff'}}>
                                Entrar
                                <FontAwesomeIcon icon={faUser} color="white" className={ "iconeLoginTopo"}/>                                
                            </Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>                  
            </div>
        );
    }
}

export default index;