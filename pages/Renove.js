import React from "react";
import {Image, Container, Segment, Grid} from 'semantic-ui-react'
import Layout from "../components/MyLayout"


export default class Renove extends React.Component {
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
                <Segment>
                    <p style={shadow}>
                        <blockquote>
                            <strong>
                                La Prime Réno'v, c'est quoi ? <Image src="img/ecolo/primerenov.png" spaced size="small"/></strong>
                        </blockquote></p>
                </Segment>
                <Container fluid>
                    <Segment vertical>
                        <Grid container stackable verticalAlign='center'>
                            <Grid.Row>
                                <Grid.Column width={10}>
                                    <Image src="img/ecolo/maison-pompe-a-chaleur.png" size='large'centered />
                                </Grid.Column>

                                <Grid.Column floated='left' width={6} >
                                    <h1 style={{ fontFamily: "verdana", color: "Green",fontSize:25 }}>
                                        La Prime Réno'v ?
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
