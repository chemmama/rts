import React from "react";
import MyMenu from "../pages/Menu.js"
import * as emailjs from 'emailjs-com'


export default class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <head>
                    <title>renovation</title>
                    <meta name="description" content="renovation tertiaire service"/>
                    <meta name="author" content="emile chemmama"/>
                    <meta name="viewport"content="minimum-scale=1,initial-scale=1.0, width=device-width"/>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                    <meta name="keywords" content="pompe a chaleur,plomberie,electricite,salle de bain" />
        
                    
                    <link async rel="stylesheet" link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.0.1/dist/semantic.min.css" />
                    <link rel="stylesheet" href="css/menu.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
                    <script type="text/javascript"src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>
                    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                
                <script type="text/javascript">
                        <script type="text/javascript">
                            (function(){
                                emailjs.init("YOUR_USER_ID")
                             })();
                        </script>
                </script>
                </head>

                 
                <MyMenu />
            </div> 

            
        )
    }
}
