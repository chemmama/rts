import React from 'react'
import { createMedia } from '@artsy/fresnel'
import {Container, Icon, Image, Menu,Segment, Sidebar, Visibility} from 'semantic-ui-react'
import PropTypes from 'prop-types';
import Mobile from "../pages/Mobile.js"


const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
        ecran: 1192
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
                                            name='Interet' href={"#interet" + html}
                                            active={activeItem === 'Interet'}
                                            onClick={this.handleItemClick} />
                                        <Menu.Item
                                            name='Les dispositifs' href={"#dispositif" + html}
                                            active={activeItem === 'Les dispositifs'}
                                            onClick={this.handleItemClick} />
                                        <Menu.Item
                                            name='Notre mission' href={"#mission"+html}
                                            active={activeItem === 'Notre mission'}
                                            onClick={this.handleItemClick} />
                                        <Menu.Item
                                            name='Nos partenaires' href={"#partenaires"+ html}
                                            active={activeItem === 'Nos partenaires'}
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
            <Media as={Sidebar.pushable} between={["module", "tablet"]}>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation='push'
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={sidebarOpened}
                    >
                        <Menu.Item
                            name='Home' href="/"
                            active={activeItem === 'Home'}
                            onClick={this.handleItemClick} />
                        <Menu.Item
                            name='Interet' href={"#interet" + html}
                            active={activeItem === 'Interet'}
                            onClick={this.handleItemClick} />
                        <Menu.Item
                            name='Les dispositifs' href={"#aide" + html}
                            active={activeItem === 'Les dispositifs'}
                            onClick={this.handleItemClick} />
                        <Menu.Item
                            name='Notre mission' href={"#mission" + html}
                            active={activeItem === 'Notre mission'}
                            onClick={this.handleItemClick} />
                        <Menu.Item
                            name="Nos partenaires" href={"#partenaire" + html}
                            active={activeItem === 'Nos partenaires'}
                            onClick={this.handleItemClick} />
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
                            <Mobile mobile/>
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