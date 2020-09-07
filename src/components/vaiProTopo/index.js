import React, { Component, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import './style.css'

export default class Vaiprotopo extends Component {

    sobe = ()=>{
        
            window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
        
    }

    render() {
        return (
            <div className='vaiprotopo' onClick={()=>{this.sobe()}}>
                <FontAwesomeIcon icon={faChevronUp} color="white"/>
            </div>
        )
    }
}
