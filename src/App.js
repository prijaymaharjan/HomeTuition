
import Navbar from './Component/Navbar';
import "./sass/main.scss";
import {BrowserRouter, Route,Switch} from 'react-router-dom';


// Home Component
import Carousel from "./Component/Carousel";
import Mainpart from './Component/Mainpart';
import Learntobe from './Component/Learntobe';
import Footer from "./Component/Footer";
import About from './Component/About';
import Privacy from './Component/Privacy';
import Termcondition from './Component/Termcondition';
import Contact from './Component/Contact';
// End of Home Component



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Switch>
    <Route exact path="/"  component={Home}/>
    <Route exact path="/About"  component={About}/>
    <Route exact path="/Privacy"  component={Privacy}/>
    <Route exact path="/Termcondition"  component={Termcondition}/>
    <Route exact path="/Contact"  component={Contact}/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

const Home = () => {
  return(
      <div className='home'>
      {/* Carousel */}
      <Carousel/>
      {/* Mainpart.js */}
      <Mainpart/>
      {/* learntobe.js */}
      <Learntobe/>
      {/* Footer */}
     <Footer/>
      </div>
  )

}

export default App;
