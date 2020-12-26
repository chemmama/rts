import React from 'react'
import Home from "./Home"
import { createMedia } from '@artsy/fresnel'
 
const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    }
})

class IndexContainer extends React.Component {
    constructor() {
        super()
       
    }
  
    render() {
        return (
            <Media greaterThan='mobile'>
                <Home />
            </Media> 
        )
    }
}


class MobileIndex extends React.Component {
    constructor() {
        super()
         
    }
     
    render() {
        const { children } = this.props
        return (

            <Media at='mobile'>
                <Home mobile />
            </Media>
        )
    }
}

class Index extends React.Component {
     
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
export default Index