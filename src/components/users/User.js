import React, { useEffect, Fragment, useContext } from 'react'
import Spinner from './../layouts/Spinner'
import {Link} from 'react-router-dom'
import Repos  from './../repos/Repos'
import GithubContext from './../../context/github/githubContext'
const User = ({ match }) =>  {

   const githubContext  = useContext(GithubContext)
   const { user , loading , getUser, getUserRepos} = githubContext // destructing 

    useEffect(() => {
        getUser(match.params.login)
        getUserRepos(match.params.login)
        //eslint-disable-next-line
    }, []);
    // const componentDidMount() {
    //     this.props.getUser(tmatch.params.login)
    //     this.props.getUserRepos(match.params.login)
    // }

    const {
        name, 
        avatar_url, 
        location,
        bio,
        html_url,
        login,
        company,
        blog,
        followers, 
        following,
        public_repos,
        public_gists,
        hireable,
        
    } = user


        if(loading) return <Spinner />

        return (
            <Fragment>
            <Link to="/"  className="btn btn-light"> Back To search </Link>
            Hireable: {' '}
            {hireable ? <i className="fas fa-check text-success" /> :
            <i className="fas fa-times-circle text-danger" /> 
            }
                
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" style={{width: '150px'}}  alt=""/>
                        <h1>{name}</h1>
                        <p> Location: {location}</p>
                    </div>
                    <div>
                            { bio && <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>}

                            <a href={html_url} className="btn btn-dark my-1">
                                visit Gihtub Profile
                            </a>

                            <ul>
                                <li>
                                    {login && <Fragment>
                                        <strong> Username : </strong>  {login}
                                    </Fragment>}
                                </li>
                                <li>
                                    {company && <Fragment>
                                        <strong> company : </strong>  {company}
                                    </Fragment>}
                                </li>
                                <li>
                                    {blog && <Fragment>
                                        <strong> Website : </strong>  {blog}
                                    </Fragment>}
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="card text-center">
                        <div className="badge badge-primary"> followers: {followers}</div>
                        <div className="badge badge-success"> following: {following}</div>
                        <div className="badge badge-danlightger"> public repos: {public_repos}</div>
                        <div className="badge badge-dark"> public gists: {public_gists}</div>
                    </div>
                
                <Repos/>
            </Fragment>
        );
}


export default User
  