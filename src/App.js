import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from "./hoc/Layout/Layout";
import Todo from "./containers/Todo/Todo";
import NavBar from "./containers/NavBar/NavBar";
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import CreatePage from './components/CreatePage/CreatePage';

function App() {
  return (
    <BrowserRouter>
        <Layout>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Todo}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/add" component={CreatePage}/>
            <Todo/>
          </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
