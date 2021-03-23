import React, { Component } from 'react'
import './FoodBox.css'

class FoodBox extends Component {

    state = {
        name: this.props.name, 
        calories:this.props.calories,
        image: this.props.image,
        quantity: 0
    }

    handleChange = (e) => {
        console.log('im in')
        this.setState({ quantity: e.target.value });
    }


    render() {

        return(

        <div className="FoodBox">
        <article className="media">
            <div className="media-left">
            <figure className="image is-64x64">
                <img src={this.state.image}/>
            </figure>
            </div>
            <div className="media-content">
            <div className="content">
                <p>
                <strong>{this.state.name}</strong> <br />
                <small>{this.state.calories}</small>
                </p>
            </div>
            </div>
            <div className="media-right">
            <div className="field has-addons">
                <div className="control">
                <input className="input" type="number" id="quantity" value={this.state.quantity > 0 ? this.state.quantity : 0} onChange={this.handleChange}/>
                </div>
                <div className="control">
                <button className="button is-info">
                    +
                </button>
                </div>
            </div>
            </div>
        </article>
        </div>


        )


    }   
}


export default FoodBox