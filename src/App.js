import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/'
import Dashboard from './Pages/Dashboard/';
import Error404 from './Pages/Error404/';
import Login from './Pages/Login/';
import Register from './Pages/Register/';
import Message from './Pages/Dashboard/Message.jsx'
import Profile from './Pages/Dashboard/Profile.jsx'

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />      
        <Route exact path="/dashboard/message" component={Message} />      
        <Route exact path="/dashboard/profile" component={Profile} />      
        <Route component={Error404} />      
      </Switch>   
     
    </BrowserRouter>
  );
}

export default App;
