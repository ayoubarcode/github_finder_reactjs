import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Search extends Component {
    state = {
        text: '',
    }


    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUser: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
    }
    handleChande = (e) =>  this.setState({ [e.target.name]: e.target.value})

    handleSubmit = (e)=> {
        e.preventDefault();
        if(this.state.text === '') {
            this.props.setAlert("please enter something ", ' light ')
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: ''})  
        }
        
    }

    

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" name="text" id="" 
                            placeholder="Search Users" 
                            value={this.state.text}
                            onChange = {this.handleChande}
                            />
                  
                    <input type="submit" value="search" className="btn btn-dark btn-block"/>
                </form>

            { this.props.showClear && 
                <button className="btn btn-light btn-block" onClick={this.props.clearUser}>Clear</button>

             }
            </div>
        )
    }
}

export default Search
