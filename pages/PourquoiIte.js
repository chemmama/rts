import React from "react";
import { Card, Image, Container, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types';

export default class PourquoiIte extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { mobile } = this.props
        const shadow = {
            color: 'lightgreen',
            textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
            textAlign: "center",
            fontFamily: "verdana",
            fontSize: mobile ? 22 : 32
        }

        return (
            <div>
                <Segment>
                   
                        <blockquote>
                            <strong style={shadow}>Pourquoi isoler votre façade ?</strong><br/>
                            <p style={{wordSpacing:5}}>L'ITE regroupe l'ensemble des techniques d'isolation de la façade d'une maison. 
                            Ces techniques visent à limiter, par l’extérieur, les transferts thermiques entre 
                            les murs et l’intérieur d’un bâtiment. Elle se réalise par la pose d’un isolant, 
                            recouvert d’un revêtement de finition (enduit de façade ou bardage extérieur).
                            L’isolation thermique par l'extérieur permet de constituer un véritable manteau 
                            isolant continu autour d’une construction. L’isolation thermique extérieure 
                            contribue ainsi au maintien d’une température homogène dans le logement, 
                            hiver comme été.</p>
                        </blockquote></Segment>
                <Segment>
                    <Card.Group centered>
                        <Card>
                            <Image src='img/ite/accueil.png' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header
                                    style={{ textAlign: 'center' }}>
                                    <h2>Les avantages de l'isolation</h2>
                                </Card.Header>
                                <Card.Description style={{ textAlign: "center", backgroundColor: 'whitesmoke', fontFamily: 'Times New Roman', lineHeight: 1.5 }}>
                                    <strong><mark>Des économies :</mark></strong><br />
                                    Economisez jusqu'à 30% sur vos factures <br /><br/>

                                    <strong><mark>Un nouveau visage:</mark></strong><br />
                                    Votre maison bénéfcie d'un ravalement de façade<br /><br/>

                                    <strong><mark>Une plus-value :</mark></strong><br />
                                    Une augmentation de la valeur de votre bien<br /><br/>

                                    <strong><mark>Une surface habitable inchangée :</mark></strong><br />
                                   L'isolation des murs par l'extérieur ne réduit pas la surface habitable <br /><br/>

                                    <strong><mark>Une maison saine :</mark></strong><br />
                                    L'isolation contribue à réduire l'humidité<br /><br/>
                                    
                                    <strong><mark>Une température agréable :</mark></strong><br />
                                    Restez au chaud en hiver et au frais en été<br />

                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Image src='img/ecolo/ecologie.png' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header style={{ textAlign: 'center' }}><h2>Quelles subventions pour l'isolation thermique extérieur ?</h2></Card.Header>
                                <Card.Description style={{
                                    textAlign: "center", backgroundColor: 'whitesmoke', fontFamily: 'Times New Roman',
                                    lineHeight: 1.5 }}><br />
                                    <strong><mark>1 - Les certificats d'économie d'énergie</mark></strong><br />
                                           La loi pope oblige les vendeurs d'énergie de votre région 
                                           (Total, EDF, Engie...) à acquérir des "certificats d'économie 
                                           d'énergie" en finançant les travaux d'isolation de votre foyer.<br />

                                    <strong><mark>2 - MaPrimRénov</mark></strong><br />
                                            Une aide pour être mieux chez vous et pour un logement mieux pour 
                                            la planète MaPrimeRénov’ est la nouvelle prime d’Etat qui vient 
                                            simplifier les aides à la rénovation énergétique. Près de la moitié
                                            des Français y a droit dès 2020, avant un élargissement des publics
                                            qui peuvent en bénéficier à partir de 2021.Cette nouvelle aide a 
                                            pour but d’améliorer la qualité de service en accélérant et en 
                                            implifiant les démarches. Désormais, un simple dossier en ligne 
                                            vous permettra de bénéficier d’une aide versée dès la fin des 
                                            travaux sans attendre une réduction fiscale l’année suivante comme 
                                            auparavant.<br />
                                        <strong><mark>Pour avoir le droit à MaPrimeRénov, il vous faut :</mark></strong><br />
                                            <ul style={{textAlign:'left'}}>
                                                <li>être propriétaire d’un logement construit depuis plus de 2 ans</li>
                                                <li>l’occuper comme résidence principale</li>
                                                <li>être propriétaire d’un logement construit depuis plus de 2 ans</li>
                                                <li>l’occuper comme résidence principale</li>
                                                <li>ne pas dépasser un plafond de ressources</li>
                                                <li>faire réaliser les travaux par une entreprise Reconnues Garantes de l’Environnement (RGE)</li>
                                            </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Image src='img/ecolo/france.png' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header style={{ textAlign: "center" }}><h2>R.T.S Habitat vous accompagne </h2></Card.Header>
                                <Card.Description style={{
                                    textAlign: "center", backgroundColor: 'whitesmoke', fontFamily: 'Times New Roman',
                                    lineHeight: 1.5
                                }}>
                                    <br />
                                    <strong><mark>RTS sera pres de vous</mark></strong><br />
                                    <ul style={{textAlign:"left"}}>
                                        <li>Conseils pour l'obtention des aides, primes, subventions et économies  d'impôts ... </li>
                                        <li>Prise en charge de toutes les démarches administratives</li>
                                        <li> Un interlocuteur unique, du début à la fin de votre projet</li>
                                        <li>Des solutions de crédit avec nos partenaires financiers</li>
                                    </ul>
                                    </Card.Description>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </Segment>
            </div>

        )
    }
}
