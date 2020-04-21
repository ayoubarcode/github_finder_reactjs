import React, { useState, useContext } from 'react';
import GithubContext from './../../context/github/githubContext'
import AlertContext from './../../context/alert/alertContext'

const Search = () => {

  const githubContext = useContext(GithubContext)
  const alertContext  = useContext(AlertContext)
  const  { setAlert } = alertContext 

  const [text, setText] = useState('');

  const handleChande = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('please enter something ', ' light ');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };
   
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='text'
          id=''
          placeholder='Search Users'
          value={text}
          onChange={handleChande}
        />

        <input
          type='submit'
          value='search'
          className='btn btn-dark btn-block'
        />
      </form>

      {githubContext.users.length > 0   && (
        <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};


export default Search;
