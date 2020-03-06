import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {render} from 'react-dom';
import './index.css';
import House1Page from './components/houses/house1';
import House2Page from './components/houses/house2';
import House3Page from './components/houses/house3';
import House4Page from './components/houses/house4';
import House8Page from './components/houses/house8';
import House9Page from './components/houses/house9';
import House10Page from './components/houses/house10';
import HousesPage from './components/houses';
import AboutPage from './components/about';
import ContactsPage from './components/contacts';
import HomePage from './components/home';

class NotFound extends Component{render(){return <h2>Ресурс не найден</h2>;}}

class House1 extends Component{
    render(){
      return <House1Page/>
    }
}
class House2 extends Component{
  render(){
    return <House2Page/>
  }
}
class House3 extends Component{
  render(){
    return <House3Page/>
  }
}
class House4 extends Component{
  render(){
    return <House4Page/>
  }
}
class House8 extends Component{
  render(){
    return <House8Page/>
  }
}
class House9 extends Component{
  render(){
    return <House9Page/>
  }
}
class House10 extends Component{
  render(){
    return <House10Page/>
  }
}
class Home extends Component{
    render(){
      return <HomePage/>
    }
}

class Houses extends Component{
    render(){
      return <HousesPage/>
    }
}

class About extends Component{
    render(){
      return <AboutPage/>
    }
}

class Contacts extends Component{
    render(){
      return <ContactsPage/>
    }
}
render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/houses" component={Houses} />
        <Route path="/house/1" component={House1} />
        <Route path="/house/2" component={House2} />
        <Route path="/house/3" component={House3} />
        <Route path="/house/4" component={House4} />
        <Route path="/house/8" component={House8} />
        <Route path="/house/9" component={House9} />
        <Route path="/house/10" component={House10} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>,
    document.getElementById("root")
)

