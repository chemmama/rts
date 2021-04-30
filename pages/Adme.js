import React from "react";
import { Card, Image, Container, Segment, Grid, Item } from 'semantic-ui-react'
import PropTypes from 'prop-types';

export default class Adme extends React.Component {
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
                            l'Adme c'est quoi <Image src="img/ecolo/ministere-economie.png"size="tiny" spaced /></strong>
                    </blockquote>
                </Segment>
                <Container fluid>
                    <Segment vertical>
                        <Grid container stackable verticalAlign='center'>
                            <Grid.Row>
                                <Grid.Column width={10}>
                                    <Image src="img/ecolo/france.png" size='larg' centered />
                                </Grid.Column>

                                <Grid.Column floated='left' width={6}>
                                    <h1 style={{ fontFamily: "verdana", color: "Green",sizeFont:25 }}>
                                        Agir pour la transition écologique Agence de la transition écologique
                                    </h1>

                                    <Segment color='green'>
                                        <h4 style={{ fontFamily: 'Times New Roman' }}>
                                            AGIR POUR LA TRANSITON ECOLOGIQUE permet à tous les acteurs de la société 
                                            (particuliers, professionnels et collectivités locales / territoriales) de trouver des informations 
                                            clés et des conseils adaptés pour accompagner leur transition écologique. 
                                            Elle offre un accès simplifié à l'ensemble des contenus de l'ADEME, de manière personnalisée.
                                        </h4>
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


