import React from "react";
import PropTypes from 'prop-types';
import Layout from "../components/MyLayout"
import { Container, Image,Grid ,Segment} from 'semantic-ui-react'
import { createMedia } from '@artsy/fresnel'

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
        ecran: 1192
    }
})

class IndexPartenaire extends React.Component {
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
                <Segment>
                    <p style={shadow}>
                        <blockquote>
                            <strong>
                                La Prime Réno'v, c'est quoi ? <Image src="img/ecolo/primerenov.png" spaced size="small" /></strong>
                        </blockquote></p>
                </Segment>
                <Container fluid>
                    <Segment vertical>
                        <Grid container stackable verticalAlign='center'>
                            <Grid.Row>
                                <Grid.Column width={10}>
                                    <Image src="img/ecolo/maison-pompe-a-chaleur.png" size='large' centered />
                                </Grid.Column>

                                <Grid.Column floated='left' width={6} >
                                    <h1 style={{ fontFamily: "verdana", color: "Green", fontSize: 25 }}>
                                        La Prime Réno'v ?
                                    </h1>

                                    <Segment color='green'>
                                        <h4 style={{ fontFamily: 'Times New Roman' }}>
                                            Pour l’obtenir, il est nécessaire de créer un compte en ligne sur le site maprimerenov.gouv.fr.
                                            <br />La demande doit être faite avant le début des travaux.
                                            Plusieurs conditions sont nécessaires pour en bénéficier. <br />
                                            L’installation de la pompe à chaleur devra notamment être effectuée par un professionnel qualifié
                                            RGE QualiPAC.<br />
                                            Pour en savoir plus sur la Prime Rénov', télécharger le document ci-dessous lequel vous souhaiter
                                            effectuer des travaux est votre résidence principale ou celle de votre locataire.</h4>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Container>
                <Segment style={shadow} >
                    <blockquote>
                        <strong >
                            Les Certificats d'Économies d'Énergie<Image src="img/ecolo/logocee.png" spaced size="small" /></strong>
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
                                    <h1 style={{ fontFamily: "verdana", color: "Green", fontSize: 25 }}>
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
                                    <h1 style={{ fontFamily: "verdana", color: "Green", fontSize: 25 }}>
                                        Une réponse territoriale aux enjeux de l'habitat privé
                                    </h1>

                                    <Segment color='green'>
                                        <h4 style={{ fontFamily: 'Times New Roman' }}>
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
                                    <Image src="img/ecolo/eco_pret_taux_zero.png" size='large' />
                                </Grid.Column>

                                <Grid.Column floated='left' width={6}>
                                    <h1 style={{ fontFamily: "verdana", color: "Green", fontSize: 25 }}>
                                        L'éco-prêt à taux zéro
                                    </h1>

                                    <Segment color='green'>
                                        <h4 style={{ fontFamily: 'Times New Roman' }}>
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
                <Segment style={shadow} >
                    <blockquote>
                        <strong >
                            l'Adme c'est quoi <Image src="img/ecolo/ministere-economie.png" size="tiny" spaced /></strong>
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
                                    <h1 style={{ fontFamily: "verdana", color: "Green", sizeFont: 25 }}>
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
            </Layout>
        )
    }
}
class GreatherIndexPartenaire extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media greaterThan='mobile'>
                <IndexPartenaire />
            </Media>
        )
    }
}

class MobileIndexPartenaire extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media between={["mobile", "tablet"]}>
                <IndexPartenaire mobile />
            </Media>
        )
    }
}

export default class Partenaire extends React.Component {

    render() {
        return (
            <div>
                <MediaContextProvider>
                    <GreatherIndexPartenaire >{this.props.children}</GreatherIndexPartenaire>
                    <MobileIndexPartenaire>{this.props.children}</MobileIndexPartenaire>
                </MediaContextProvider>
            </div>
        )
    }
}

