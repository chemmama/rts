import React from "react";
import { Container, Header, Image, Grid } from 'semantic-ui-react'
import { Animated } from "react-animated-css";

//menu mobile
export default class Mobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { mobile } = this.props
        return (
            <Container text>
                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={5000} animationOutDuration={1000} isVisible={true}>
                    <Image src="img/ecolo/rts.png" size="small" centered />
                    <Header
                        as='h1'
                        content='Rénovation Tertiaire service'
                        color="green"
                        style={{
                            fontSize: mobile ? '2em' : '4em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                            marginTop: mobile ? '0' : '1em',
                            textDecoration: "underline",
                            textAlign: "center"
                        }}
                    />
                    <Header
                        as='h2'
                        content='Vos projets entierement financé'
                        inverted
                        style={{
                            fontSize: mobile ? '0.7em' : '1em',
                            fontWeight: 'normal',
                            marginTop: mobile ? '0.5em' : '0.5em',
                            textAlign: "center",
                            color: 'black'
                        }}
                    />
                </Animated>
            </Container>

        )
    }

}

