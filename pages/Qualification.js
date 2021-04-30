import React from "react";
import { Container, Image, Card, Grid ,Button} from 'semantic-ui-react'
import Layout from "../components/MyLayout"
import Fiche from "../pages/Fiche"


export default class Qualification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleOpen = () => this.setState({ open: true })
    handleClose = () => this.setState({ open: false })

    render() {
        const { mobile } = this.props

        const shadow =
        {
            color: 'white',
            textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
            textAlign: "center",
            fontFamily: "verdana",
            fontSize: mobile ? 22 : 32
        }

        return (
            <Layout>
                
                <h1 style={shadow}>Nos qualifications RGE<Image src='img/rge/Bandeau-RGE-chantier-par-chantier.png' spaced size="medium" /></h1>
                <Container style={{ textAlign: 'center' }}>
                    
                    <Grid divided='vertically'>
                        <Grid.Row columns={mobile ? 2 : 4}>
                            <Grid.Column>
                                <Card>
                                    <Image src='img/rge/logo-QualiPAC-2021-RGE.png' wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>Chauffage et ECS</Card.Header>

                                        <Card.Description>
                                            <strong style={{ color: "purple" }}>QualiPAC, la qualification RGE pour l'installation de pompes à chaleur</strong><br /><br /><br /><br /><br />
                                        </Card.Description>
                                    </Card.Content>

                                </Card>
                            </Grid.Column>


                            <Grid.Column>
                                <Card>
                                    <Image src='img/rge/logo-QualiPV-2021-RGE.png' wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>QualiPV</Card.Header>
                                        <Card.Description>
                                            <strong style={{ color: "blue" }}>QualiPV, la qualification de l'installation des systèmes solaires photovoltaïques</strong><br /><br /><br /><br />

                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>

                            <Grid.Column>
                                <Card>
                                    <Image src='img/rge/logo-Qualisol-2021-RGE.png' wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>Qualisol</Card.Header>
                                        <Card.Description>
                                            <strong style={{ color: 'orangered' }}>Qualisol, la qualification RGE de l'installation de systèmes solaires thermiques</strong><br /><br /><br /><br/>

                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>

                            <Grid.Column>
                                <Card>
                                    <Image src='img/rge/qualibat.png' />
                                    <Card.Content>
                                        <Card.Header>Qualibat</Card.Header>
                                        <Card.Description><strong style={{color:"blueviolet"}}>
                                            A travers nos labels de qualification et de certification, 
                                            nous valorisons une sélection d’entreprises de toutes spécialités 
                                            et de toutes tailles ayant fait preuve de leurs compétences et de 
                                            leur savoir-faire.</strong>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                    <center>
                        <Button color="green" fluid onClick={this.handleOpen}><h3>Vérifier mon éligibilité</h3></Button>
                    </center><br /><br /><br />
                    <Fiche
                        open={this.state.open}
                        onHide={() => this.handleClose()}
                    />


                </Container>
            </Layout>
        )
    }
}
