import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layouts/Alert'
import About from './components/pages/About'
import axios from 'axios'
import './App.css';


// JSX : Javascript extentsions
class App extends Component  {

  state = {
    users:[],
    user: {},
    loading:false,
    alert:null
  }

  // async componentDidMount() {
  //   this.setState({
  //     loading: true
  //   })
  //   const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

  //   this.setState({
  //     users: response.data,
  //     loading:false
  //   })
    
  // }

  // todo : Search Github users 
  searchUsers = async (text) =>{
    this.setState({ loading: true})
    const resSearch = await fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&Spinnerclient_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    const searchData = await resSearch.json();
    this.setState({ users: searchData.items, loading:false})
    
  } 

  // todo : clear user 
  clearUser = () => {
    this.setState({users:[], loading: false})
  }

  // todo: Set Alert 
  setAlert = (msg, type) => {
    // this.setState({ alert: {msg:msg, type:type}})
    this.setState({ alert: {msg, type}})
    setTimeout(() => {
      this.setState({ alert: null})
    }, 5000)
  }


  // todo: get single user from github api
  getUser = async (username) => {
    this.setState({ loading: true})
    const resSingleUser = await fetch(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&Spinnerclient_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    const dataSingleUser = await resSingleUser.json();
    this.setState({user:dataSingleUser, loading: false })    
  }



  render() {

    // return React.createElement('div', {className: 'App'},
    //  React.createElement('h1', null, 'hello from react') )

    return (
      <Router>
      <div>
      <Navbar title='Github  Finder' icon="fab fa-github" />
      <div className="container">
      <Alert alert={this.state.alert}/>

      <Switch>
        <Route exact 
               path="/" 
               render={props => (
            <Fragment>
                <Search searchUsers={this.searchUsers} 
                        clearUser={this.clearUser}
                        showClear={this.state.users.length > 0 ? true: false} 
                        setAlert={this.setAlert}
                        />
                <Users loading={this.state.loading} users={this.state.users}/>
            </Fragment>
        )} />

       <Route 
            exact
            path="/about"
            component={About} />
        
      <Route  exact path="/user/:login" render = {props => (
        <User { ...props} getUser={this.getUser}
                         user={this.state.user} 
                         loading={this.state.loading} />
      )} />

      </Switch>
      
     
      </div>
      </div>
      </Router>
    )


  }
  
}

export default App;
