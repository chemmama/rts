import React from "react";
import { Container, Image,Card,Grid,Button} from 'semantic-ui-react'
import Layout from "../components/MyLayout"
import PropTypes from 'prop-types';
import Link from "next/link" 
import { Animated } from "react-animated-css";


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
                fontSize:mobile ? 22:32,
                paddingTop:20
            }
        
        return (
            <Layout>
                 <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={5000} animationOutDuration={1000} isVisible={true}>
                    <h1 style={shadow}>Spécialité en rénovation Energetique</h1> 
                    <Container  style={{ textAlign: 'center'}}>
                    <Grid>
                        <Grid.Row  columns={mobile?2:5}>
                            <Grid.Column style={{ paddingTop: 20 }}>
                                <Card color="red">
                                    <Image src='img/avatar/pac.png' size="tiny" centered/>
                                    <Card.Content>
                                        <Card.Header>
                                            <Image src="img/ecolo/RGE.png" size='mini'/>
                                        </Card.Header>
                                        <Card.Description>
                                                <Link href="/Pac" ><a style={{ color: "green", fontWeight: "bold" }}>PAC air-eau</a></Link>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                       
                            <Grid.Column style={{ paddingTop: 20 }}>
                            <Card color="orange">
                                <Image src='img/avatar/maison_exterieur.png' size="tiny" centered />
                                    <Card.Content>
                                        <Card.Header>
                                            <Image src="img/ecolo/RGE.png" size='mini' />
                                        </Card.Header>
                                        <Card.Description>
                                                <Link href="/Ite"><a style={{ color: "green",fontWeight:"bold" }}>Isolation Exterieur</a></Link>
                                        </Card.Description>
                                    </Card.Content>
                            </Card>
                        </Grid.Column>

                            <Grid.Column style={{ paddingTop: 20 }}>
                                <Card color="yellow">
                                    <Image src='img/avatar/maison_exterieur.png' size="tiny" centered />
                                        <Card.Content>
                                            <Card.Header>
                                                <Image src="img/ecolo/RGE.png" size='mini' />
                                            </Card.Header>
                                            <Card.Description>
                                                <Link href="/Iti"><a style={{ color: "green", fontWeight: "bold" }}>Isolation Interieur</a></Link>
                                            </Card.Description>
                                        </Card.Content>
                                </Card>
                            </Grid.Column>

                            <Grid.Column style={{ paddingTop: 20 }}>
                                <Card color="olive">
                                    <Image src='img/avatar/climatisation.png' size="tiny" centered />
                                        <Card.Content>
                                            <Card.Header>
                                                <Image src="img/ecolo/RGE.png" size='mini' />
                                            </Card.Header>
                                            <Card.Description>
                                                <Link href="/AirAir"><a style={{ color: "green", fontWeight: "bold" }}>Climatisation</a></Link>
                                            </Card.Description>
                                        </Card.Content>
                                </Card>
                            </Grid.Column>

                            <Grid.Column style={{ paddingTop: 20 }}>
                                <Card color="red">
                                    <Image src='img/avatar/cellule-photovoltaique.png' size="tiny" centered />
                                        <Card.Content>
                                            <Card.Header>
                                                <Image src="img/ecolo/RGE.png" size='mini' />
                                            </Card.Header>
                                            <Card.Description>
                                                <Link href="/Photovoltaique"><a style={{ color: "green", fontWeight: "bold" }}>photovoltaique</a></Link>
                                            </Card.Description>
                                        </Card.Content>
                                </Card>
                            </Grid.Column>

                      
                    
                      
                            <Grid.Column style={{paddingTop:20}}>
                                <Card color="olive">
                                    <Image src='img/avatar/ballon-photovoltaique.png' size="tiny" centered />
                                        <Card.Content>
                                            <Card.Header>
                                                <Image src="img/ecolo/RGE.png" size='mini' />
                                            </Card.Header>
                                            <Card.Description>
                                                <Link href="/BallonSolaire"><a style={{ color: "green", fontWeight: "bold" }}>Ballon Solaire</a></Link>
                                            </Card.Description>
                                        </Card.Content>
                                </Card>
                            </Grid.Column>

                            <Grid.Column style={{paddingTop:20}}>
                                <Card color="green">
                                    <Image src='img/avatar/electricite.png' size="tiny" centered/>
                                        <Card.Content>
                                            <Card.Header>
                                                <Image src="img/ecolo/RGE.png" size='mini' />
                                            </Card.Header>
                                            <Card.Description>
                                                <Link href="/Electricite"><a style={{ color: "green", fontWeight: "bold" }}>Electricité </a></Link>
                                            </Card.Description>
                                        </Card.Content>
                                </Card>
                            </Grid.Column>


                            <Grid.Column style={{ paddingTop: 20 }}>
                                <Card color="teal">
                                    <Image src='img/avatar/plomberie.png' size="tiny" centered />
                                    <Card.Content>
                                        <Card.Header>
                                            <Image src="img/ecolo/RGE.png" size='mini' />
                                        </Card.Header>
                                        <Card.Description>
                                                <Link href="/Plomberie"><a style={{ color: "green", fontWeight: "bold" }}>Plomberie</a></Link> 
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>

                            <Grid.Column style={{paddingTop:20}}>
                                <Card color="blue">
                                    <Image src='img/avatar/revetement_sol.png' size="tiny" centered />
                                    <Card.Content>
                                        <Card.Header>
                                           <br/>  
                                        </Card.Header>
                                        <Card.Description>
                                                <Link href="/Revetement"><a style={{ color: "green", fontWeight: "bold" }}>Revetement Sol</a></Link>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>

                            <Grid.Column style={{ paddingTop: 20 }}>
                                <Card color="blue">
                                    <Image src='img/avatar/cloison.png' size="tiny" centered />
                                    <Card.Content>
                                        <Card.Header>
                                                <br />
                                        </Card.Header>
                                        <Card.Description>
                                                <Link href="/Cloison"><a style={{ color: "green", fontWeight: "bold" }}>Cloisonnement</a></Link>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid> <br/>    
                </Container> 
                </Animated>    
            </Layout>
        )
    }
}
 