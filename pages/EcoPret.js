import React from "react";
import { Card, Image, Container, Segment, Grid, Item } from 'semantic-ui-react'
import PropTypes from 'prop-types';

export default class EcoPret extends React.Component {
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
                            Eco pret a TZ c'est quoi <Image src="img/ecolo/eco-ptz.png" size="tiny" spaced /></strong>
                    </blockquote>
                </Segment>
                <Container fluid>
                    <Segment vertical>
                        <Grid container stackable verticalAlign='center'>
                            <Grid.Row>
                                <Grid.Column width={10}>
                                    <Image src="img/ecolo/eco_pret_taux_zero.png" size='large'/>
                                </Grid.Column>

                                <Grid.Column floated='left' width={6}>
                                    <h1 style={{ fontFamily: "verdana", color: "Green", fontSize: 25 }}>
                                        L'éco-prêt à taux zéro
                                    </h1>

                                    <Segment color='green'>
                                        <h4 style={{ fontFamily: 'Times New Roman'}}>
                                            L’éco-prêt à taux zéro permet de bénéficier d’un taux de 0% pour 
                                            des prêts d’un montant maximal de 30 000 € sur 15 ans. 
                                            Il est destiné aux projets de rénovation incluant un bouquet de 
                                            travaux (au moins deux travaux).</h4>
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


