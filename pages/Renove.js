import React from "react";
import { Card, Image, Container, Segment, Grid, Item } from 'semantic-ui-react'
import PropTypes from 'prop-types';

export default class Renove extends React.Component {
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
                        fontSize: 30,

                    }}>
                        <blockquote>
                            <strong>
                                La Prime Réno'v, c'est quoi ?</strong>
                        </blockquote></p>
                </Segment>
                <Container fluid>
                    <Segment vertical>
                        <Grid container stackable verticalAlign='center'>
                            <Grid.Row>
                                <Grid.Column width={8} style={{ fontFamily: "Comic sans MS" }}>
                                    <Image src="img/ecolo/primerenov.png" centered />
                                </Grid.Column> 

                                <Grid.Column width={10} style={{paddingTop:90}}>
                                    <Image src="img/ecolo/maison-pompe-a-chaleur.jpg" size='large'centered />
                                </Grid.Column>

                                <Grid.Column floated='left' width={6} >
                                    <h1 style={{ fontFamily: "Comic sans MS", color: "Green",paddingTop:90 }}>
                                        La Prime Réno'v, c'est quoi ?
                                    </h1>

                                    <Segment color='green'>
                                        <h4 style={{ fontFamily: 'Times New Roman' }}>
                                            Pour l’obtenir, il est nécessaire de créer un compte en ligne sur le site maprimerenov.gouv.fr. 
                                            <br/>La demande doit être faite avant le début des travaux.
                                            Plusieurs conditions sont nécessaires pour en bénéficier. <br/>
                                            L’installation de la pompe à chaleur devra notamment être effectuée par un professionnel qualifié
                                            RGE QualiPAC.<br/>
                                            Pour en savoir plus sur la Prime Rénov', télécharger le document ci-dessous lequel vous souhaiter 
                                            effectuer des travaux est votre résidence principale ou celle de votre locataire.</h4>
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
