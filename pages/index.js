import React from 'react'
import Home from "../pages/Home"
import { createMedia } from '@artsy/fresnel'

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
        ecran: 1192
    }
})


class IndexContainer extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media greaterThan='mobile'>
                <Home/>
            </Media>
        )
    }
}

class MobileIndex extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media at='mobile'>
                <Home mobile />
            </Media>
        )
    }
}

export default class Index extends React.Component {

    render() {
        return (
            <div>
                <MediaContextProvider>
                    <IndexContainer >{this.props.children}</IndexContainer>
                    <MobileIndex>{this.props.children}</MobileIndex>
                </MediaContextProvider>
            </div>
        )
    }
}
