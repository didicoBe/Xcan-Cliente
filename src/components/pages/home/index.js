import React, { Component } from 'react';
import Top from '../../top'
import BarraTopo  from "../../top/barraTopo";
import Sidebar from '../../sidebar'

class index extends Component {
    render() {
        return (
            <div>
                <Top/>
                <BarraTopo/>
                <Sidebar/>
                Home
            </div>
        );
    }
}

export default index;