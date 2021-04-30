import React from "react";
import { Card, Image, Container, Segment, Grid, Item } from 'semantic-ui-react'
import PropTypes from 'prop-types';

export default class Anah extends React.Component {
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
                            Habiter mieux de l'Anah <Image src="img/ecolo/anah.png" spaced size="small" /></strong>
                    </blockquote>
                </Segment>
                <Container fluid>
                    <Segment vertical>
                        <Grid container stackable verticalAlign='center'>
                            <Grid.Row>
                                <Grid.Column width={10}>
                                    <Image src="img/ecolo/habitationanah.png" size='large' centered />
                                </Grid.Column>

                                <Grid.Column floated='left' width={6} >
                                    <h1 style={{ fontFamily: "verdana", color: "Green",fontSize:25}}>
                                        Une réponse territoriale aux enjeux de l'habitat privé
                                    </h1>

                                    <Segment color='green'>
                                        <h4 style={{ fontFamily: 'Times New Roman'}}>
                                            L’Agence nationale de l’habitat est un établissement public placé sous la tutelle des ministères 
                                            en charge de la Cohésion des territoires et des Relations avec les collectivités territoriales, 
                                            de l’Action et des Comptes publics et du ministère de l’Economie et des Finances.
                                            Sa mission depuis près de 50 ans est d’améliorer l’état du parc de logements privés existants 
                                            pour lutter contre les fractures sociales et territoriales.
                                            L’Anah encourage ainsi les travaux de rénovation et réhabilitation des logements en accordant des 
                                            aides financières aux propriétaires occupants modestes et aux syndicats de copropriétés fragiles et en difficulté. Elle propose également aux propriétaires bailleurs privés un contrat pour faciliter la mise à disposition d’un parc locatif rénové à loyer abordable..</h4>
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
