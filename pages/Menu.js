import React from 'react'
import { createMedia } from '@artsy/fresnel'
import { Container, Icon, Image, Menu, Segment, Sidebar, Visibility,Dropdown,Button } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import Mobile from "../pages/Mobile.js"
import Fiche from "./Fiche.js"

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 900,
        computer: 1024,
        ecran: 1192
    }
})

const shadow =
{
    color: 'white',
    textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
    fontFamily: "Comic Sans MS",
    fontSize: 17
}

const shadow2 =
{
    color: 'white',
    textShadow: '2px 2px 4px #000000',
    textAlign: "center",
    fontFamily: "Comic Sans MS",
    fontSize: 11
}

const html =".html"



class DesktopContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.state = { activeItem: '' }
    }
   

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
   
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
    
    handleOpen = () => this.setState({ open: true })
    handleClose = () => this.setState({ open: false })
    
    render() {
        const { children } = this.props
        const { activeItem } = this.state
       

        DesktopContainer.propTypes = {
            children: PropTypes.node,
        }
       
        
        return (
            
            <Container fluid >
                
                <Media greaterThan='mobile'>
                    <Visibility
                        once={false}
                        onBottomPassed={this.showFixedMenu}
                        onBottomPassedReverse={this.hideFixedMenu}
                    >
                        <Segment vertical style={{backgroundColor:'lightgrey'}}>
                            
                            <Menu style={{ backgroundColor: 'whitesmoke' }} stackable fluid>
                                
                                <Menu.Item><Image src='img/ecolo/rts.png'
                                    as='a'
                                    size='tiny'
                                    href='/'
                                   
                                />
                                </Menu.Item>
                                 
                                 
                                 <Menu.Item inverted style={shadow}
                                    name='Rénovation Tertiaire Service' 
                                   
                                />
                                <Menu.Item>
                                    <Button color ="green" inverted onClick={this.handleOpen}>Verifier votre eligibité</Button>
                                </Menu.Item>
                                
                                <Menu.Item position="right"
                                    name='Nettoyage' href={"/Nettoyage"+html} style={{ fontWeight:"bold"}}
                                    active={activeItem === 'Nettoyage'}
                                    onClick={this.handleItemClick}
                                >
                                    <Image src="img/new1.png" size="mini"/>
                                       Nettoyage
                                </Menu.Item>

                                <Dropdown item text='R.G.E'simple style={{fontWeight:"bold"}}>
                                    <Dropdown.Menu>
                                        <Dropdown.Item Link href={"/Pac"+html}>Pac air eau</Dropdown.Item>
                                        <Dropdown.Item Link href={"/Ite"+html}>Isolation exterieur</Dropdown.Item>
                                        <Dropdown.Item Link href={"/Iti"+html}>Isolation interieur</Dropdown.Item>
                                        <Dropdown.Item Link href={"/AirAir"+html}>Pac air air</Dropdown.Item>
                                        <Dropdown.Item Link href={"/Photovoltaique"+html}>Photovoltaique</Dropdown.Item>
                                        <Dropdown.Item Link href={"/BallonSolaire"+html}>Ballon Solaire</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown item text='Le Batiment' simple style={{ fontWeight: "bold" }} >
                                    <Dropdown.Menu>
                                        <Dropdown.Item Link href={"/Electricite"+html}>Electricité</Dropdown.Item>
                                        <Dropdown.Item Link href={"/Plomberie"+html}>Plomberie</Dropdown.Item>
                                        <Dropdown.Item Link href={"/Revetement"+html}>Revetement sol</Dropdown.Item>
                                        <Dropdown.Item Link href={"/Cloison"+html}>Cloison bureau</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                
                                <Menu.Item style={{fontWeight: "bold" }}
                                    name='Nos Partenaires' href={"/Partenaire"+html}
                                    active={activeItem === 'Nos Partenaires'}
                                    onClick={this.handleItemClick}
                                />

                                <Menu.Item
                                    name='Qui sommes nous' href={"/Mission"+html}style={{fontWeight: "bold" }}
                                    active={activeItem === 'Qui sommes nous'}
                                    onClick={this.handleItemClick}
                                />
                            

                                <Menu.Item
                                    name='Qualification' href={"/Qualification"+html} style={{fontWeight: "bold" }}
                                    active={activeItem === 'Qualification'}
                                    onClick={this.handleItemClick}
                                />
                                
                            </Menu>
                            
                        </Segment>
                    </Visibility>
                    {children}
                </Media>
               {this.state.open===true?<Fiche open={this.state.open} onHide={() => this.handleClose()}/>:null}
             
            </Container>

        )
    }
}

