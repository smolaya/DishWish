import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import FAQ from './FAQ';
import Recipes from './Recipes';

class App extends React.Component{
  render () {
    return (
      <Router>
			<div>
        <Header/>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/FAQ" component={FAQ} />
        <Route path='/recipes' component={Recipes} />
        <Footer/>
			</div>
		</Router>
    )
  }
}

export default App;
