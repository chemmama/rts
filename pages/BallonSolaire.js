import React from "react";
import { Image, Container, Grid, Segment } from 'semantic-ui-react'
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


 class IndexBallonSolaire extends React.Component {
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
                <Container style={{ textAlign: "left", letterSpacing: 3, paddingTop: 30 }}>
                    <Segment style={shadow}>
                        Ballon solaire Qualisol
                    </Segment>
                    <center>
                        <h2 style={{ fontFamily: "Comic Sans MS" }}>QualiSOL CESI, QualiSOL Combi, QualiSOL Collectif </h2><br />
                    </center>
                    <center >
                        <Image src="img/photovoltaique/solaire hybride.jpg" size="big" />

                    </center>
                    <Segment secondary>
                        <p><strong><u><h2>Qualification Qualisol CESI : pour les chauffe-eau solaires individuels,</h2></u></strong></p>
                            <em>
                                d’une surface de capteurs inférieure ou égale à 20 m2, et destinés à la production d’eau chaude sanitaire 
                                dans l’habitat individuel.</em><br/><br/>
                        <p><strong><u><h2>Qualification Qualisol Combi : pour les chauffe-eau solaires combinés,</h2></u></strong></p>
                            <em>
                                Qualification Qualisol Combi : pour les installations de systèmes solaire combinés, d’une surface de capteurs 
                                inférieure ou égale à 20 m2, destinés à l’habitat individuel.</em><br/><br/>

                        <p><strong><u><h2>Qualification Qualisol Collectif : pour les chauffe-eau solaires combinés,</h2></u></strong></p>
                        <em>
                                Qualification Qualisol Collectif : pour l’installation de chauffe-eau solaires collectifs, d’une surface de 
                                capteurs inférieure ou égale à 20 m2, destinés à l'habitat collectif.
                         </em>
                    </Segment>
                </Container>
            </Layout>

        )
    }
}

class GreatherBallonSolaire extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media greaterThan='mobile'>
                <IndexBallonSolaire />
            </Media>
        )
    }
}

class MobileBallonSolaire extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media between={["mobile", "tablet"]}>
                <IndexBallonSolaire mobile />
            </Media>
        )
    }
}

export default class BallonSolaire extends React.Component {

    render() {
        return (
            <div>
                <MediaContextProvider>
                    <GreatherBallonSolaire >{this.props.children}</GreatherBallonSolaire >
                    <MobileBallonSolaire>{this.props.children}</MobileBallonSolaire>
                </MediaContextProvider>
            </div>
        )
    }
}
