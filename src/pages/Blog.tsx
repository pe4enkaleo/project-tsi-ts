import React, { Component } from 'react'
import {Container} from '../components/Container';
import { Helmet } from "react-helmet";

class Blog extends Component {
    render(){
        return(
            <Container>
                <Helmet>
                        <title>Блог</title>
                        <meta name = "description" content="Страница с блогами" />
                        <meta name = "keywords" content = "блоги, авторы, список" />
                      </Helmet>
                <div><h2>Blog</h2></div>
            </Container>
        );
    }
}

export default Blog