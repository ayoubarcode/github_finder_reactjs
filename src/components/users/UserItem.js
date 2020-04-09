import React  from 'react'
import PropTypes from 'prop-types'
import  {Link} from 'react-router-dom'



/*
All right guys so in this video we're going to be converting a couple of class based components to functional

because they no longer have state so they don't need to be classes.

*/
const  UserItem = ({user: {login, avatar_url, html_url}}) => {
    // const {login, avatar_url, html_url} = props.user

    return ( 
        <div className="card text-center">
            <img src={avatar_url} className="round-img" 
            alt="" style={{width: "60px"}}/>
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dar btn-sm my-1"> 
                More
                </Link>
            </div> 
        </div>
    )

} 

UserItem.propTypes = {
    user:PropTypes.object.isRequired,
}



export default UserItem
