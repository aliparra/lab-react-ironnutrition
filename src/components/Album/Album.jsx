import React, { Component } from 'react'
import Foods from '../../foods.json'
import './Album.css';
import FoodBox from '../FoodBox/FoodBox'
import CreateForm from '../CreateForm/CreateForm'

class Album extends Component {

    state = {
        foods : [...Foods]
    }

    handleChange = (e) => {
        let value = e.target.value;
        this.setState({ [e.target.id]: value });
    }

    showForm = () => {
        console.log('Showform clicked')
        return <div><h1>Hola</h1></div>
    }

    render() {

        const foods = this.state.foods
        return (
        
        <div className="columns is-desktop is-multiline">
            <div className="column">
                <h1>Alimentos</h1>
            </div>
            {foods.map((element, index) => (
                <div className="column is-narrow" key={index}>
                <FoodBox {...element }/>
                </div>
                
            ))}
            
            <button onClick= {this.showForm}>Add a new food</button>
            
        </div>
        
        )
      }
    
}

export default Album