import React from 'react'
import PourquoiPac from "./PourquoiPac"
import { createMedia } from '@artsy/fresnel'

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
        ecran: 1192
    }
})


class GreatherPourquoi extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media greaterThan='mobile'>
                <PourquoiPac />
            </Media>
        )
    }
}

class MobilePourquoi extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media between={["mobile", "tablet"]}>
                <PourquoiPac mobile />
            </Media>
        )
    }
}

export default class IndexPac extends React.Component {

    render() {
        return (
            <div>
                <MediaContextProvider>
                    <GreatherPourquoi >{this.props.children}</GreatherPourquoi>
                    <MobilePourquoi>{this.props.children}</MobilePourquoi>
                </MediaContextProvider>
            </div>
        )
    }
}
