import React, { Component } from 'react'

class CreateForm extends Component {

    state = {
        name: 'Food name', 
        calories: 0,
        image:'img url'
    }

    handleChange = (e) => {
        let value = e.target.value;
        this.setState({ [e.target.id]: value });
      }

    render() {

        return (
            <div >
            <form onSubmit={this.handleFormSubmit}>
              <label>Food name:</label>
              <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
     
              <label>Calories:</label>
              <input type="number" name="calories" id="calories"  value={this.state.calories} onChange={this.handleChange} />
     
              <label>Image URL</label>
              <input type="text" name="image" id="image"  value={this.state.image} onChange={this.handleChange} />
              
              <button>Submit</button>
            </form>
          </div>
        )
      }
    
}

export default CreateForm