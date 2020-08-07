import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import Yoga from './components/Yoga.jsx'
import EachYoga from './components/EachYoga.jsx'
import EachPose from './components/EachPose.jsx'
import About from './components/About'




class App extends Component {

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/yogas' component={Yoga} />
          <Route path='/yogas/:id' component={EachYoga} />
          <Route exact path='/pose/:id' component={EachPose} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    )
  }
}


export default App;