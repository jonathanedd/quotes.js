import React from 'react';

const QuoteBox = ({quote, author, changePhrase, color }) => {
    return (
        <div className='quote-card' style={{color}} >


            <p> <i className="fas fa-quote-left"></i>    {quote} </p>
             
             <h4> {author} </h4>

            <button onClick={changePhrase } style={{color}}> <i className="fas fa-random"></i> </button>
            
        </div>
    );
};

export default QuoteBox;