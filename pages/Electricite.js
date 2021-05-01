import React from "react";
import { Image,Container, Grid,Segment } from 'semantic-ui-react'
import Layout from "../components/MyLayout"
import { createMedia } from '@artsy/fresnel'

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
        ecran: 1192
    }
})

class IndexElectricite extends React.Component {
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
            <Layout>
                <Container style={{textAlign:"center",letterSpacing:3,paddingTop:30}}>
                    <Segment>
                            <strong style={shadow}> R.T.S des electriciens reconnus Agrées Consuel/Qualifelec</strong>
                    </Segment>
                    <em> R.T.S est un professionnel de l'installation électrique au savoir-faire reconnu.<br />
                                Basée à LES LILAS  certifié par l'elite des electriciens <strong>CONSUEL</strong><br />
                                R.T.S vous accompagne et vous propose des equipements adaptés aux tendances et aux évolutions du marché de l'électricité tout en respectant les
                                exigences de la norme NF C 15-100 qui concerne les locaux d’habitation.<br />
                                R.T.S est specialisé dans les ERP ,s'occupe de faire vos demarche aupres d'EDF afin d'obtenir les
                                contrats les mieux adaptés a votre profession
                   
                    
                        <Segment>
                            <p style={shadow}>Des installateurs aux compétences multiples</p>
                        </Segment>
                    
                                <ul>
                                    <li>Renover une installation</li>
                                    <li>Remise aux normes de l'installation</li>
                                    <li>Mise en securité de votre installation</li>
                                    <li>Remise d'un Consuel certifiant l'installation conforme</li>
                                </ul></em>
                    
                    <Grid columns={3}>
                        <Grid.Row>
                            <Grid.Column>
                                <Image src="img/electricite/loi alure.png" size="larg" alt="loi allure" />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="img/electricite/habilitation electrique.png" size="larg" alt="habilitation" />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="img/electricite/mise en conformite.png" size="larg" alt="mise en conformite"/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Segment >
                        <p style={shadow}>OBJECTIFS</p>
                    </Segment>
                    <em  >La réglementation relative à la mise en location des logements existants dont
                            l’installation électrique a plus de 15 ans.<br />
                            Nous serons capables d’identifier et de
                            formaliser dans un rapport les défauts de sécurité à corriger dans le cadre de la mise
                            en sécurité.<br />
                            Nous sommes capables d’analyser l’état de l’installation électrique d’un logement et de
                            détecter les anomalies de sécurité à corriger pour assurer la sécurité des personnes et
                            la conservation des biens, de pouvoir analyser différentes solutions techniques
                            et d’en choisir la mieux adaptée<br />
                            Connaitre les règles de mise en œuvre des dernières évolutions normatives</em>
                            <br /><br />
                    <Grid columns={3} divided>
                        <Grid.Row>
                        <Grid.Column>
                            <Image src="img/electricite/tableau1.png" size="larg"alt="mise en securite " /> 
                        </Grid.Column>
                        <Grid.Column> 
                            <Image src="img/electricite/tableau2.png" size="larg"alt="mise en securite" /> 
                        </Grid.Column>
                        <Grid.Column>
                            <Image src="img/electricite/disjoncteurs.png" size="larg" alt="disjoncteur" /> 
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                     <Segment>
                        <p style={shadow}>Les Obligations</p>
                    </Segment>
                        <em>Après la loi ENL qui a instauré en 2009 l’obligation
                        de la fourniture de l’état de l’installation électrique à chaque transaction de vente immobilière,
                        la loi ALUR et son décret du 11 août 2016 relatif à l’état de l’installation intérieure
                        d’électricité dans les logements en location, va obliger les propriétaires bailleurs,
                        dès juillet 2017, à annexer au contrat de location un état de l’installation intérieure
                        d’électricité ou, mieux encore car elle apporte une véritable garantie de résultat,
                        une Attestation de Conformité pour mise en sécurité visée par CONSUEL suite aux travaux réalisés.</em><br /><br />
                
                </Container>
            </Layout>

        )
    }
}
class GreatherIndexElectricite extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media greaterThan='mobile'>
                <IndexElectricite />
            </Media>
        )
    }
}

class MobileIndexElectricite extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media between={["mobile", "tablet"]}>
                <IndexElectricite mobile />
            </Media>
        )
    }
}

export default class Electricite extends React.Component {

    render() {
        return (
            <div>
                <MediaContextProvider>
                    <GreatherIndexElectricite >{this.props.children}</GreatherIndexElectricite>
                    <MobileIndexElectricite>{this.props.children}</MobileIndexElectricite>
                </MediaContextProvider>
            </div>
        )
    }
}
