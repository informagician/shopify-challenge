import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Result from './components/Result';
import Nomination from './components/Nomination';
import axios from 'axios';
import './styles/index.scss';

function App() {

  const [ search, setSearch ] = useState('')
  const [ results, setResults ] = useState()
  const [ nomination, setNomination ] = useState([])
  const [ cache, setCache ] = useState([])


  // RETRIEVING MOVIES 
  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?s=${search}&type=movie&apikey=` + process.env.REACT_APP_API_KEY)
      .then(res => setResults(res.data))
      .catch(err => console.log(err))
  },[search])

  useEffect(() => {
    let storedNominations = localStorage.getItem('nomination')
    let retrievedNominations = JSON.parse(storedNominations)
    if(retrievedNominations && retrievedNominations.length > 0){
      setNomination(retrievedNominations)
      setCache(
        retrievedNominations.map(movie => movie.imdbID)
      )
    }
  },[])

  useEffect(() => {
    if(nomination.length >= 0){
      localStorage.setItem('nomination',JSON.stringify(nomination));
    }
  },[nomination])

  console.log(nomination)
  return (
    <div className="container">
      <h1>The Shoppies</h1>
      <Search setSearch={setSearch} />
      <div className="row sb">
        <Result 
          search={search} 
          results={results} 
          setNomination={setNomination} 
          nomination={nomination} 
          cache={cache} 
          setCache={setCache} 
        />
        <Nomination 
          nomination={nomination} 
          setNomination={setNomination}
          cache={cache}
          setCache={setCache} 
        />
      </div>
    </div>
  );
}

export default App;
