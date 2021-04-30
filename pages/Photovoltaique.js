import React from "react";
import { Image, Container, Grid, Segment } from 'semantic-ui-react'
import Layout from "../components/MyLayout"


export default class Photovoltaique extends React.Component {
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
                        photovoltaique
                    </Segment>
                    <center>
                        <h2 style={{ fontFamily: "Comic Sans MS" }}>En terrasse ou en sol,montage sur toiture,en marquise,en integration de toiture</h2><br />
                    </center>
                    <center >
                        
                            <Image src="img/photovoltaique/photovoltaique.jpg" size="big" />
                            
                    </center>
                    <Segment secondary>
                        <p><strong><u><h2>Pour les constructeurs de maisons individuelles</h2></u><br />
                            <em>
                                • apport jusqu’à 12 kWh/m2 au CEP (Coefficient d’énergie primaire)
                            pour limiter les coûts d’isolation<br />
                            • 0 m2 de surface habitable utilisée<br />
                            • adaptés à toutes les régions<br />
                            • coûts d’équipement et d’installation très faibles pour la maîtrise du coût de la construction.<br /><br/>
                                 <u><h2>Pour les futures proprietaires</h2></u><br />
                            • économies sur la facture d’électricité en auto-consommant
                            l’énergie produite<br/>
                            • pas de coûts <br />
                            • systèmes totalement silencieux et fiables dans la durée<br />
                            • valorisation du patrimoine immobilier. <br /><br/>
                                <u><h2>Principe de fonctionnement</h2></u><br />
                        Les capteurs photovoltaïques PV couplés à leurs micro-onduleurs
                        produisent de l’électricité consommée dans la maison
                        sans revente de courant. L’électricité ainsi produite est autoconsommée
                        par les appareils électriques en fonctionnement ou
                        en veille (VMC, électroménager, informatique, télé etc…). Le surplus
                        sera injecté gratuitement dans le réseau sans abonnement
                        spécifique (convention d’auto-consommation EDF)   
                         </em></strong></p>
                                                
                    </Segment>
                </Container>
            </Layout>

        )
    }
}