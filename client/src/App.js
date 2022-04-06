import './App.css';
import { Router, Redirect } from "@reach/router";
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';


import Main from './views/Main';
import ShowProduct from './views/ShowProduct';
import EditProduct from './views/EditProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/:productId/edit"} render={(routeProps) => <EditProduct {...routeProps}/>}/>
          <Route exact path={"/:productId"} render={(routeProps) => <ShowProduct {...routeProps}/>} />
          <Route exact path={"/"} render={(routeProps) => <Main {...routeProps}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
