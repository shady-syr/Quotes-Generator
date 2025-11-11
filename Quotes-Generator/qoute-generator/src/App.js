import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  function getQuote() {
    axios
      .get("https://dummyjson.com/quotes/random")
      .then((result) => {
        setQuote(result.data.quote)
        setAuthor(result.data.author || 'Unknown')
      })
      .catch((err) => {
        console.log(err);
      })
  };

  useEffect(() => {
    getQuote()
  }, []);

  return (
    <div className="container">
      <h1 className='title'>Quote Generator</h1>
      <div className='quote-box'>
        <p className="quote-text">{quote}</p>
        <p className="quote-author"> "{author}"</p>
      </div>
      <button className='new-quote-btn' onClick={getQuote}>
        New Quote
      </button>
    </div>
  );
}

export default App;
