import React from "react";
import { Card, Image, Container, Segment, Grid, Button } from 'semantic-ui-react'
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
                                À propos de Green Package RTS</strong>
                        </blockquote></p>
                </Segment>
                <Container fluid>
                    <Segment vertical>
                        <Grid container stackable verticalAlign='center'>
                            <Grid.Row>
                                <Grid.Column width={8} style={{ fontFamily: "Comic sans MS" }}>
                                    <h1 style={{ fontFamily: "Comic sans MS", color: "Green", paddingTop: 90 }}>
                                        Notre Mission
                                    </h1>
                                    <Segment color='green'>
                                        <h4>Nous nous occupons de mener à bien votre projet sur la rénovation énergétique.<br/> 
                                        Notre priorité est de vous donner toutes les informations nécessaires à la réalisation de celui-ci. 
                                        Il est normal de se perdre dans cet océan d'informations diverses et variées et notre mission est de vous 
                                        guider.<br/>
                                        Nous prenons en charge toutes les démarches administratives, constituons le dossier, contactons les 
                                        différents artisans reconnus garants de l'environnement (RGE) près de chez vous. Un agent de maîtrise à 
                                        l'ouvrage (AMO) sera présent avant les travaux pour la faisabilité de votre projet et à la fin pour 
                                        vérifier que ceux-ci sont réalisés dans les règles de l'art.<br/>
                                        Nous vous assurons une prise en charge totale avec Action Logement après validation de votre dossier.
                                        <strong>Aucune installation ne sera effectuée sans accord préalable de notre partenaire et aucun frais ne vous 
                                        sera facturé malgré un éventuel refus.</strong></h4>
                                    </Segment>
                                </Grid.Column>

                                <Grid.Column floated='left' width={6} >
                                    <h1 style={{ fontFamily: "Comic sans MS", color: "Green", paddingTop: 90 }}>
                                        Pourquoi nous faire confiance
                                    </h1>

                                    <Segment color='green'>
                                        <h4 style={{ fontFamily: 'Times New Roman' }}>
                                           Notre travail est encadré par les différents organismes existants et chacun dispose de leur 
                                           protocole.<br/> Les aides dont vous pourrez bénéficier seront totalement transparentes et les documents 
                                           attestant de vos aides vous seront directement transmis par l'organisme en question.<br/>
                                           Nous vous accompagnerons dans ce travail très minutieux et toutes les démarches administratives 
                                           seront effectuées par nos soins.<br/>Vous pourrez trouver des témoignages attestant de notre sérieux 
                                           et le procesus d'accompagnement du début jusqu'à la fin du projet. </h4>
                                    </Segment>
                                    
                                </Grid.Column>
                            </Grid.Row>

                        </Grid>
                        
                    </Segment>
                    
                </Container>
                <Segment style={{ 
                        backgroundImage: "url('img/ecolo/logo.png')",
                        backgroundRepeat:"no-repeat",
                        height:300,
                        textAlign:"center",
                        backgroundPosition:"center",
                        paddingTop:250
                        }}>
                        <Button type="submit" color="green">
                            Vérifier mon éligibilité</Button>
                </Segment>
                     
                           
                           
               
            </div>
        )
    }
}
