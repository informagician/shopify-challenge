import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Result from './components/Result';
import Nomination from './components/Nomination';
import Banner from './components/Banner';
import './styles/index.scss';

function App() {

  // SEARCH KEYWORD
  const [ search, setSearch ] = useState('')
  // RESULTS
  const [ results, setResults ] = useState()
  // LIST OF NOMINEES
  const [ nomination, setNomination ] = useState([])
  // LIST OF NOMINEE IDS FOR PURPOSE OF DISABLING BUTTONS
  const [ cache, setCache ] = useState([])


  // RETRIEVING MOVIES FROM API
  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?s=${search}&type=movie&apikey=` + process.env.REACT_APP_API_KEY)
      .then(res => setResults(res.data))
      .catch(err => console.log(err))
  },[search])

  // CHECK FOR NOMINEES IN THE LOCAL STORAGE
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

  // STORE NOMINEES IN LOCAL STORAGE
  useEffect(() => {
    if(nomination.length >= 0){
      localStorage.setItem('nomination',JSON.stringify(nomination));
    }
  },[nomination])

  console.log(process.env.REACT_APP_API_KEY)
  return (
    <div className="container">
      <h1>The Shoppies</h1>
      <Search setSearch={setSearch} />
      {/* DISPLAY BANNER WHEN REACHED 5 NOMINEES */}
      {nomination.length === 5 && (
        <Banner />
      )}
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
