import './App.css';
import quotes from './quotes.json';
import QuoteBox from './components/QuoteBox';
import { useState } from 'react';

function App() {

  const palet = [
    '#533E85',
    '#4FD3C4',
    '#FFF89A',
    '#FFB2A6',
    '#203239',
    '#B8405E',
  ];
  
  const [ phrase, setPhrase ] = useState (quotes[getNumber(quotes.length)]);
  const background = palet[getNumber(palet.length)]

  const handlePhrase = ()=> {
    const index = getNumber(quotes.length);
    setPhrase(quotes[index]);
  };

  document.body.style = `background: ${palet[getNumber(palet.length)]}`
  

  return (
    <div className="App" style={{background}}>
      
      <QuoteBox 
        quote={phrase.quote} 
        author={phrase.author}
        changePhrase={handlePhrase}
        color={background}
      />


    </div>
  );
};

const getNumber = (max) => Math.floor(Math.random() * max ); 

export default App;
