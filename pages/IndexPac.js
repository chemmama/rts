import React from 'react'
import Pac from "../pages/Pac"
import { createMedia } from '@artsy/fresnel'

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
        ecran: 1192
    }
})


class GreatherPac extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media greaterThan='mobile'>
                <Pac />
            </Media>
        )
    }
}

class MobilePac extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media  between={["mobile", "tablet"]}>
                <Pac mobile />
            </Media>
        )
    }
}

export default class IndexPac extends React.Component {

    render() {
        return (
            <div>
                <MediaContextProvider>
                    <GreatherPac >{this.props.children}</GreatherPac>
                    <MobilePac>{this.props.children}</MobilePac>
                </MediaContextProvider>
            </div>
        )
    }
}
