import React from 'react'
import { createMedia } from '@artsy/fresnel'
import { Container, Icon, Image, Menu, Segment, Sidebar, Visibility,Dropdown } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import Mobile from "../pages/Mobile.js"
import Link from "next/link"

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
        ecran: 1192
    }
})

const shadow =
{
    color: 'white',
    textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
    fontFamily: "Comic Sans MS",
    fontSize: 25
}

const shadow2 =
{
    color: 'white',
    textShadow: '2px 2px 4px #000000',
    textAlign: "center",
    fontFamily: "Comic Sans MS",
    fontSize: 11
}

const html = ''
const {color}="red"

class DesktopContainer extends React.Component {

    state = { activeItem: '' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
   
   
    render() {
        const { children } = this.props
        const { activeItem } = this.state
        const {color}=this.props

        DesktopContainer.propTypes = {
            children: PropTypes.node,
        }

        return (
            <Container fluid>
                <Media greaterThan='mobile'>
                    <Visibility
                        once={false}
                        onBottomPassed={this.showFixedMenu}
                        onBottomPassedReverse={this.hideFixedMenu}
                    >
                        <Segment textAlign='center' vertical style={{backgroundColor:'lightgrey'}}>
                            <Menu style={{ backgroundColor: 'whitesmoke' }} compact icon='labeled'>
                                
                                <Menu.Item>
                                <Image src='img/ecolo/rts.png'
                                    as='a'
                                    size='tiny'
                                    href='/'
                                    position='left'
                                />
                                </Menu.Item>
                                 
                                 
                                 <Menu.Item inverted position="left" style={shadow}
                                    name='Rénovation Tertiaire Service' 
                                   
                                />


                                <Menu.Item
                                    name='Nettoyage' href="/Nettoyage" style={{ fontWeight:"bold"}}
                                    active={activeItem === 'Nettoyage'}
                                    onClick={this.handleItemClick}
                                >
                                    <Image src="img/new1.png" size="mini"/>
                                       Nettoyage
                                </Menu.Item>

                                <Dropdown item text='R.G.E'simple position="right" style={{fontWeight:"bold"}}>
                                    <Dropdown.Menu>
                                        <Dropdown.Item Link href="/Pac">Pac air eau</Dropdown.Item>
                                        <Dropdown.Item Link href="/Ite">Isolation exterieur</Dropdown.Item>
                                        <Dropdown.Item Link href="/Iti">Isolation interieur</Dropdown.Item>
                                        <Dropdown.Item Link href="/Climatisation">Pac air air</Dropdown.Item>
                                        <Dropdown.Item Link href="/Photovoltaique">Photovoltaique</Dropdown.Item>
                                        <Dropdown.Item Link href="/BallonSolaire">Ballon Solaire</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown item text='Le Batiment' simple position="right" style={{ fontWeight: "bold" }} >
                                    <Dropdown.Menu>
                                        <Dropdown.Item Link href="/Electricite">Electricité</Dropdown.Item>
                                        <Dropdown.Item Link href="/Plomberie">Plomberie</Dropdown.Item>
                                        <Dropdown.Item Link href="/Revetement">Revetement sol</Dropdown.Item>
                                        <Dropdown.Item Link href="/Cloison">Cloison bureau</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                
                                <Menu.Item position="right" style={{fontWeight: "bold" }}
                                    name='Nos Partenaires' href="/Partenaire"
                                    active={activeItem === 'Nos Partenaires'}
                                    onClick={this.handleItemClick}
                                />

                                <Menu.Item
                                    name='Qui sommes nous' href="/Mission" style={{fontWeight: "bold" }}
                                    active={activeItem === 'Qui sommes nous'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name='Nos Prestations' href="/" style={{fontWeight: "bold" }}
                                    active={activeItem === 'Nos Prestations'}
                                    onClick={this.handleItemClick}
                                />

                                <Menu.Item
                                    name='Qualification' href="/Qualification" style={{fontWeight: "bold" }}
                                    active={activeItem === 'Qualification'}
                                    onClick={this.handleItemClick}
                                />
                            </Menu>
                        </Segment>
                    </Visibility>
                    {children}
                </Media>
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

    render() {
        const { children } = this.props
        const { sidebarOpened, activeItem } = this.state

        MobileContainer.propTypes = {
            children: PropTypes.node,
        }

        return (
            <Media as={Sidebar.pushable} between={["module", "tablet"]}>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation='push'
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={sidebarOpened}
                    >
                        
                        
                        <Menu.Item>
                            <Image src='img/ecolo/rts.png'
                                as='a'
                                size='tiny'
                                href='/'
                                position='left'
                            />
                        </Menu.Item>

                        <Menu.Item inverted position="left" style={shadow}
                            name='Rénovation Tertiaire Service'

                        />
                        <Menu.Item
                            name='Nettoyage' href="/Nettoyage" style={{ fontWeight: "bold" }}
                            active={activeItem === 'Nettoyage'}
                            onClick={this.handleItemClick}
                        />
                        <Dropdown item text='R.G.E' simple position="right" style={{ fontWeight: "bold" }}>
                            <Dropdown.Menu>
                                <Dropdown.Item Link href="/Pac">Pac air eau</Dropdown.Item>
                                <Dropdown.Item Link href="/Ite">Isolation exterieur</Dropdown.Item>
                                <Dropdown.Item Link href="/Iti">Isolation interieur</Dropdown.Item>
                                <Dropdown.Item Link href="/Climatisation">Pac air air</Dropdown.Item>
                                <Dropdown.Item Link href="/Photovoltaique">Photovoltaique</Dropdown.Item>
                                <Dropdown.Item Link href="/BallonSolaire">Ballon Solaire</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown item text='Le Batiment' simple position="right" style={{ fontWeight: "bold" }} >
                            <Dropdown.Menu>
                                <Dropdown.Item Link href="/Electricite">Electricité</Dropdown.Item>
                                <Dropdown.Item Link href="/Plomberie">Plomberie</Dropdown.Item>
                                <Dropdown.Item Link href="/Revetement">Revetement sol</Dropdown.Item>
                                <Dropdown.Item Link href="/Cloison">Cloison bureau</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Menu.Item position="right" style={{ fontWeight: "bold" }}
                            name='Nos Partenaires' href="/Partenaire"
                            active={activeItem === 'Nos Partenaires'}
                            onClick={this.handleItemClick}
                        />

                        <Menu.Item
                            name='Qui sommes nous' href="/Mission" style={{ fontWeight: "bold" }}
                            active={activeItem === 'Qui sommes nous'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Nos Prestations' href="/" style={{ fontWeight: "bold" }}
                            active={activeItem === 'Nos Prestations'}
                            onClick={this.handleItemClick}
                        />

                        <Menu.Item
                            name='Qualification' href="/Qualification" style={{ fontWeight: "bold" }}
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