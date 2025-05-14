import React, { Component } from 'react'
import {Container} from '../components/Container';
import { Helmet } from 'react-helmet';

class About extends Component {
    render(){
        return(
            <Container>
                <Helmet>
                    <title>О нас</title>
                    <meta name = "description" content="Страница с информацией об организации" />
                    <meta name = "keywords" content = "ссылки, текст, информация" />
                </Helmet>
                <div><h2>About</h2></div>
            </Container>
        );
    }
}

export default About