import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {render} from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import House1Page from './components/houses/house1';
import House2Page from './components/houses/house2';
import House3Page from './components/houses/house3';
import House4Page from './components/houses/house4';
import House5Page from './components/houses/house5';
import House6Page from './components/houses/house6';
import House7Page from './components/houses/house7';
import House8Page from './components/houses/house8';
import House9Page from './components/houses/house9';
import House10Page from './components/houses/house10';
import House11Page from './components/houses/house11';
import House12Page from './components/houses/house12';
import House13Page from './components/houses/house13';
import HousesPage from './components/houses';
import BathsPage from './components/baths';
import Bath1Page from './components/baths/bath1';
import Bath2Page from './components/baths/bath2';
import Bath3Page from './components/baths/bath3';
import AboutPage from './components/about';
import ContactsPage from './components/contacts';
import ServicesPage from './components/services';
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
class House5 extends Component{
  render(){
    return <House5Page/>
  }
}
class House6 extends Component{
  render(){
    return <House6Page/>
  }
}
class House7 extends Component{
  render(){
    return <House7Page/>
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
class House11 extends Component{
  render(){
    return <House11Page/>
  }
}
class House12 extends Component{
  render(){
    return <House12Page/>
  }
}
class House13 extends Component{
  render(){
    return <House13Page/>
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

class Baths extends Component{
  render(){
    return <BathsPage/>
  }
}

class Bath1 extends Component{
  render(){
    return <Bath1Page/>
  }
}

class Bath2 extends Component{
  render(){
    return <Bath2Page/>
  }
}

class Bath3 extends Component{
  render(){
    return <Bath3Page/>
  }
}
class About extends Component{
    render(){
      return <AboutPage/>
    }
}

class Services extends Component{
  render(){
    return <ServicesPage/>
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
        <Route path="/baths" component={Baths} />
        <Route path="/bath/1" component={Bath1} />
        <Route path="/bath/2" component={Bath2} />
        <Route path="/bath/3" component={Bath3} />
        <Route path="/house/1" component={House1} />
        <Route path="/house/2" component={House2} />
        <Route path="/house/3" component={House3} />
        <Route path="/house/4" component={House4} />
        <Route path="/house/5" component={House5} />
        <Route path="/house/6" component={House6} />
        <Route path="/house/7" component={House7} />
        <Route path="/house/8" component={House8} />
        <Route path="/house/9" component={House9} />
        <Route path="/house/10" component={House10} />
        <Route path="/house/11" component={House11} />
        <Route path="/house/12" component={House12} />
        <Route path="/house/13" component={House13} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/services" component={Services} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>,
    document.getElementById("root")
)

