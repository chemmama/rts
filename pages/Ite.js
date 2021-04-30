import React, { Children } from "react";
import { Container, Image, Grid, Dropdown, Segment, Embed, Form, Checkbox, Item } from 'semantic-ui-react'
import Layout from "../components/MyLayout"
import Contact from '../pages/Contact'
import * as emailjs from 'emailjs-com'
import PourquoiIte from './PourquoiIte'


export default class Pac extends React.Component {
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
        this.state.proprio === "" ? this.setState({ errorProprio: { content: "", pointing: null } }) : this.setState({ errorProprio: null })
        this.state.salarie === "" ? this.setState({ errorSalarie: { content: "", pointing: null } }) : this.setState({ errorSalarie: null })
        this.state.chauffage === "" ? this.setState({ errorChauffage: { content: "", pointing: null } }) : this.setState({ errorChauffage: null })
        this.state.famille === "" ? this.setState({ errorFamille: { content: "", pointing: null } }) : this.setState({ errorFamille: null })
        this.state.fiscalite === "" ? this.setState({ errorFiscalite: { content: "", pointing: null } }) : this.setState({ errorFiscalite: null })
        this.state.proprio === "" ? alert("Selectionnez un choix") :
            this.state.salarie === "" ? alert("Selectionnez un choix") :
                this.state.chauffage === "" ? alert("Selectionnez un choix") :
                    this.state.famille === "" ? alert("Selectionnez un choix") :
                        this.state.fiscalité === "" ? alert("Selectionnez un choix") : this.dataContact()
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
        this.state.proprio === "", this.state.salarie === "", this.state.chauffage === "", this.state.famille === ""
        this.state.fiscalite === ""
        this.state.nom = "", this.state.prenom = "", this.state.adresse = "", this.state.localite = "", this.state.email = "",
            this.state.telephone = ""
    }

    render() {
        const { children } = this.props
        const { mobile } = this.props

        return (
            <Layout>
                <Container fluid>
                    <Segment vertical fluid>
                        <Grid container stackable verticalAlign='center'>
                            <Grid.Row>
                                <Grid.Column floated="left" width={6}>
                                    <p style={{
                                        fontFamily: "Comic sans MS",
                                        color: "lightgreen",
                                        textAlign: "center",
                                        fontSize: mobile ? 25 : 25,
                                        textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
                                        letterSpacing: 3
                                    }}>
                                        L'Isolation Thermique de vos murs par l'Extérieur
                                        pris en charge jusqu'à 90% c'est possible<Image src="img/ecolo/logocee.png" centered size="small" spaced /></p>

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
                    <PourquoiIte/>
                </Container>
            </Layout>
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






