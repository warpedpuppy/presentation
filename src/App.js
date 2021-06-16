
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Menu from './components/Menu';
import Welcome from './pages/Welcome';
import Section1 from './pages/Section1';
import Section2 from './pages/Section2';
import Section3 from './pages/Section3';
import Section4 from './pages/Section4';
import Section5 from './pages/Section5';
import Section6 from './pages/Section6';
import NotFound from './pages/NotFound';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header><Menu /></header>
      <main>
        
          <Switch>
            <Route exact path="/" component={ Welcome } /> 
            <Route path="/section-1" component={ Section1 } /> 
            <Route path="/section-2" component={ Section2 } /> 
            <Route path="/section-3" component={ Section3 } /> 
            <Route path="/section-4" component={ Section4 } /> 
            <Route path="/section-5" component={ Section5 } /> 
            <Route path="/section-6" component={ Section6 } /> 
            <Route path="*" component={ NotFound } /> 
          </Switch>
       
      </main>
      <footer></footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
