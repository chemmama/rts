import React from 'react'
import { createMedia } from '@artsy/fresnel'
import {Container, Icon, Image, Menu,Segment, Sidebar, Visibility} from 'semantic-ui-react'
import PropTypes from 'prop-types';
import Mobile from "./Mobile.js"

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        sm: 0,
        md: 768,
        lg: 1024,
        xl: 1192
    }
})

const html = ''

class DesktopContainer extends React.Component {
    state = {}
    state = { activeItem: 'Pompe a chaleur' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state
        const { activeItem } = this.state

        return (
            <Container fluid>
                <Media greaterThan='lg'>
                    <Visibility
                        once={false}
                        onBottomPassed={this.showFixedMenu}
                        onBottomPassedReverse={this.hideFixedMenu}
                    >
                        <Segment textAlign='center'vertical>
                            <Menu compact size='small' stackable>
                                <Image src="img/ecolo/logo.png" size="small"/>    
                                <Container>
                                    <Menu.Item position='left'>
                                        <Menu.Item  
                                            name='Home' href="#essai"
                                            active={activeItem === 'Home'}
                                            onClick={this.handleItemClick} />
                                        </Menu.Item>
                                        <Menu.Item position='right'>
                                        <Menu.Item
                                            name='Pourquoi' href={"#pourquoi" + html}
                                            active={activeItem === 'Pourquoi'}
                                            onClick={this.handleItemClick} />
                                        <Menu.Item
                                            name='Dispositif' href={"#dispositf" + html}
                                            active={activeItem === 'Dispositif'}
                                            onClick={this.handleItemClick} />
                                        <Menu.Item
                                            name='Mission' href={"#mission"+html}
                                            active={activeItem === 'mission'}
                                            onClick={this.handleItemClick} />
                                        <Menu.Item
                                            name='Partenaires' href={"#partenaires"+ html}
                                            active={activeItem === 'partenaires'}
                                            onClick={this.handleItemClick} />
                                         
                                        <Menu.Item
                                            name="Contact" href={"#Contactez nous" + html}
                                            active={activeItem === 'Contact'}
                                            onClick={this.handleItemClick} />
                                    </Menu.Item>
                                </Container>
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
            <Media as={Sidebar.pushable} between={["sm", "xl"]}>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation='push'
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={sidebarOpened}
                    >
                         
                        <Menu.Item
                            name='Home' href="/"
                            active={activeItem === 'Home'}
                            onClick={this.handleItemClick} />
                        <Menu.Item
                            name='Pourquoi' href={"/Pourquoi" + html}
                            active={activeItem === 'Pourquoi'}
                            onClick={this.handleItemClick} />
                        <Menu.Item
                            name='Qui sommes nous' href={"/QuiSommesNous" + html}
                            active={activeItem === 'Qui Somme Nous'}
                            onClick={this.handleItemClick} />
                        <Menu.Item
                            name='telecharger le reglement' href={"/Download" + html}
                            active={activeItem === 'telecharger le reglement'}
                            onClick={this.handleItemClick} />
                        <Menu.Item
                            name="Contact" href={"/Contactez" + html}
                            active={activeItem === 'Contact'}
                            onClick={this.handleItemClick} />
                    </Sidebar>
                    <Sidebar.Pusher dimmed={sidebarOpened}>
                        <Segment
                            
                            textAlign='center'
                            style={{ minHeight: 250, padding: '0.5em 0em' }}
                            vertical

                        >
                            <Container>
                                <Menu inverted pointing secondary size='tiny'>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar' />
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