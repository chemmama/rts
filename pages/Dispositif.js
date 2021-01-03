import React from "react";
import { Card, Image, Container, Segment,Grid,Item} from 'semantic-ui-react'
import PropTypes from 'prop-types';

export default class Dispositif extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { mobile } = this.props


        return (
            <div>
                <Segment>
                    <p style={{
                        fontFamily: "Comic sans MS",
                        textAlign: "center",
                        paddingTop: 30,
                        fontSize: 30,

                    }}>
                        <blockquote>
                            <strong>
                                Action Logement,Ma Prime Renov',CEE:Acteurs Majeurs pour la<br/>
                                TRANSITION ENERGETIQUE</strong>
                        </blockquote></p>
                </Segment>
                <Container fluid>
                    <Segment vertical>
                        <Grid container stackable verticalAlign='center'>
                            <Grid.Row>
                                <Grid.Column floated="left" width={8} style={{ fontFamily: "Comic sans MS" }}>
                                    <Image src="img/ecolo/action-logement.png" />
                                </Grid.Column>    
                                
                                <Grid.Column  width={10}>
                                    <Image src="img/ecolo/pompeachaleur.png" size="medium"/>
                                </Grid.Column>    
                                    
                                <Grid.Column floated='left' width={6}>
                                    <h1 style={{ fontFamily: "Comic sans MS", color:"Green" }}>
                                        Les conditions pour bénéficier de l'aide à la rénovation énergétique
                                    </h1>
                                     
                                    <Segment color='green'>
                                        <h4 style={{ fontFamily: 'Times New Roman' }}>
                                          Vos revenus ou ceux de votre locataire sont inférieurs aux plafonds de ressources 
                                        des ménages à revenus modestes.</h4>
                                    </Segment>
                                    <Segment >
                                        <h4 style={{fontFamily: 'Times New Roman'}}>Votre logement est situé en zone B2 ou C ou dans une commune du programme Action cœur de ville.</h4>
                                    </Segment>
                                    <Segment> 
                                        <h4 style={{fontFamily: 'Times New Roman'}}>Le logement dans lequel vous souhaiter effectuer des travaux est votre résidence principale ou celle de votre locataire.</h4>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Container>
            </div>
        )
    }
}
