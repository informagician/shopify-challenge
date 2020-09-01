import React, { useState } from 'react';
import Search from './components/Search';
import Result from './components/Result';
import Nomination from './components/Nomination';
import './styles/index.scss';

function App() {

  const [ search, setSearch ] = useState('')
  const [ nomination, setNomination ] = useState({})

  return (
    <div className="container">
      <h1>The Shoppies</h1>
      <Search />
      <div className="row">
        <Result search={search} />
        <Nomination />
      </div>
    </div>
  );
}

export default App;
