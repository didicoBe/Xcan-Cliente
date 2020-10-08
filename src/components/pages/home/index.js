import React, { Component } from 'react';
import Top from '../../top'
import BarraTopo  from "../../top/barraTopo";
import Sidebar from '../../sidebar'
import Vitrine from '../../vitrine'
import {Container,Card,Col, Row } from 'react-bootstrap';

import './style.css'

class index extends Component {
    state = {
        grid:3,
        dados:[
            {
                gifVideo:"https://i.gifer.com/Dmde.gif",
                link:'garota1',
                nome:'Garota',
                atributos:'loira,madura,anal',
                id:'5'
            },
            {
                gifVideo:"https://i.gifer.com/Dmde.gif",
                link:'garota1',
                nome:'Garota1',
                atributos:'loira,madura,anal',
                id:'5'
                
            },
            {
                gifVideo:"https://i.gifer.com/Dmde.gif",
                link:'garota1',
                nome:'Garota2',
                atributos:'loira,madura,anal',
                id:'5'
                
            },
            {
                gifVideo:"https://i.gifer.com/Dmde.gif",
                link:'garota1',
                nome:'Garota3',
                atributos:'loira,madura,anal',
                id:'5'
                
            },
            {
                gifVideo:"https://steamuserimages-a.akamaihd.net/ugc/98349963198956412/BFBADC9EF422B1C5EC2CE04D047F560D86EB6097/",
                link:'garota2',
                nome:'Garota4',
                atributos:'loira,madura,anal',
                id:'5'
                
            },
            {
                gifVideo:"https://steamuserimages-a.akamaihd.net/ugc/98349963198956412/BFBADC9EF422B1C5EC2CE04D047F560D86EB6097/",
                link:'garota2',
                nome:'Garota5',
                atributos:'loira,madura,anal',
                id:'5'
                
            },
            {
                gifVideo:"https://steamuserimages-a.akamaihd.net/ugc/98349963198956412/BFBADC9EF422B1C5EC2CE04D047F560D86EB6097/",
                link:'garota2',
                nome:'Garota6',
                atributos:'loira,madura,anal',
                id:'5'
                
            },
            {
                gifVideo:"https://steamuserimages-a.akamaihd.net/ugc/98349963198956412/BFBADC9EF422B1C5EC2CE04D047F560D86EB6097/",
                link:'garota2',
                nome:'Garota7',
                atributos:'loira,vibrador,anal',
                id:'5'
                
            },
            {
                gifVideo:"https://steamuserimages-a.akamaihd.net/ugc/393296440554970498/E2F4C0D2E382F620DC83FD2429599647C87B1E76/",
                link:'garota3',
                nome:'Garota8',
                atributos:'loira,madura,anal',
                id:'5'
                
            },
            {
                gifVideo:"https://steamuserimages-a.akamaihd.net/ugc/393296440554970498/E2F4C0D2E382F620DC83FD2429599647C87B1E76/",
                link:'garota3',
                nome:'Garota9',
                atributos:'loira,madura,anal',
                id:'5'
                
            },
            {
                gifVideo:"https://steamuserimages-a.akamaihd.net/ugc/393296440554970498/E2F4C0D2E382F620DC83FD2429599647C87B1E76/",
                link:'garota3',
                nome:'Garota',
                atributos:'loira,madura,anal',
                id:'5'
                
            },
            {
                gifVideo:"https://steamuserimages-a.akamaihd.net/ugc/393296440554970498/E2F4C0D2E382F620DC83FD2429599647C87B1E76/",
                link:'garota3',
                nome:'Garota10',
                atributos:'loira,madura,anal',
                id:'5'
                
            },
            {
                gifVideo:"https://31.media.tumblr.com/6bc09c9076098cefeea6200bdc351c29/tumblr_my63xq0NBX1r2hz45o1_400.gif",
                link:'garota4',
                nome:'Garota11',
                atributos:'loira,madura,anal',
                id:'5'
                
            },
            {
                gifVideo:"https://31.media.tumblr.com/6bc09c9076098cefeea6200bdc351c29/tumblr_my63xq0NBX1r2hz45o1_400.gif",
                link:'garota4',
                nome:'Garota12',
                atributos:'loira,madura,anal',
                id:'5'
                
            },
            {
                gifVideo:"https://31.media.tumblr.com/6bc09c9076098cefeea6200bdc351c29/tumblr_my63xq0NBX1r2hz45o1_400.gif",
                link:'garota4',
                nome:'Garota13',
                atributos:'loira,madura,anal',
                id:'5'
                
            },
            {
                gifVideo:"https://31.media.tumblr.com/6bc09c9076098cefeea6200bdc351c29/tumblr_my63xq0NBX1r2hz45o1_400.gif",
                link:'garota4',
                nome:'Garota14',
                atributos:'loira,madura,anal',
                id:'5'
                
            },
            {
                gifVideo:"https://i.gifer.com/BucA.gif",
                link:'garota5',
                nome:'Garota15',
                atributos:'loira,madura,anal',
                id:'5'
                
            },
            {
                gifVideo:"https://i.gifer.com/BucA.gif",
                link:'garota5',
                nome:'Garota16',
                atributos:'loira,madura,anal',
                id:'5'
                
            },
            {
                gifVideo:"https://i.gifer.com/BucA.gif",
                link:'garota5',
                nome:'Garota17',
                atributos:'loira,madura,anal',
                id:'5'
                
            },
            {
                gifVideo:"https://i.gifer.com/BucA.gif",
                link:'garota5',
                nome:'Garota18',
                atributos:'loira,madura,anal',
                id:'5'
                
            },

        ]
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
                        <div className="espacoLateral">
                            <Row>
                                {
                                    this.state.dados.map((dados,i)=>{
                                        return(
                                                <Col md={this.state.grid}>
                                                    <Vitrine 
                                                        id={dados.id}
                                                        video={dados.gifVideo}
                                                        link={dados.link}
                                                        nome={dados.nome}
                                                        atributos={dados.atributos}
                                                        history= {this.props.history}
                                                    />
                                                </Col>
                                        )
                                    })
                                }
                            </Row>
                            
                        </div>
                    </div>
                    
                    
                </Container>
            </div>
        );
    }
}

export default index;