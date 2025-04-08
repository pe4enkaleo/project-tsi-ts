import React, { Component } from 'react'
import {Container} from '../components/Container';
import {Button} from '../components/Button';

export default class Home extends Component {
    render(){
        return(
           <Container>
                    <h2>Home</h2>
                    <div className = "flex gap-4"></div>
                    <Button color="primary" size="large" title = "Подтвердить"/>
                    <Button color="secondary" size="medium" title = "Удалить"/>
                    <div className="w-full h-full bg- flex items-center justify-center">HEllo</div> 
                    
            </Container>
            
        );
    }
}