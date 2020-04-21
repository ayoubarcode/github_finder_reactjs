import React, { useReducer } from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './gihtubReducer'
// import github reducer
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
} from '../types'


const GithubState = props =>  {
    
    const initialState = {
        users: [],
        user : {},
        repos: [],
        tasks: [],
        loading: false
    }
    
    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // Search user 
    const searchUsers = async (text) =>{
        setLoading()
        const resSearch = await fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&Spinnerclient_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        const searchData = await resSearch.json();
        dispatch({
            type:SEARCH_USERS, 
            payload: searchData.items
        })        
      } 
    // Get User
      // todo: get single user from github api
  const getUser = async (username) => {
      setLoading()
    const resSingleUser = await fetch(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&Spinnerclient_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    const dataSingleUser = await resSingleUser.json();
    dispatch({ type: GET_USER , payload: dataSingleUser})
    
  }

    // Get Repos

  const getUserRepos = async (username) => {
    setLoading()
    const reposUser = await fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&Spinnerclient_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    const dataRepoUser = await reposUser.json();
    dispatch({ type:GET_REPOS, payload:dataRepoUser})   
  }
    // clear Users
    const clearUsers = () => dispatch({type:CLEAR_USERS})
    // Set loafing
    const setLoading  = () => dispatch({ type: SET_LOADING})


    return <GithubContext.Provider
        value={{ 
            users: state.users,
            user: state.user,
            repos : state.repos,
            tasks:state.tasks,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}
    >
    {props.children}

    </GithubContext.Provider>
}

export default GithubState