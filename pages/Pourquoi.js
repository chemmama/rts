import React from "react";
import { Card, Image ,Container,Segment} from 'semantic-ui-react' 
import PropTypes from 'prop-types';

export default class Pourquoi extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
      const {mobile}=this.props
      
       
        return (
            <div>
                <Segment>
                    <p style={{
                        fontFamily:"Comic sans MS",
                        textAlign:"center",
                        paddingTop:30,
                        fontSize:30,
                        
                        }}>
                            <blockquote>
                        <strong>Pourquoi choisir le remplacement de votre systeme de chauffage</strong></blockquote></p></Segment>
                <Segment>
                        <Card.Group centered>
                                <Card>
                                    <Image src='img/ecolo/argent-economie.png' wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header 
                                                style={{ 
                                                    textAlign: 'center',
                                                    }}>
                                                    <h2>Les avantages de la pompe à chaleur</h2>
                                            </Card.Header>
                                            <Card.Description style={{
                                                              textAlign: "center", 
                                                              backgroundColor: 'whitesmoke', 
                                                              fontFamily: 'Comic Sans MS',
                                                              lineHeight: 1.5 
                                                              }}>
                                                            <strong><mark>Une faible consommation d’énergie :</mark></strong><br/>
                                                            Pour 1kWh d’électricité consommée pour fonctionner, la pac restitue 3 à 4 kWh de chaleur. 
                                                            Elle permet ainsi de réduire considérablement les dépenses (votre facture de chauffage peut 
                                                            être divisée par 3 à 4 !) <br/>

                                                            <strong><mark>Un confort d’utilisation :</mark></strong><br />
                                                            La pac fonctionne de façon autonome, elle chauffe rapidement et assure une température stable
                                                            dans toutes les pièces<br/> 

                                                            <strong><mark>Une pose simple :</mark></strong><br />
                                                            La pac air eau peut se raccorder sur l’installation de chauffage existante ou sur un plancher 
                                                            chauffant<br/> 

                                                            <strong><mark>Pas de rejets :</mark></strong><br />
                                                            Ce système de chauffage ne rejette pas de fumées dans l’atmosphère, 
                                                            il n’y a donc aucune problématique de conduit d’évacuation à prévoir <br/>

                                                            <strong><mark>Un seul appareil pour tous vos besoins :</mark></strong><br />
                                                            Le système va produire le chauffage et l’eau chaude et pourra également rafraichir vos pièces
                                                            en période estivale (si vous optez pour un modèle réversible)<br/> 
                                                </Card.Description>
                                        </Card.Content>
                                </Card>
                                        
                                        
                                            <Card>
                                                <Image src='img/ecolo/ecologie.png' wrapped ui={false}/>
                                                    <Card.Content>
                                                        <Card.Header style={{ textAlign: 'center' }}><h2>Ecologie</h2></Card.Header>
                                                            <Card.Description style={{
                                                                        textAlign: "center", backgroundColor: 'whitesmoke', fontFamily: 'Comic Sans MS',
                                                                        lineHeight:1.5}}>
                                                                <br/>
                                                                <strong><mark>L'impact environnemental des pompes à chaleur</mark></strong><br/>
                                                                Le fonctionnement d’une PAC repose sur l’usage des énergies renouvelables. 
                                                                Elle utilise les calories présentes dans l’air extérieur pour chauffer le logement. 
                                                                Ces dernières ne sont pas polluantes. En fonction du coefficient de performance (COP), 
                                                                la consommation d’énergie pour chauffer l’habitation sera fortement réduite.<br/>

                                                                <strong><mark> Peu de rejets dans l'atmosphère</mark></strong><br />
                                                                La pompe à chaleur n’exploite pas directement de fioul, gaz ou autre combustible fossile. 
                                                                Les rejets de CO2 sont relativement 
                                                                faibles par rapport à une chaudière classique. Ceux de NOx (oxydes d'azote) sont inexistants. 
                                                                <br/>
                                                                <strong><mark>La pompe à chaleur air eau:</mark></strong><br />
                                                                une solution écologique et économique 
                                                                Comme nous venons de le voir, les PAC préservent globalement les ressources de la planète. Elles
                                                                sont, pour l’heure, un mode de chauffage écoresponsable. De plus, les innovations futures
                                                                amélioreront encore davantage l’empreinte environnementale de ces appareils.

                                                        </Card.Description>
                                                    </Card.Content>
                                            </Card>
                                     
                                       
                                            <Card>
                                                <Image src='img/ecolo/france.png' wrapped ui={false}/>
                                                    <Card.Content>
                                                        <Card.Header style={{ textAlign: "center" }}><h2>Subvention</h2></Card.Header>
                                                        <Card.Description style={{textAlign: "center", backgroundColor: 'whitesmoke',fontFamily:'Comic Sans MS',
                                                                                    lineHeight:1.5 }}>
                                                            <br/>
                                                            <strong><mark>Action Logement : Nouvelle aide pour les salariés du privé</mark></strong><br />
                                                            L’organisme Action Logement, propose une nouvelle aide : une aide pour financer l’Installation de 
                                                            votre Pompe à Chaleur. 
                                                            Cette aide est attribuée aux propriétaires ou locataire. L’aide à la rénovation énergétique d’Action Logement 
                                                            a pour objectif
                                                            de couvrir l’intégralité du coût des travaux, et son montant est plafonné à 20 000€.
                                                            C’est grâce à cette aide qui apparaît fin 2020 que cette pompe à chaleur peut aujourd’hui vous être proposée à un euro symbolique !
                                                            Cumulez plusieurs aides travaux ! De plus, vous aurez la possibilité de cumuler cette aide avec les différentes primes & aides déjà existantes.
                                                        </Card.Description>
                                                    </Card.Content>
                                            </Card>
                        </Card.Group>
                </Segment>
            </div>

        )
    }
}
