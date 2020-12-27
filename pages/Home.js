import React from "react";
import { Container, Button, Image, Grid, Dropdown, Segment, Label, Form, Checkbox, Icon } from 'semantic-ui-react'
import Layout from "../components/MyLayout"


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {proprio:"",salarie:"",chauffage:"",famille:"",fiscalite:"",
                      nom:"",prenom:"",adresse:"",localite:"",email:"",telephone:""};
    }
    handleChange = (e, { name, value }) => this.setState({ [name]: value });
    
    handleSubmit(e) {
        e.preventDefault();
            this.state.proprio === "" ? this.setState({ errorProprio: { content: 'Svp faite un choix', pointing: 'below' }}) : this.setState({ errorProprio: null })
            this.state.salarie === "" ? this.setState({ errorSalarie: { content: 'Svp faite un choix', pointing: 'below' }}) : this.setState({ errorSalarie: null })
            this.state.chauffage === "" ? this.setState({ errorChauffage: { content: 'Svp faite un choix', pointing: 'below'}}) : this.setState({ errorChauffage: null })
            this.state.famille === "" ? this.setState({ errorFamille: { content: 'Svp faite un choix', pointing: 'below' }}) : this.setState({ errorFamille: null })
            this.state.fiscalite === "" ? this.setState({ errorFiscalite: { content: 'Svp faite un choix', pointing: 'below' }}) : this.setState({ errorFiscalite: null })
            hoho
    }
   
    render() {
        const { mobile } = this.props
        return (
            <Layout>
                <Container>
                    <Grid>
                        <Grid.Row centered columns={2}>
                            <Grid.Column style={{ paddingTop: 10, fontFamily: "Comic sans MS" }}>
                                <h1 style={{ fontFamily: "Comic sans MS", color: "green" }}><center>Votre Pompe à chaleur entierement financé par</center></h1>
                                <Image src="img/ecolo/action-logement.png" />
                                <ul>
                                    <li><strong>Réduisez vos factures de 70% </strong>:La pompe à chaleur vous permet de faire des
                                            économies considérables <strong>Elle divise la facture de chauffage par 3 !</strong>
                                    </li>

                                    <li><strong>Fini la pollution</strong>:Passez aux énergies vertes et propres.</li>

                                    <li><strong> Des professionnels Reconnus Grenelle de l’Environnement</strong>, vous ferons
                                                    bénéficier de la Loi de Transition Energétique {this.state.proprio}
                                        </li>
                                </ul>

                                <iframe width="420" height="315"
                                    src="https://www.youtube.com/embed/0m1QWV3vTzo">
                                </iframe>
                                <h2>Nos qualifications</h2>
                                <Image.Group size='tiny'>
                                    <Image src="img/ecolo/engagement-qualite.png" width="auto" height="60" alt="" />
                                    <Image src="img/ecolo/qualipac.png" width="auto" height="60" alt="..." />
                                    <Image src="img/ecolo/garantie-satisfaction.png" width="auto" height="60" alt="..." />
                                </Image.Group>


                            </Grid.Column>

                            <Grid.Column style={{ paddingTop: mobile ? 10 : 20, fontFamily: "Comic sans MS" }}>
                                <Segment color="black">
                                    Dans le cadre de la transition écologique, l'État prend en charge le coût de l’installation de votre pompe à chaleur pour seulement 1€ !<br />
                                    Des milliers de foyers français en ont déjà profité, pourquoi pas vous ?
                                <p style={{ fontFamily: "Comic sans MS", color: "green", fontSize: 30, textAlign: "center" }}>
                                        Vérifiez votre éligibité
                                </p>
                                    <Form onSubmit={e=>this.handleSubmit(e)}>
                                        
                                        <Form.Field clearable 
                                                error={this.state.errorProprio}
                                                required
                                                label="Vous Etes" 
                                                placeholder="----"
                                                fluid
                                                options={proprio}
                                                control={Dropdown}
                                                name="proprio"
                                                onChange={this.handleChange}
                                            
                                            /> 
                                            <Form.Field clearable
                                                error={this.state.errorSalarie}
                                                required    
                                                label="Vous etes salarié"
                                                placeholder="----"
                                                fluid
                                                options={salarie}
                                                control={Dropdown}
                                                name="salarie"
                                                onChange={this.handleChange}
                                            />
                                         
                                            <Form.Field clearable
                                                error={this.state.errorChauffage}
                                                required    
                                                label="Votre type de Chauffage"
                                                placeholder="----"
                                                fluid
                                                options={chauffage}
                                                control={Dropdown}
                                                name="chauffage"
                                                onChange={this.handleChange} 
                                            />
                                            <Form.Field clearable
                                                error={this.state.errorFamille}
                                                required    
                                                label="Nombre de personne vivant dans le foyer"
                                                placeholder="----"
                                                fluid
                                                options={famille}
                                                control={Dropdown}
                                                name="famille"
                                                onChange={this.handleChange}
                                             />
                                            
                                            <Form.Field clearable
                                                error={this.state.errorFiscalite}
                                                required    
                                                label="Revenue fiscal de référence (2020 ou 2019)"
                                                placeholder="----"
                                                fluid
                                                options={fiscalite}
                                                control={Dropdown}
                                                name="fiscalite"
                                                onChange={this.handleChange}
                                             />
                                       
                                        <Form.Group>
                                                <Form.Input 
                                                    required    
                                                    label='Nom' 
                                                    placeholder="Nom"
                                                    width={9}
                                                    name="nom" 
                                                    value={this.state.nom}
                                                    onChange={this.handleChange}
                                                />
                                                <Form.Input 
                                                icon='lock'
                                                iconPosition='left'  
                                                    required    
                                                    label='Prénom' 
                                                    placeholder='Prénom' 
                                                    width={9} 
                                                    name="prenom"
                                                    value={this.state.prenom}
                                                    onChange={this.handleChange}
                                                />
                                        </Form.Group>
                                        <Form.Group>
                                                <Form.Input 
                                                    required 
                                                    icon="adress"
                                                    iconPosition='left'  
                                                    label="Adresse"
                                                    placeholder='Adresse' 
                                                    width={9} 
                                                    name="adresse"
                                                    value={this.state.adresse}
                                                    onChange={this.handleChange}
                                                />
                                                <Form.Input 
                                                    required    
                                                    label='Localité' 
                                                    placeholder='Localité' 
                                                    width={9}
                                                    name="localite"
                                                    value={this.state.localite}
                                                    onChange={this.handleChange}
                                                 />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Input type="email"
                                                required    
                                                label='Email' 
                                                placeholder='contact@gmail.com' 
                                                width={9} 
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                            />
                                            <Form.Input 
                                                required    
                                                label='Telephone' 
                                                placeholder='0698611372' 
                                                width={9}
                                                name="telephone"
                                                value={this.state.telephone}
                                                onChange={this.handleChange}
                                                
                                            />
                                        </Form.Group>
                                        <Form.Field>
                                            <Checkbox label="J'autorise R.T.S à me recontacter pour me communiquer mon statut d'éligibilité" />
                                        </Form.Field>
                                        <Form.Button disabled={this.state.active} fluid type="submit"color="green" ><h2>Vérifier mon éligibilité</h2></Form.Button>
                                    </Form>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                   
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






