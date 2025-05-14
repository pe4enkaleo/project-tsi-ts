import React, { Component, useState } from 'react'
import {Container} from '../components/Container';
import {Button} from '../components/Button';
import './Home.css';
import { Helmet } from 'react-helmet';

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
    loading: boolean;
    error: string | null;
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
            },
            loading: true,
            error: null
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
    handleAddItem = async () => {
        const {newItem} = this.state;

        if(!newItem.title || !newItem.description || !newItem.price){
            this.setState({ error: 'Введите данные во всех полях!'});
        }
        try {
            const response = await fetch('http://localhost:5000/api/products', {
                method: 'POST',
                headers: {
                    'Conte-Type': 'application/json',
                },
                body: JSON.stringify(newItem)
            });
            if(!response.ok){
                throw new Error('HTTP error! status: &{response.status}');
            }
            const addedItem = await response.json();

            this.setState(prevState => ({
                items: [...prevState.items, addedItem],
                newItem: {
                    title: '',
                    description: '',
                    price: ''
                },
                isModalOpen: false,
                error: null
            }));

        } catch (error){
            this.setState({
                error: error instanceof Error ? error.message : 'Ошибка при добавлении товара'
            });
            }
        
    };
    componentDidMount(){
        this.fetchItems();
    }
    fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data");
        const data = await response.json();
        this.setState({
            items: data,
            loading: false
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      };
    };

    render(){
        const { items, isModalOpen, newItem, loading, error } = this.state;
        if(loading){
            return <div className = "loading">Загрузка товаров</div>;
        }
        if(error){
            return <div className = "error">Ошибка: {error}</div>;
        }
        return(
            <>
            <Helmet>
                <title>Домашняя</title>
                <meta name = "description" content = "Домашняя страница" />
                <meta name = "keywords" content = "список, товары, добавление" />
            </Helmet>
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
          </>
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