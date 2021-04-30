import React from "react";
import { Card, Image, Container, Segment, Grid, Item } from 'semantic-ui-react'
import PropTypes from 'prop-types';

export default class Cee extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { mobile } = this.props
        const shadow =
        {
            color: 'lightgreen',
            textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
            textAlign: "center",
            fontFamily: "verdana",
            fontSize: 25
        }
        return (
            <div>
                <Segment style={shadow} >
                        <blockquote>
                            <strong >
                            Les Certificats d'Économies d'Énergie<Image src="img/ecolo/logocee.png" spaced size="small"/></strong>
                        </blockquote>
                </Segment>
                <Container fluid>
                    <Segment vertical>
                        <Grid container stackable verticalAlign='center'>
                            <Grid.Row>
                                <Grid.Column width={10}>
                                    <Image src="img/ecolo/maison-exterieur.png" size='large' centered />
                                </Grid.Column>

                                <Grid.Column floated='left' width={6} >
                                    <h1 style={{ fontFamily: "verdana", color: "Green",fontSize:25}}>
                                        Les Certificats d'Économies d'Énergie
                                    </h1>

                                    <Segment color='green'>
                                        <h4 style={{ fontFamily: 'Times New Roman' }}>
                                            Dans le cadre d'une obligation encadrée par l'Etat, certaines entreprises (fournisseur de
                                            gaz ou d'électricité, acteurs de la grande distribution ayant des stations essence, enseignes pétrolières)
                                            proposent des primes pour vous aider à réaliser des économies d'énergie.<br />
                                            Ces aides sont accessibles à tous sans conditions de ressources.<br />
                                            L'avantage de ces entreprises c'est de défiscaliser leur taxe carbone en vous attribuant
                                            une prime..</h4>
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
