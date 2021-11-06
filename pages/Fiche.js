import React,{Children} from 'react';
import {Header,Modal,Form, Dropdown, Checkbox,Segment} from 'semantic-ui-react'
import * as emailjs from 'emailjs-com'
import PropTypes from 'prop-types';
import { Animated } from "react-animated-css";
export default class Fiche extends React.Component {
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
        this.state.salarie === undefined  ? this.setState({ errorSalarie: { content: "", pointing: null } }) : this.setState({ errorSalarie: null })
        this.state.chauffage === undefined ? this.setState({ errorChauffage: { content: "", pointing: null } }) : this.setState({ errorChauffage: null })
        this.state.famille === undefined  ? this.setState({ errorFamille: { content: "", pointing: null } }) : this.setState({ errorFamille: null })
        this.state.fiscalite === undefined  ? this.setState({ errorFiscalite: { content: "", pointing: null } }) : this.setState({ errorFiscalite: null })
        this.state.proprio === undefined ? alert("Selectionnez Proprietaire ou locataire ?") :
        this.state.salarie === undefined  ? alert("Selectionnez votre type de salaire") :
        this.state.chauffage === undefined  ? alert("Selectionnez votre type de chauffage"): 
        this.state.famille === undefined  ? alert("Selectionnez nombre de personne") :
        this.state.fiscalite === undefined ? alert("Selectionnez votre revenu fiscal") :this.dataContact()
    } 
   

    dataContact() {
        const { proprio, salarie, chauffage, famille, fiscalite,
            nom, prenom, adresse, localite, email, telephone } = this.state

        let templateParams = {
            from_name: email,
            proprio: proprio,
            salarie: salarie,
            chauffage: chauffage,
            famille: famille,
            fiscalite: fiscalite,
            to_name: nom,
            prenom: prenom,
            adresse: adresse,
            localite: localite,
            email: email,
            telephone: telephone
            

        }
        emailjs.send('my_Gmail', 'eligibilite', templateParams, 'user_O4rTmyvCyhnUYTJrczkMv')
            .then((result) => {
                alert(result.text);
            }, (error) => {
                alert(error.text);
            });
            this.state.proprio= "", this.state.salarie ="", this.state.chauffage ="", this.state.famille =""
            this.state.fiscalite =""
            this.state.nom = "", this.state.prenom = "", this.state.adresse = "", this.state.localite = "", this.state.email = "",
            this.state.telephone = ""
        }
       
        handleOpen = () => this.setState({ modalOpen: true })
        handleClose = () => this.setState({ modalClose:false }) 
     
        render() {
        const { children } = this.props
        const { mobile } = this.props
        
        Fiche.propTypes = {
                mobile: PropTypes.bool
            }
        
        const open=this.props.open
        
        
        return (
         
            <Segment inverted>
            <Modal 
                open={open}
                onClose={this.props.handleClose}
                basic  
            >
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={5000} animationOutDuration={1000} isVisible={true}>
                <Form.Button color='greylight' fluid onClick={this.props.onHide} inverted style={{
                        fontSize: mobile ? 15 : 20}}>Fermer
                </Form.Button>
                
                <Header style={{color:"white"}}>
                    Dans le cadre de la transition écologique, l'État prend en charge le coût de l’installation de<br />
                    Des milliers de foyers français en ont déjà profité, pourquoi pas vous ?
                   
                    <p style={{ color: 'red' }}>* saisie obligatoire</p>
                </Header>   

                <Modal.Content>
                    <p style={{ fontFamily: "Comic sans MS", fontSize: 30, textAlign: "center" }}>
                        Vérifiez votre éligibité</p>
                </Modal.Content>
                
                <Modal.Description style={{ color: 'lightgrey' }}>
                    <Form inverted onSubmit={e => this.handleSubmit(e)}>
                        
                        <Form.Field 
                            error={this.state.errorProprio}
                            required
                            label="Vous Etes"
                            placeholder="----" style={{ color: "yellow" }}
                            fluid
                            options={proprio}
                            control={Dropdown}
                            name="proprio"
                            onChange={this.handleChange}
                          
                        />
                            <Form.Field
                                error={this.state.errorSalarie}
                                required
                                label="Vous Etes salarié dans"
                                placeholder="----"style={{color:"yellow"}}
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
                            placeholder="----" style={{ color: "yellow" }}
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
                            placeholder="----" style={{ color: "yellow" }}
                            fluid
                            options={famille}
                            control={Dropdown}
                            name="famille"
                            onChange={this.handleChange}
                        />

                        <Form.Field clearable
                            error={this.state.errorFiscalite}
                            required
                            label="Revenue fiscal de référence "
                            placeholder="----" style={{ color: "yellow" }}
                            fluid
                            options={fiscalite}
                            control={Dropdown}
                            name="fiscalite"
                            onChange={this.handleChange}
                        />

                        <Form.Group>
                            <Form.Input
                                icon='user'
                                iconPosition='left'
                                required
                                label='Nom'
                                placeholder="----" 
                                width={9}
                                name="nom"
                                value={this.state.nom}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                icon='user'
                                iconPosition='left'
                                required
                                label='Prénom'
                                placeholder='----'  
                                width={9}
                                name="prenom"
                                value={this.state.prenom}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Input
                                icon='home'
                                iconPosition='left'
                                required
                                label="Adresse"
                                placeholder='----'  
                                width={9}
                                name="adresse"
                                value={this.state.adresse}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                icon='street view'
                                iconPosition='left'
                                required
                                label='Localité'
                                placeholder='----'  
                                width={9}
                                name="localite"
                                value={this.state.localite}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input type="email"
                                icon='at'
                                iconPosition='left'
                                required
                                label='Email'
                                placeholder='contact@gmail.com' 
                                width={9}
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                icon='text telephone'
                                iconPosition='left'
                                required
                                label='Telephone'
                                placeholder='----'  
                                width={9}
                                name="telephone"
                                value={this.state.telephone}
                                onChange={this.handleChange}
                            />
                        </Form.Group><br /><br />
                        <Form.Field>
                            <Checkbox label="J'autorise R.T.S à me recontacter pour me communiquer mon statut d'éligibilité" />
                        </Form.Field><br /><br />
                        
                        <Form.Button fluid type="submit" color="green" style={{
                            fontSize: mobile ? 15 : 20}}>Vérifier mon éligibilité
                        </Form.Button>
                    </Form>
                    
                    <Form.Button color='greylight' fluid onClick={this.props.onHide} inverted style={{
                        fontSize: mobile ? 15 : 20}}>
                        Fermer
                   </Form.Button>
                </Modal.Description>
               </Animated>
            </Modal> 
           </Segment> 
            
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













/* 

 show = () => this.setState({ open: true })
    handleConfirm = () => this.setState({ open: false })
    handleCancel = () => this.setState({ open: false })

render() {

    return (
        <div>
            <Button onClick={this.show}>Show</Button>
            <Confirm
                open={this.state.open}
                header='This is a custom header'
                onCancel={this.handleCancel}
                onConfirm={this.handleConfirm}
            />
        </div>
    )
}
}*/