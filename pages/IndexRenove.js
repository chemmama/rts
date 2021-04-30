import React from 'react'
import Renove from "../pages/Renove"
import { createMedia } from '@artsy/fresnel'

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
        ecran: 1192
    }
})


class GreatherRenove extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media greaterThan='mobile'>
                <Renove />
            </Media>
        )
    }
}

class MobileRenove extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Media between={["mobile", "tablet"]}>
                <Renove mobile />
            </Media>
        )
    }
}

export default class IndexPac extends React.Component {

    render() {
        return (
            <div>
                <MediaContextProvider>
                    <GreatherRenove >{this.props.children}</GreatherRenove>
                    <MobileRenove>{this.props.children}</MobileRenove>
                </MediaContextProvider>
            </div>
        )
    }
}
