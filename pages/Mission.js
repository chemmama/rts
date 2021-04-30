import React from "react";
import {Container, Segment, Grid, Button,Image } from 'semantic-ui-react'
import Layout from "../components/MyLayout"
import Fiche from "../pages/Fiche"


export default class Mission extends React.Component {
   
    constructor(props) {
        super(props);
        this.state={}
    }
    
    handleOpen = () => this.setState({ open: true})
    handleClose = () => this.setState({ open:false })
    
    render() {
        const { mobile } = this.props
        const shadow =
        {
            color: 'white',
            textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
            textAlign: "center",
            fontFamily: "verdana",
            fontSize: 25
        }
      
        return (
            <Layout>
                <Segment style={shadow}>
                        <blockquote style={{fontSize:mobile ? 12:25}}>
                            <strong>
                                À propos de R.T.S</strong><br/><br/>
                                <Button color="green" fluid onClick={this.handleOpen} ><h3>
                                Vérifier mon éligibilité</h3></Button>
                        </blockquote> 
                </Segment>
                <Container fluid>
                    <Segment vertical>
                        <Grid container stackable verticalAlign='center'>
                            <Grid.Row>
                                <Grid.Column width={8} style={{ fontFamily: "Comic sans MS" }}>
                                    <h1 style={{ fontFamily: "verdana", color: "Green"}}>
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
                                    <h1 style={{ fontFamily: "verdana", color: "Green"}}>
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
    
                    <Image src="img/ecolo/ecologie.png" centered/>
                    <center>
                        <Button color="green" onClick={this.handleOpen}>Vérifier mon éligibilité</Button>
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
