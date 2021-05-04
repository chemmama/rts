import React from "react";
import { Container, Image, Card, Grid ,Button} from 'semantic-ui-react'
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


class IndexQualification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    

    render() {
        const { mobile } = this.props

        const shadow =
        {
            color: 'white',
            textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
            textAlign: "center",
            fontFamily: "verdana",
            fontSize: mobile ? 22 : 32
        }

    return (
        <Layout>
            <Container style={{ textAlign: 'center' }}>
                <h1 style={shadow}>Nos qualifications RGE et Partenaires</h1>
                    <Image src="img/marque.jpg" centered spaced/>
                    <Image src='img/rge/Bandeau-RGE-chantier-par-chantier.png' spaced size="medium" />
                        <Grid divided='vertically'>
                            <Grid.Row columns={mobile ? 2 : 4}>
                                <Grid.Column>
                                    <Card>
                                        <Image src='img/rge/logo-QualiPAC-2021-RGE.png' wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Chauffage et ECS</Card.Header>

                                            <Card.Description>
                                                <strong style={{ color: "purple" }}>QualiPAC, la qualification RGE pour l'installation de pompes à chaleur</strong><br /><br /><br /><br /><br />
                                            </Card.Description>
                                        </Card.Content>

                                    </Card>
                                </Grid.Column>


                                <Grid.Column>
                                    <Card>
                                        <Image src='img/rge/logo-QualiPV-2021-RGE.png' wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>QualiPV</Card.Header>
                                            <Card.Description>
                                                <strong style={{ color: "blue" }}>QualiPV, la qualification de l'installation des systèmes solaires photovoltaïques</strong><br /><br /><br /><br />

                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>

                                <Grid.Column>
                                    <Card>
                                        <Image src='img/rge/logo-Qualisol-2021-RGE.png' wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Qualisol</Card.Header>
                                            <Card.Description>
                                                <strong style={{ color: 'orangered' }}>Qualisol, la qualification RGE de l'installation de systèmes solaires thermiques</strong><br /><br /><br /><br/>

                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>

                                <Grid.Column>
                                    <Card>
                                        <Image src='img/rge/qualibat.png' />
                                        <Card.Content>
                                            <Card.Header>Qualibat</Card.Header>
                                            <Card.Description><strong style={{color:"blueviolet"}}>
                                                A travers nos labels de qualification et de certification, 
                                                nous valorisons une sélection d’entreprises de toutes spécialités 
                                                et de toutes tailles ayant fait preuve de leurs compétences et de 
                                                leur savoir-faire.</strong>
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </Container>
            </Layout>
        )
    }
}
class GreatherQualification extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media greaterThan='mobile'>
                <IndexQualification />
            </Media>
        )
    }
}

class MobileQualification extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media between={["mobile", "tablet"]}>
                <IndexQualification mobile />
            </Media>
        )
    }
}

export default class Qualification extends React.Component {

    render() {
        return (
            <div>
                <MediaContextProvider>
                    <GreatherQualification  >{this.props.children}</GreatherQualification >
                    <MobileQualification >{this.props.children}</MobileQualification >
                </MediaContextProvider>
            </div>
        )
    }
}

