import React, { Component } from 'react'
import {Container} from '../components/Container';
import { Helmet } from 'react-helmet';
import { Text } from "../components/Text";
import { Input } from "../components/Input";

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
                <Input
                    variant = "outline"
                />
                <Text size = "large" align="right" color = "primary">
                    TEST TEST TEST
                </Text>
                <Text align = "center">
                    Centred Text
                </Text>
                
            </Container>
        );
    }
}

export default About