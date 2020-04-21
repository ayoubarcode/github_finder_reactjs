import React from 'react';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import User from './components/users/User'
import Alert from './components/layouts/Alert'
import About from './components/pages/About'
import Tasks from './components/tasks/Tasks'
import Task from './components/tasks/Task'
import Home from './components/pages/Home';
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import TaskState from './context/tasks/TaskState'

import NotFound from './components/pages/NotFound' 

import './App.css';

// JSX : Javascript extentsions
const  App   = () =>   {
    // return React.createElement('div', {className: 'App'},
    //  React.createElement('h1', null, 'hello from react') )

    return (
      <GithubState>
       <AlertState>
        <TaskState>
            <Router>
            <div>
            <Navbar title='Github  Finder' icon="fab fa-github" />
            <div className="container">
            <Alert/>

            <Switch>
              <Route  exact path="/"  component={Home}/>
              <Route  exact path="/about" component={About} />
              <Route  exact path="/user/:login" component={User} />
              <Route  exact path='/tasks' component={Tasks} />
              <Route  exact path='/task/:id' component={Task} />
              <Route component={NotFound} />
            </Switch>
            
          
            </div>
            </div>
            </Router>
         </TaskState>
        </AlertState> 
      </GithubState> 
    )


  }
  

export default App;
