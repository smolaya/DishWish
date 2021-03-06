import React from 'react';
import axios from 'axios';
import {Grid} from 'semantic-ui-react';
import Search from './Search';
import DisplayRecipe from './Cards';

const columns = {
  height: "100%",
  width: '100%'
}
class Recipes extends React.Component {
  state = {
    recipes: [],
    ingredientName: ''
  }

  arrayMaker = (e) => {
    e.preventDefault();
    let x = this.state.recipes
    let newArray = [];
    for (let i = 0; i < x.length; i++) {
      let test = x[i]
      test.num_ingredients = test.ingredients.split(',').length;
      newArray.push(test)
    }
    let newTest = newArray.sort((a, b) => (a.num_ingredients - b.num_ingredients))
    this.setState({recipes: newTest})
  }
  handleSearchChange = e => {
    this.setState({ingredientName: e.target.value});
  };
  onSubmit = (e) => {
    e.preventDefault();
    axios.get(`/api/${this.state.ingredientName}`).then(({data}) => {
      this.setState({recipes: data})
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div>
      <Search onSubmit={this.onSubmit} handleSearchChange={this.handleSearchChange} sendArrayMaker={this.arrayMaker} />
      <Grid style={columns} columns='equal' centered>
        {
          this.state.recipes.map((recipe, index) => {
            return <DisplayRecipe key={index} recipe={recipe}/>
          })
        }
      </Grid>
    </div>
  );
  }
}

export default Recipes;
