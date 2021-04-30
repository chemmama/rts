import React from "react";
import Renove from "../pages/Renove"
import Cee from "../pages/Cee"
import Anah from "../pages/Anah"
import EcoPret from "../pages/EcoPret"
import Adme from "../pages/Adme"
import IndexRenove from"../pages/IndexRenove"
import PropTypes from 'prop-types';
import Layout from "../components/MyLayout"
export default class Partenaire extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { mobile } = this.props
        return (
            <Layout>
             <IndexRenove/>
             <Cee mobile/>
             <Anah/> 
             <EcoPret/> 
             <Adme/>  
            </Layout>
        )
    }
}
