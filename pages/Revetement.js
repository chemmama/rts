import React from "react";
import { Image, Container, Grid, Segment,Accordion,Icon } from 'semantic-ui-react'
import Layout from "../components/MyLayout"


export default class Revetement extends React.Component {
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
            fontSize: 25
        }
        return (
            <Layout>
                <Container style={{letterSpacing: 3, paddingTop:30 }}>
                <Segment>
                        <center><strong style={shadow}>les revetements de sol </strong></center>
                </Segment>
                    <strong><u><h3>Bien choisir son revêtement de sol</h3></u></strong>
                    <p style={{ backgroundColor: "whitesmoke" }}>Chaque type de sol a ses propriétés et qualités particulières mais le choix d'un revêtement de sol
                    est avant tout esthétique et doit s'adapter à la pièce où il sera posé.
                    Plusieurs solutions possibles pour vos envies en fonction de votre budget et de vos contraintes
                    techniques.</p>
            <Accordion styled fluid >
                        <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                    >
                    <Icon name='dropdown' />
                    Parquet Chene
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <Image src="img/revetement/revetement sol 15.jpg"size="larg"centered/>
                    <Segment>
                        <h1 style={shadow}>Le parquet</h1>
                    </Segment>
                            <p style={{backgroundColor: "whitesmoke" }}><strong>Le parquet est un investissement dans la durée. Il résiste au temps et peut être rénové plusieurs
                            fois (ponçage, vitrificateur ou huile).Il existe plusieurs types de finitions pour le parquet.
                            <ul>
                                <li>Sans finition (brut) : permet d'être personnalisé (cire, huile, vitrificateur, peinture).</li>
                                <li>Vitrifié ou verni : aspect brillant ou mat, facile d’entretien, résistant, limite les rayures et
                                    les tâches.</li>
                                <li>Huilé : aspect authentique et mat, entretien régulier mais simple.</li>
                                <li>Cirée : finition traditionnelle, esthétique, entretien plus délicat.</li>
                            </ul>
                                Un parquet à larges lames permet d'agrandir la pièce. Les lames fines allongent visuellement la
                                pièce ou lui donnent du cachet.</strong>
                        </p>
                </Accordion.Content>

                <Accordion.Title 
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                    >
                    <Icon name='dropdown' />
                    Stratifié
                </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                                <Image src="img/revetement/revetement sol 12.jpg"size="larg"centered/>
                                <Segment>
                                    <h1 style={shadow}>Le sol stratifié</h1>
                                </Segment>
                                <p style={{ backgroundColor: "whitesmoke" }}><strong>Le sol stratifié est un revêtement de sol composé d'un support de fibres de bois et d'un décor
                                    imprimé sur du papier et revêtu d'un film de protection.<br />
                                    Le stratifié permet tout type de styles (effets de veinage à la patine, grand choix de coloris,
                                    aspect blanchi, métal ou béton ciré).<br />
                                    Des formats variés : en lames standard ou larges, en dalles (effet béton ou imitation carrelage).<br />
                                    il existe plusieurs niveaux de résistance aux chocs, au poinçonnement, rayures et produits chimiques.
                                </strong></p>
                    </Accordion.Content>

                <Accordion.Title 
                    active={activeIndex === 2}
                    index={2}
                    onClick={this.handleClick}
                    >
                    <Icon name='dropdown' />
                    Sol PVC
                </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <Image src="img/revetement/revetement sol 3.jpg" size="larg" centered />
                        <Segment>
                            <h1 style={shadow}>Le sol PVC</h1>
                        </Segment>
                            <p style={{ backgroundColor: "whitesmoke" }}>
                            Economique, facile à poser et à entretenir, le sol en PVC s'est modernisé en devenant déco 
                            avec ses nombreux coloris, ses motifs originaux et ses imitations de matière. 
                            Idéal pour des locations, des petites pièces ou en rénovation
                            En rouleau, le sol pvc existe en largeur de 2, 3 ou 4 m.
                        </p>
                    </Accordion.Content>
           
                <Accordion.Title  
                    active={activeIndex === 3}
                    index={3}
                    onClick={this.handleClick}
                     >
                    <Icon name='dropdown' />
                     Moquette
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                    <Image src="img/revetement/moquette.jpg" size="larg" centered />
                    <Segment>
                        <h1 style={shadow}>La moquette</h1>
                    </Segment>
                            <p style={{ backgroundColor: "whitesmoke" }}><strong>Chaleureuse, confortable, la moquette est désormais disponible en différentes matières naturelles ou synthétiques,
                        propices au calme et à la relaxation notamment dans les chambres à coucher ou les dressings.<br />
                        Facile à entretenir (aspirateur). Certaines moquettes sont traitées en surface contre les tâches et les salissures.<br />
                        Isolante, elle absorbe les sons, réduit les bruits d'impact et de vibration.<br />
                        Agréable et chaude sous les pieds.<br />
                        Selon l'épaisseur de la moquette, elle peut se poser sur tous les supports et anciens revêtements.</strong>
                    </p>
                  
                </Accordion.Content>

                <Accordion.Title  
                    active={activeIndex === 4}
                    index={4}
                    onClick={this.handleClick}
                    >
                    <Icon name='dropdown' />
                    Carrelage
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 4}>
                            <Image src="img/revetement/carrelage.jpg" size="larg" centered />
                            <Segment>
                                <h1 style={shadow}>Le carrelage</h1>
                            </Segment>
                            <p style={{ backgroundColor: "whitesmoke" }} > Le carrelage est robuste, facile d'entretien et peut embellir toutes les pièces de la maison
                            grâce à une multitude de décors, de styles, de formats et d'aspects proposés.
                                <ul>
                                    <li>Hygiénique, entretien facile.</li>
                                    <li>Résistant dans le temps.</li>
                                    <li>Des formats adaptés à toutes les tailles de pièces : de la mosaïque au format XXL. Carrés,
                                        rectangulaires, octogonaux.</li>
                                    <li>Des couleurs et aspects selon les goûts : des tons pastels et clairs (beige, gris, grège)
                                        aux tonalités les plus sombres (ex : ardoise) sans oublier les carrelages imitation matières
                                        (béton, bois, pierre…).</li>
                                </ul>
                            </p>
                </Accordion.Content>
            </Accordion>
        </Container>
            </Layout>
        )
    }
}