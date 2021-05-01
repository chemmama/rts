import React from "react";
import { Container, Image, Grid, Segment, Embed, Item ,Card} from 'semantic-ui-react'
import Layout from "../components/MyLayout"
import Contact from './Contact'
import * as emailjs from 'emailjs-com'
import { createMedia } from '@artsy/fresnel'

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
        ecran: 1192
    }
})

class IndexAirAir extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            proprio: "", salarie: "", chauffage: "", famille: "", fiscalite: "",
            nom: "", prenom: "", adresse: "", localite: "", email: "", telephone: ""
        };
        this.state = {}
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit(e) {
        e.preventDefault();
        this.state.proprio === undefined ? this.setState({ errorProprio: { content: "", pointing: null } }) : this.setState({ errorProprio: null })
        this.state.salarie === undefined ? this.setState({ errorSalarie: { content: "", pointing: null } }) : this.setState({ errorSalarie: null })
        this.state.chauffage === undefined ? this.setState({ errorChauffage: { content: "", pointing: null } }) : this.setState({ errorChauffage: null })
        this.state.famille === undefined ? this.setState({ errorFamille: { content: "", pointing: null } }) : this.setState({ errorFamille: null })
        this.state.fiscalite === undefined ? this.setState({ errorFiscalite: { content: "", pointing: null } }) : this.setState({ errorFiscalite: null })
        this.state.proprio === undefined ? alert("Selectionnez Proprietaire ou locataire ?") :
            this.state.salarie === undefined ? alert("Selectionnez votre type de salaire") :
                this.state.chauffage === undefined ? alert("Selectionnez votre type de chauffage") :
                    this.state.famille === undefined ? alert("Selectionnez nombre de personne") :
                        this.state.fiscalite === undefined ? alert("Selectionnez votre revenu fiscal") : this.dataContact()
    }

    dataContact() {
        const { proprio, salarie, chauffage, famille, fiscalite,
            nom, prenom, adresse, localite, email, telephone } = this.state

        let templateParams = {
            from_name: email,
            to_name: nom,
            proprio: proprio,
            salarie: salarie,
            chauffage: chauffage,
            famille: famille,
            fiscalite: fiscalite,
            adresse: adresse,
            localite: localite,
            email: email,
            telephone: telephone,
            penom: prenom,

        }
        emailjs.send('my_Gmail', 'eligibilite', templateParams, 'user_O4rTmyvCyhnUYTJrczkMv')
            .then((result) => {
                alert(result.text);
            }, (error) => {
                alert(error.text);
            });
        this.state.proprio = "", this.state.salarie = "", this.state.chauffage = "", this.state.famille = ""
        this.state.fiscalite = ""
        this.state.nom = "", this.state.prenom = "", this.state.adresse = "", this.state.localite = "", this.state.email = "",
        this.state.telephone = ""
    }

    render() {
        const { children } = this.props
        const { mobile } = this.props
        const shadow = {
            color: 'lightgreen',
            textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
            textAlign: "center",
            fontFamily: "verdana",
            fontSize: mobile ? 22 : 32
        }
        return (
            <Layout>
                <Container fluid>
                    <Segment vertical fluid>
                        <Grid container stackable verticalAlign='center'>
                            <Grid.Row>
                                <Grid.Column floated="left" width={8}>
                                    <p style={{
                                        fontFamily: "Comic sans MS",
                                        color: "lightgreen",
                                        textAlign: "center",
                                        fontSize: mobile ? 25 : 25,
                                        textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
                                        letterSpacing: 3
                                    }}>
                                        Améliorez les performances énergétiques de votre logement pour <Image src="img/ecolo/1_euro.png" centered size="tiny" spaced />
                                        ou un reste à charge quasi nul, grâce aux programmes<Image src="img/ecolo/logocee.png" centered size="small" spaced /></p>

                                    <Embed
                                        aspectRatio='16:9'
                                        id='0m1QWV3vTzo'
                                        placeholder='img/ecolo/ecologieyoutube.jpg'
                                        source='youtube'
                                    />

                                    <h1 style={{
                                        fontFamily: "verdana",
                                        textAlign: "center", color: "green",
                                        fontSize: mobile ? 25 : 35
                                    }}>
                                        <u>Comment l'obtenir</u></h1>

                                    <Item>
                                        <Item.Image src="img/ecolo/validez.png" alt="validez" size='tiny' />
                                        <Item.Content verticalAlign='middle'>
                                            <Item.Header>Remplissez le formulaire</Item.Header>
                                        </Item.Content>
                                    </Item>
                                    <Item>
                                        <Item.Image size='tiny' src="img/ecolo/telephone.png" alt="telephone" />
                                        <Item.Content verticalAlign='middle'>
                                            <Item.Header> Un professionnel vous contact afin d'ouvrir votre dossier et convenir d'un rendez-vous</Item.Header>
                                        </Item.Content>
                                    </Item>
                                    <Item>
                                        <Item.Image size='tiny' src="img/ecolo/ouvrier.png" alt="ouvrier RGE" />
                                        <Item.Content verticalAlign='middle'>
                                            <Item.Header> Une équipe de techniciens confirmés RGE se déplace chez vous afin de réaliser vos travaux</Item.Header>
                                        </Item.Content>
                                    </Item>
                                    <Item>
                                        <Item.Image size='tiny' src="img/ecolo/remerciement.png" alt="remerciement" />
                                        <Item.Content verticalAlign='middle'>
                                            <Item.Header>Vous ne payez que 1 euro Sur présentation du devis , sans aucun frais avancé</Item.Header>
                                        </Item.Content>
                                    </Item><br />
                                    <Item>
                                        <Item.Image size='small' src="img/ecolo/logocee.png" alt="logo-cee" />
                                        <Item.Content verticalAlign='middle'>
                                            <Item.Header>l'etat finance  pour 1€ symbolique</Item.Header>
                                        </Item.Content>
                                    </Item>

                                </Grid.Column>

                                <Contact />
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Container>
                <Segment>
                    <p style={shadow}>
                        <blockquote>
                            <strong>Pourquoi choisir le remplacement de votre système de chauffage</strong>
                        </blockquote></p></Segment>
                <Segment>
                    <Card.Group centered>
                        <Card>
                            <Image src='img/ecolo/argent-economie.png' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header
                                    style={{ textAlign: 'center' }}>
                                    <h2>Les avantages de la pompe à chaleur Air Air</h2>
                                </Card.Header>
                                <Card.Description style={{ textAlign: "center", backgroundColor: 'whitesmoke', fontFamily: 'Times New Roman', lineHeight: 1.5 }}>
                                    <strong><mark>Une faible consommation d’énergie :</mark></strong><br />
                                    Pour 1kWh d’électricité consommée pour fonctionner, la pac restitue 3 à 4 kWh de chaleur.
                                    Elle permet ainsi de réduire considérablement les dépenses (votre facture de chauffage peut
                                    être divisée par 3 à 4 !) <br />

                                    <strong><mark>Un confort d’utilisation :</mark></strong><br />
                                    La pac fonctionne de façon autonome, elle chauffe rapidement et assure une température stable
                                    dans toutes les pièces<br />

                                    <strong><mark>Une pose simple :</mark></strong><br />
                                    La pac air air s'adapte partout
                                    chauffant<br />

                                    <strong><mark>Pas de rejets :</mark></strong><br />
                                    Ce système de chauffage ne rejette pas de fumées dans l’atmosphère,
                                    il n’y a donc aucune problématique de conduit d’évacuation à prévoir <br />

                                    <strong><mark>Un seul appareil pour tous vos besoins chaud et froid :</mark></strong><br />
                                    Le système va produire le chauffage , pourra également climatiser vos pièces
                                    en période estivale <br />
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Image src='img/ecolo/ecologie.png' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header style={{ textAlign: 'center' }}><h2>Ecologie</h2></Card.Header>
                                <Card.Description style={{
                                    textAlign: "center", backgroundColor: 'whitesmoke', fontFamily: 'Times New Roman',
                                    lineHeight: 1.5
                                }}><br />
                                    <strong><mark>Climatisation et  PAC air/air </mark></strong><br />
                                            La climatisation réversible est également appelée chauffage
                                            thermodynamique ou pompe à chaleur air/air. Ce type de technologie
                                            combine une fonction rafraîchissement en été et chauffage en hiver
                                            le tout en étant très économique. En effet les pompes à chaleur sont
                                             les seuls produits qui peuvent resituer plus de puissance qu’ils
                                             en consomment. Le tout avec un gain de place sensible,
                                             un confort accru, et de réelles économies d’énergie à la clé.<br />

                                    <strong><mark> Quel est son principe de fonctionnement ?</mark></strong><br />
                                            Ce système est constitué de deux échangeurs (un à l’intérieur de la pièce à traiter
                                            et un autre en contact direct avec l’air extérieur).
                                            L’échangeur extérieur va être utiliser pour chauffer ou refroidir un gaz frigorifique
                                            (en fonction de ce que l’on souhaite faire).
                                            Dans la pièce à traiter nous allons faire passer l’air de cette dernière dans l’échangeur
                                            intérieur de façon à le chauffer ou le rafraichir.
                                            <br />

                                    <strong><mark>la climatisation froid seul :</mark></strong><br />
                                            La climatisation froid seul appelée aussi pompe à chaleur air-air évacue
                                            les calories de l'air intérieur vers l'extérieur. Sa fonction est de
                                            rafraîchir et réguler le taux d'hygrométrie. Etant donné le faible écart de
                                            prix avec les systèmes réversibles, elle est de moins en moins utilisée.
                                            Elle trouve surtout son utilité dans des locaux techniques qui ont besoin
                                            d'être rafraîchis en été comme en hiver (locaux informatiques...)<br />

                                    <strong><mark>la climatisation chaud seul :</mark></strong><br />
                                            Les pompes à chaleur air/air en chaud seul sont destinés aux habitations neuves devant
                                             répondre à la RT2012. Il s’agit ni plus ni moins que d’une climatisation réversible qui
                                             est bloqué mécaniquement en mode chaud.<br />



                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Image src='img/ecolo/france.png' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header style={{ textAlign: "center" }}><h2>Subvention</h2></Card.Header>
                                <Card.Description style={{
                                    textAlign: "center", backgroundColor: 'whitesmoke', fontFamily: 'Times New Roman',
                                    lineHeight: 1.5
                                }}>
                                    <br />
                                    <strong><mark>Action Logement : Nouvelle aide pour les salariés du privé</mark></strong><br />
                                        L’organisme Action Logement, propose une nouvelle aide : une aide pour financer l’Installation de
                                        votre Pompe à Chaleur.
                                        Cette aide est attribuée aux propriétaires ou locataire. L’aide à la rénovation énergétique d’Action Logement
                                        a pour objectif
                                        de couvrir l’intégralité du coût des travaux, et son montant est plafonné à 20 000€.
                                        C’est grâce à cette aide qui apparaît fin 2020 que cette pompe à chaleur peut aujourd’hui vous être proposée à un euro symbolique !
                                        Cumulez plusieurs aides travaux ! De plus, vous aurez la possibilité de cumuler cette aide avec les différentes primes & aides déjà existantes.
                                    </Card.Description>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </Segment>
            </Layout>
        )
    }
}

