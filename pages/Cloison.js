import React from "react";
import { Image, Container, Grid, Segment, Accordion, Icon } from 'semantic-ui-react'
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

 class IndexCloison extends React.Component {
    constructor(props) {
        super(props);

    }

    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state
        const { mobile } = this.props
        const shadow =
        {
            color: 'lightgreen',
            textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
            textAlign: "center",
            fontFamily: "verdana",
            fontSize: mobile?15:25
        }
        return (
            <Layout>
                <Container style={{ letterSpacing: 3, paddingTop: 30}}>
                    <Segment>
                        <center><strong style={shadow}>les cloisons </strong></center>
                    </Segment>
                    <h2 style={{ fontFamily: "Comic Sans MS",textAlign:'center' }}>pleines,vitrées,semi vitrées,isolation,portes</h2>
                    
                    <Accordion styled fluid >
                        <Accordion.Title
                            active={activeIndex === 0}
                            index={0}
                            onClick={this.handleClick}
                            >
                            <Icon name='dropdown' />
                            Cloison pleine
                        </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0} style={{textAlign:"center"}}>
                                <Image src="img/cloison/cloison-pleine.jpg" size="larg" centered />
                            <Segment>
                                <strong style={shadow}>Cloison Pleine</strong>
                            </Segment>
                            <p style={{ backgroundColor: "whitesmoke" }}>Une cloison pleine est constituée, sur chaque face, de plaques de plâtre BF13
                                ou de panneaux revêtus épaisseur 12mm, montés sur une ossature aluminium. 
                                Ce type de cloison assure une confidentialité totale. 
                                Pour donner une impression d’ouverture, on peut intégrer une imposte verre en 
                                partie haute.
                            </p>
                            <Segment>
                                 <strong style={shadow}>Cloison Design</strong> 
                            </Segment>
                            <p style={{ backgroundColor: "whitesmoke" }} >Les panneaux peuvent être revêtus de feuilles de mélaminé stratifié ou de films
                                vinyliques. Ceux-ci sont lessivables, résistants aux rayures et aux chocs. 
                                Ils se déclinent dans de nombreux décors : aspect bois ou matière naturelle, 
                                couleur, motifs, etc.
                            </p>
                            <Segment>
                                 <strong style={shadow}>Cloisons acoustiques</strong> 
                            </Segment>
                            <p style={{ backgroundColor: "whitesmoke" }}>Pour doter nos cloisons pleines d’une bonne isolation phonique et thermique,
                                on insère une couche de laine de verre entre les deux faces, de 45mm d’épaisseur. 
                                Pour les locaux particulièrement bruyants, il faut envisager des cloisons acoustiques, 
                                avec 4 peaux de ba13 et laine de roche, et la mise en place de barrières acoustiques dans 
                                le faux plafond et éventuellement le faux plancher.
                            </p>
                          </Accordion.Content>
                        <Accordion.Title
                            active={activeIndex === 1}
                            index={1}
                            onClick={this.handleClick}
                            >
                            <Icon name='dropdown' />
                                Cloison vitrée toute hauteur
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            <Image src="img/cloison/cloison-vitree-toute-hauteur.jpg" size="larg" centered />
                            <Segment textAlign="center">
                                <strong style={shadow}>Cloison vitrée toutes hauteur</strong>
                            </Segment>
                            <p style={{ backgroundColor: "whitesmoke" }}>La cloison vitrée toute hauteur est constituée de vitrages montés sur des ossatures aluminium.
                                Très design et contemporaine, elle a de beaux atouts :
                                    <ul>
                                        <li>diffusion de la lumière naturelle</li>
                                        <li>stimulation de la communication</li>
                                        <li>image symbolique de transparence</li>
                                        <li>impression d’ouverture et d’espace</li>
                                    </ul><br />
                                    <Segment textAlign="center">
                                        <strong style={shadow}>Isolation</strong>
                                     </Segment>
                                        <br />La cloison vitrée toute hauteur est disponible en simple vitrage, mais le double vitrage améliore 
                                            considérablement ses qualités isolantes
                                        <br /> La transparence des cloisons vitrées peut être réduite, à certains endroits ou sur toute leur surface, en permanence ou de manière ponctuelle :
                                        <ul>
                                            <li>habillage des vitrages : des films adhésifs, effet verre sablé ou représentant un motif, permettent d’occulter la vue, avec un visuel à forte valeur ajoutée</li>
                                            <li>store vénitien : intégré entre les deux parois vitrées, ou en applique dans le cas d’un simple vitrage, c’est un excellent moyen d’adapter les cloisons au niveau d’isolement voulu</li>
                                            <li>sablage : solution haut-de-gamme pour opacifier tout ou partie de la surface vitrée</li>
                                        </ul>
                            </p>
                            <Segment textAlign="center">
                                <strong style={shadow}>Confidentialité</strong>
                            </Segment>
                            <p style={{ backgroundColor: "whitesmoke" }}> Pour doter nos cloisons pleines d’une bonne isolation phonique et thermique, on insère une couche de
                                laine de verre entre les deux faces, de 45mm d’épaisseur. Pour les locaux particulièrement bruyants, 
                                il faut envisager des cloisons acoustiques, avec 4 peaux de ba13 et laine de roche, et la mise en place de
                                barrières acoustiques dans le faux plafond et éventuellement le faux plancher.
                            </p>
               
                        </Accordion.Content>
                        <Accordion.Title
                            active={activeIndex === 2}
                            index={2}
                            onClick={this.handleClick}
                            >
                            <Icon name='dropdown' />
                            Cloison semi vitrée
                        </Accordion.Title>
                            <Accordion.Content active={activeIndex === 2}>
                                <Image src="img/cloison/cloison-bureau.jpg" size="larg" centered />
                                <Segment textAlign="center">
                                    <strong style={shadow}>Cloison semi vitrée</strong>
                                </Segment>
                               <p style={{ backgroundColor: "whitesmoke" }}>
                                    Appelée aussi cloison vitrée sur allège (VSA), la cloison semi-vitrée consiste en une partie haute vitrée 
                                    et une partie basse pleine en panneaux de BF13 revêtu ou de mélaminé. Elle apporte un bon équilibre entre
                                    convivialité et intimité, et autorise par ailleurs l’installation du mobilier. Le double vitrage est 
                                    préconisé pour l’isolation des bureaux, tant acoustique que thermique.
                                    Ossature aluminium (disponible dans toutes les teintes RAL)
                                    Vitrage simple ou double vitrage
                                    Hauteur standard partie basse : 1m, mais autre dimension possible si besoin
                                    Pour renforcer l’intimité des espaces sans se priver de la luminosité, plusieurs solutions sont possibles :
                                    la pose d’un store en applique, ou entre les deux vitrages<br />
                                    <ul>
                                        <li>la pose d’un film adhésif sur le vitrage pour occulter certaines zones</li>
                                        <li>le sablage, total ou partiel, pour laisser passer la lumière en brouillant la vue</li>
                                        <li>Plus économique qu’une cloison vitrée toute hauteur, la cloison semi-vitrée a comme principal avantage de laisser circuler la lumière sans nuire à l’intimité des espaces individuels.</li>
                                    </ul>
                                </p>
                            </Accordion.Content>
                        <Accordion.Title
                            active={activeIndex === 3}
                            index={3}
                            onClick={this.handleClick}
                            >
                            <Icon name='dropdown' />
                            Porte de bureau
                        </Accordion.Title>
                            <Accordion.Content active={activeIndex === 3}>
                                <Image src="img/cloison/portes-toute-hauteur.jpg" size="larg" centered />
                                <Segment textAlign="center">
                                <strong style={shadow}>Porte de bureau</strong>
                                </Segment>
                            <p style={{ backgroundColor: "whitesmoke" }}> Une porte de bureau doit s’intégrer harmonieusement à la cloison, et son choix est guidé par les niveaux de sécurité,
                                de confidentialité et de luminosité attendus, et du type de circulation privilégié.<br />
                                <br />
                            </p>
                                <Segment textAlign="center">
                                    <strong style={shadow}>Materiaux</strong>
                                </Segment>
                            <p style={{ backgroundColor: "whitesmoke" }}>
                                <ul>
                                    <li>Porte à âme pleine stratifiée bois</li>
                                        On choisit une porte bois essentiellement pour respecter la confidentialité des espaces, 
                                        mais aussi par choix du design, surtout dans le cas de cloisons vitrées.
                                    <li>Porte cadre aluminium vitrée</li>
                                        Les portes cadre alu existent en simple ou double vitrage, Stadip ; 
                                        les cadres alu sont disponibles dans une gamme RAL complète.
                                    <li>Porte en verre Clarit</li>
                                        Les portes en verre Clarit, clair ou dépoli, sont extrêmement résistantes 
                                        et sont appréciées pour leur aspect léger et leur design très contemporain.
                                        Toutes nos portes sont équipées (béquille, butée de sol, paumelles, rosaces 
                                        en inox) et leur résistance est adaptée à l’environnement de travail et une 
                                        utilisation intensive.<br />
                                </ul>
                            </p>
                                <Segment textAlign="center">
                                <strong style={shadow}> Finition</strong>
                                </Segment>
                            <p style={{ backgroundColor: "whitesmoke" }}>
                                        Les portes pleines peuvent être revêtues de films décoratifs (décor bois, par exemple) pour donner 
                                        plus de caractère à votre espace. Le revêtement peut être identique à celui des cloisons, mais le choix
                                        du contraste est intéressant pour marquer davantage la porte.
                                        Les portes vitrées sont personnalisables avec la vitrophanie, qui tempère également leur transparence.
                                        Dans ce même objectif de confidentialité modulable, on peut intégrer un store entre les deux parois 
                                        d’une porte double vitrage.
                                </p>
                                <Segment textAlign="center">
                                    <strong style={shadow}> Hauteur</strong>
                                </Segment>
                                        
                                <p style={{ backgroundColor: "whitesmoke" }}> rts vous propose des portes en hauteur standard (2040 mm),
                                        avec imposte plein ou en verre, et des portes sur-mesure, si vous optez 
                                        pour des portes toute hauteur.
                                </p>
                                <Segment textAlign="center">
                                    <strong style={shadow}>Type d'ouverture</strong>
                                </Segment>
                                <p style={{ backgroundColor: "whitesmoke" }}>
                                        Les portes de bureaux, qu’elles soient en bois ou en verre, sont battantes ou coulissantes.
                                        Les portes battantes participent à une bonne isolation phonique, tandis que les portes coulissantes permettent une plus grande
                                        polyvalence aux espaces et un gain de place. Ces dernières peuvent être posées en galandage
                                            (elles coulissent à l’intérieur de la cloison), ou en applique, pour une meilleure isolation phonique.
                                            Nous pouvons créer dans les portes pleines des oculus ronds ou carrés
                                </p>
                                <Segment textAlign="center">                
                                <strong style={shadow}>Securité</strong>
                                 </Segment>
                                <p style={{ backgroundColor: "whitesmoke" }}>
                                        Nous proposons des portes équipées de serrures type européen. Pour que vous puissiez gérer vos clés facilement,
                                        nous pouvons également vous soumettre un organigramme de clés.
                                </p>

                            </Accordion.Content>
                    </Accordion>
                </Container>
            </Layout>
        )
    }
}
class GreatherCloison extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media greaterThan='mobile'>
                <IndexCloison />
            </Media>
        )
    }
}

class MobileCloison extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media between={["mobile", "tablet"]}>
                <IndexCloison mobile />
            </Media>
        )
    }
}

export default class Cloison extends React.Component {

    render() {
        return (
            <div>
                <MediaContextProvider>
                    <GreatherCloison >{this.props.children}</GreatherCloison>
                    <MobileCloison>{this.props.children}</MobileCloison>
                </MediaContextProvider>
            </div>
        )
    }
}
