import React, { Component } from "react";
import {Switch,Route} from 'react-router-dom';
import MainPage from './components/MainPage'
import Overview from './pages/Overview'





class App extends Component {



  render() {
    return (
      <div>

        <Switch>
            <Route path='/' exact component={MainPage} />
            <Route path='/overview' exact component={Overview} />

            <Route render={()=> <h3>Not found</h3>}/>
        </Switch>

      </div>
    );
  }
}

export default App;
