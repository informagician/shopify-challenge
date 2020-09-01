import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Result from './components/Result';
import Nomination from './components/Nomination';
import axios from 'axios';
import './styles/index.scss';

function App() {

  const [ search, setSearch ] = useState('')
  const [ results, setResults ] = useState()
  const [ nomination, setNomination ] = useState({})

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?s=${search}&apikey=71ec9864`)
      .then(res => setResults(res.data))
      .catch(err => console.log(err))
  },[search])

  return (
    <div className="container">
      <h1>The Shoppies</h1>
      <Search setSearch={setSearch} />
      <div className="row">
        <Result search={search} results={results} setNomination={setNomination} />
        <Nomination nomination={nomination} setNomination={setNomination} />
      </div>
    </div>
  );
}

export default App;
