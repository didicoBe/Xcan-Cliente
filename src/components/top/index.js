import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,  } from '@fortawesome/free-regular-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Vaiprotopo from '../vaiProTopo'
import './style.css'

class index extends Component {
    render() {
        return (
            <div>
                
                <Vaiprotopo/>
                <Navbar style={{backgroundColor:'#69131d'}} fixed="top">
                    <div className="d-sm-block d-md-none d-lg-none d-xl-none" style={{zIndex:999}}>
                        <FontAwesomeIcon icon={faEllipsisV} color="white" style={{fontSize:23}}/> 
                    </div>
                    
                    <Navbar.Brand href="/" className="logo">Logo</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to="/login" style={{color:'#fff',display:'flex'}}>
                                <span className="d-none d-md-block">Entrar</span>
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