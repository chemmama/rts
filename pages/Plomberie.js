import React from "react";
import { Image, Container, Grid, Segment } from 'semantic-ui-react'
import Layout from "../components/MyLayout"


export default class Plomberie extends React.Component {
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
                <Container style={{ textAlign: "center", letterSpacing: 3, paddingTop: 30 }}>
                    <Segment style={shadow}>
                        Espace douche
                    </Segment>
                    <center>
                        <h2 style={{ fontFamily: "Comic Sans MS" }}>A l'italienne, douche hydromassante ou cabine de douche : profitez des bienfaits de l'eau. <br />Avec receveur ou carrelé, créez une douche à votre image !</h2><br/>
                        </center>
                    <center >
                        <Image src="img/plomberie/espace douche 1.jpg" alt="douche 1" style={{ paddingTop: 30 }} />
                    </center>
                    <Segment secondary>
                        <p><strong><u><h2>Tout l'équipement pour votre douche</h2></u><br />
                        <em>La douche est un élément absolument incontournable de la salle de bains. Grâce à des matériaux
                        de plus en plus résistants, des lignes harmonieuses et des coloris modernes, elle s'intègre désormais
                        à tous les styles de décors.<br />
                        Cabine de douche, receveur à carreler, paroi fixe ou pivotante, mais aussi pommeaux, flexibles,
                        accessoires divers... R.T.S propose un vaste choix de matériaux pour transformer votre salle de bains
                        en véritable endroit de détente. <br />
                        Nous avons sélectionné pour vous les produits des meilleures marques, comme les colonnes de douche
                        Grohe ou les cabines de douche Thala.<br />
                        Vous souhaitez poser une cabine de douche, ou une douche à l'italienne ? Ou encore, vous avez envie
                        de remplacer une baignoire par une douche ? Nous sommes là pour vous fournir les meilleurs produits
                        et pour partager notre savoir-faire avec vous. Nos produits sont disponibles dans de multiples teintes
                        et matières, pour s'adapter aux goûts de chacun.</em></strong>
                        </p> 
                    </Segment>
                </Container>
            </Layout>

        )
    }
}