class MobileContainer extends React.Component {
    state = {}
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handleSidebarHide = () => this.setState({ sidebarOpened: false })
    
    handleToggle = () => this.setState({ sidebarOpened: true })
    
    handleOpen = () => this.setState({ open: true })
    handleClose = () => this.setState({ open: false })
   
    render() {
        const { children } = this.props
        const { sidebarOpened, activeItem } = this.state

        MobileContainer.propTypes = {
            children: PropTypes.node,
        }

        return (
            <Media as={Sidebar.pushable} between={["mobile", "tablet"]}>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation='push'
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={sidebarOpened}
                    >
                        <Menu.Item>
                            <Button color="green" inverted onClick={this.handleOpen}>Verifier votre eligibité</Button>
                        </Menu.Item>
                        <Menu.Item
                            name='Nettoyage' href={"/Nettoyage" + html} style={{ fontWeight: "bold" }}
                            active={activeItem === 'Nettoyage'}
                            onClick={this.handleItemClick}
                        >
                            <Image src="img/new1.png" size="mini" />
                                       Nettoyage
                        </Menu.Item>

                        <Dropdown item text='R.G.E' pointing="left" style={{ fontWeight: "bold" }}>
                            <Dropdown.Menu>
                                <Dropdown.Item Link href={"/Pac" + html}>Pac air eau</Dropdown.Item>
                                <Dropdown.Item Link href={"/Ite" + html}>Isolation exterieur</Dropdown.Item>
                                <Dropdown.Item Link href={"/Iti" + html}>Isolation interieur</Dropdown.Item>
                                <Dropdown.Item Link href={"/AirAir" + html}>Pac air air</Dropdown.Item>
                                <Dropdown.Item Link href={"/Photovoltaique" + html}>Photovoltaique</Dropdown.Item>
                                <Dropdown.Item Link href={"/BallonSolaire" + html}>Ballon Solaire</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown item text='Le Batiment'pointing="left" style={{ fontWeight: "bold" }} >
                            <Dropdown.Menu>
                                <Dropdown.Item Link href={"/Electricite" + html}>Electricité</Dropdown.Item>
                                <Dropdown.Item Link href={"/Plomberie" + html}>Plomberie</Dropdown.Item>
                                <Dropdown.Item Link href={"/Revetement" + html}>Revetement sol</Dropdown.Item>
                                <Dropdown.Item Link href={"/Cloison" + html}>Cloison bureau</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Menu.Item position="right" style={{ fontWeight: "bold" }}
                            name='Nos Partenaires' href={"/Partenaire" + html}
                            active={activeItem === 'Nos Partenaires'}
                            onClick={this.handleItemClick}
                        />

                        <Menu.Item
                            name='Qui sommes nous' href={"/Mission" + html} style={{ fontWeight: "bold" }}
                            active={activeItem === 'Qui sommes nous'}
                            onClick={this.handleItemClick}
                        />


                        <Menu.Item
                            name='Qualification' href={"/Qualification" + html} style={{ fontWeight: "bold" }}
                            active={activeItem === 'Qualification'}
                            onClick={this.handleItemClick}
                        />
                     
                    </Sidebar>
                    <Sidebar.Pusher dimmed={sidebarOpened}>
                        <Segment

                            textAlign='center'
                            style={{ minHeight: 250, padding: '0.5em 0em' }}
                            vertical

                        >
                            <Container>
                                <Menu inverted secondary size='tiny'>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon circular color='teal' name='sidebar' />
                                    </Menu.Item>
                                </Menu>
                            </Container>
                            <Mobile mobile />
                            {this.state.open === true ? <Fiche open={this.state.open} onHide={() => this.handleClose()} /> : null}
                        </Segment>
                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Media>
        )
    }
}

const MyMenu = ({ children }) => (
    <div>
        <MediaContextProvider>
            <DesktopContainer>{children}</DesktopContainer>
            <MobileContainer>{children}</MobileContainer>
        </MediaContextProvider>
    </div>
)


export default MyMenu