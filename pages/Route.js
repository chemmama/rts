import React from'react'



export default  class Route extends React.Component {
    static getInitialProps({ pathname }) {
        return { pathname }
    }

componentWillMount() {
    if (typeof window !== 'undefined') {
        console.log('window.location.pathname', window.location.pathname);
        
    }
}

    render() {
        return <div>emile {this.props.pathname}</div>
    }
}