class GreatherAirAir extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media greaterThan='mobile'>
                <IndexAirAir />
            </Media>
        )
    }
}

class MobileAirAir extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media between={["mobile", "tablet"]}>
                <IndexAirAir mobile />
            </Media>
        )
    }
}

export default class AirAir extends React.Component {

    render() {
        return (
            <div>
                <MediaContextProvider>
                    <GreatherAirAir>{this.props.children}</GreatherAirAir>
                    <MobileAirAir>{this.props.children}</MobileAirAir>
                </MediaContextProvider>
            </div>
        )
    }
}

const proprio = [

    {
        key: '1',
        text: 'Propriétaire',
        value: 'Propriétaire',

    },
    {
        key: '2',
        text: 'Locataire',
        value: 'Locataire',
    }
]


const salarie = [
    {
        key: '1',
        text: 'Secteur public',
        value: 'Secteur public',
    },
    {
        key: '2',
        text: 'Secteur prive',
        value: 'Secteur prive',
    },
    {
        key: '3',
        text: 'Secteur agricole',
        value: 'Secteur agricole',
    },
    {
        key: '4',
        text: 'Non salarie',
        value: 'Non salarie',
    },

]
const chauffage = [
    {
        key: '1',
        text: 'Electrique',
        value: 'Electrique',
    },
    {
        key: '2',
        text: 'Fioul',
        value: 'Fioul',
    },
    {
        key: '3',
        text: 'Gaz',
        value: 'Gaz',
    },
    {
        key: '4',
        text: 'Autre',
        value: 'Autre',
    },
]
const famille = [
    {
        key: '1',
        text: '1',
        value: '1',
    },
    {
        key: '2',
        text: '2',
        value: '2',
    },
    {
        key: '3',
        text: '3',
        value: '3',
    },
    {
        key: '4',
        text: '4',
        value: '4',
    },
    {
        key: '5 et plus',
        text: '5 et plus',
        value: '5 et plus',
    }
]
const fiscalite = [
    {
        key: '1',
        text: 'de 0€ à 19074€',
        value: 'de 0€ à 19074€',
    },
    {
        key: '2',
        text: 'de 19074€ à 27896€',
        value: 'de 19074€ à 27896€',
    },
    {
        key: '3',
        text: 'de 27896€ à 33547€',
        value: 'de 27896€ à 33547€',
    },
    {
        key: '4',
        text: 'de 33547€ à 39192€',
        value: 'de 33547€ à 39192€',
    },
    {
        key: '5',
        text: 'de 39192€ à 44860€',
        value: 'de 39192€ à 44860€',
    },
    {
        key: '6',
        text: '+ de 449860€',
        value: '+ de 449860€',
    }
]






