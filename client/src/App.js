import './App.css';
import { Router, Redirect } from "@reach/router";
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';


import Main from './views/Main';
import ShowProduct from './views/ShowProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/:productId"} render={(routeProps) => <ShowProduct {...routeProps}/>} />
          <Route exact path={"/"} render={(routeProps)=><Main {...routeProps}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
