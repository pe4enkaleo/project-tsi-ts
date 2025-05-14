import React, { Component, useState } from 'react'
import {Container} from '../components/Container';
import {Button} from '../components/Button';
import './Home.css';

interface Item {
    id: number;
    title: string;
    description: string;
    price: string;
}
interface HomeState{
    items: Item[];
    isModalOpen: boolean;
    newItem: Omit<Item, 'id'>;
}

export default class Home extends Component<{}, HomeState> {
    constructor(props: {}){
        super(props);

        this.state = {
            items: [
                {
                    id: 1,
                    title: "Название товара",
                    description: "Описание товара",
                    price: "5000"
                }
            ],
            isModalOpen: false,
            newItem:{
                title: "",
                description: "",
                price: ""
            }
        };
    }
    handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            newItem: {
                ...prevState.newItem,
                [name]: value
            }
        }));
    };
    handleAddItem = () => {
        const {newItem} = this.state;

        if(newItem.title && newItem.description && newItem.price){
            const itemWithId: Item = {
                ...newItem,
                id: Date.now()
            };
            this.setState(prevState => ({
                items: [...prevState.items, itemWithId],
                newItem: {
                    title: "",
                    description: "",
                    price: ""
                },
                isModalOpen: false
            }));
        }
    };

    render(){
        const { items, isModalOpen, newItem } = this.state;
        return(
           <Container>
            <h2>Home</h2>
            <h1>Список товаров</h1>
      
            <button onClick={() => this.setState({isModalOpen: true})} className="add-button">     
                Добавить товар
            </button>
                    <div className = "flex gap-4"></div>
                    {isModalOpen && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <h2>Добавить новый товар</h2>
                                
                                <div className="form-group">
                                    <label>Название: </label>
                                    <input 
                                        type = "text"
                                        name = "title"
                                        value = {newItem.title}
                                        onChange = {this.handleInputChange}
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label>Описание: </label>
                                    <textarea
                                        name = "description"
                                        value = {newItem.description}
                                        onChange={this.handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Цена: </label>
                                    <input
                                        type = "text"
                                        name = "price"
                                        value = {newItem.price}
                                        onChange = {this.handleInputChange}
                                    />
                                </div>
                                <div className="modal-actions">
                                    <button onClick = {() => this.setState({isModalOpen: false})}>Отмена</button>
                                    <button onClick={this.handleAddItem}>Добавить</button>
                                </div>
                            </div>
                        </div>
                        
                    )}

                    <div className="items-list">
                        {items.map(item => (
                            <ItemItem key = {item.id} item = {item} />
                        ))}
                    </div>



                    
                    {/* <div className="w-full h-full bg- flex items-center justify-center">HEllo</div>  */}
            </Container>
            
        );
    };
}
const ItemItem = ({ item }: { item: Item }) => {
    return(
        <div className = "item-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="price">Цена: {item.price} руб.</p>
        </div>
    )
}