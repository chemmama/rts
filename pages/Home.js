import React from "react";
import { Container, Image,Card,Grid } from 'semantic-ui-react'
import Layout from "../components/MyLayout"
import PropTypes from 'prop-types';
import Link from "next/link" 
 

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const { mobile } = this.props
        
        const shadow =
        {
            color: 'white',
            textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
            textAlign: "center",
            fontFamily: "verdana",
            fontSize:mobile ? 22:32
        }
     
        return (
            <Layout>
                <h1 style={shadow}>Spécialité en rénovation Energetique</h1>
                <Container style={{ textAlign: 'center'}}>
                    <Grid>
                        <Grid.Row  columns={mobile?2:5}>
                            <Grid.Column style={{ paddingTop: 20 }}>
                                <Card color="red">
                                    <Image src='img/avatar/pac.png' size="tiny" centered/>
                                    <Card.Content>
                                        <Card.Header><Image src="img/ecolo/RGE.png" size='mini'/><Link href="/IndexPac"><a>PAC</a></Link></Card.Header>
                                        <Card.Description>
                                           PAC air-eau
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                      
                       
                            <Grid.Column style={{ paddingTop: 20 }}>
                            <Card color="orange">
                                <Image src='img/avatar/maison_exterieur.png' size="tiny" centered />
                            <Card.Content>
                                        <Card.Header><Image src="img/ecolo/RGE.png" size='mini' /><Link href="/Ite"><a>ITE</a></Link></Card.Header>
                                <Card.Description>
                                    Isolation Exterieur
                                    </Card.Description>
                            </Card.Content>
                            </Card>
                        </Grid.Column>

                            <Grid.Column style={{ paddingTop: 20 }}>
                                <Card color="yellow">
                                    <Image src='img/avatar/maison_exterieur.png' size="tiny" centered />
                                    <Card.Content>
                                        <Card.Header><Image src="img/ecolo/RGE.png" size='mini' /><Link href="/Itt"><a>ITT</a></Link></Card.Header>
                                        <Card.Description>
                                           Isolation Interieur
                                    </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>

                            <Grid.Column style={{ paddingTop: 20 }}>
                                <Card color="olive">
                                    <Image src='img/avatar/climatisation.png' size="tiny" centered />
                                    <Card.Content>
                                        <Card.Header><Image src="img/ecolo/RGE.png" size='mini' /><Link href="/Climatisation"><a>Climatisation</a></Link></Card.Header>
                                        <Card.Description>
                                            Pac air-air
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>

                            <Grid.Column style={{ paddingTop: 20 }}>
                                <Card color="red">
                                    <Image src='img/avatar/cellule-photovoltaique.png' size="tiny" centered />
                                    <Card.Content>
                                        <Card.Header><Image src="img/ecolo/RGE.png" size='mini' /><Link href="/Photovoltaique"><a>photovoltaique</a></Link></Card.Header>
                                        <Card.Description>
                                            Photovoltaique
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>

                      
                    
                      
                            <Grid.Column style={{paddingTop:20}}>
                                <Card color="olive">
                                    <Image src='img/avatar/ballon-photovoltaique.png' size="tiny" centered />
                                    <Card.Content>
                                        <Card.Header><Image src="img/ecolo/RGE.png" size='mini' /><Link href="/Ballon"><a>Ballon Solaire</a></Link></Card.Header>
                                        <Card.Description>
                                            Ballon Solaire
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>

                            <Grid.Column style={{paddingTop:20}}>
                                <Card color="green">
                                    <Image src='img/avatar/electricite.png' size="tiny" centered/>
                                    <Card.Content>
                                        <Card.Header style={{ color: 'green' }}><Link href="/Electricite"><a>Electricité</a></Link></Card.Header>
                                        <Card.Description>
                                            Renovation-consuel
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>


                            <Grid.Column style={{ paddingTop: 20 }}>
                                <Card color="teal">
                                    <Image src='img/avatar/plomberie.png' size="tiny" centered />
                                    <Card.Content>
                                        <Card.Header><Link href="/Plomberie"><a>Plomberie</a></Link></Card.Header>
                                        <Card.Description>
                                           Douche-salle de bain
                                    </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>

                            <Grid.Column style={{paddingTop:20}}>
                                <Card color="blue">
                                    <Image src='img/avatar/revetement_sol.png' size="tiny" centered />
                                    <Card.Content>
                                        <Card.Header><Link href="/Revetement"><a>Revetement Sol</a></Link></Card.Header>
                                        <Card.Description>
                                           Carrelage-Parquet
                                    </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>

                            <Grid.Column style={{ paddingTop: 20 }}>
                                <Card color="blue">
                                    <Image src='img/avatar/cloison.png' size="tiny" centered />
                                    <Card.Content>
                                        <Card.Header><Link href="/Cloison"><a>Cloison bureau</a></Link></Card.Header>
                                        <Card.Description>
                                            Porte-Vitrée-Cloison
                                    </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Layout>
        )
    }
}
 