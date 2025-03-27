import { useState, useEffect } from 'react';

function CryptoContainer() {
  const [ crypto, setCrypto ] = useState(0);

  // normal logic
  const addCrypto = () => {
    setCrypto(crypto + 1);
  }

  const deductCrypto = () => {

    if (crypto>0){
      setCrypto(crypto - 1);
    }
  }
    // jump logic
    const jumpadd5 = () => {
      setCrypto(crypto + 5);
    }

    // jump - deduct stock by 5 (avoiding multiple manual clicks)
    const  jumpdeduct5 = () => {
      if (crypto>5) {
        setCrypto(crypto - 5);
      } else if (crypto>0){
        setCrypto(0);
      }
    }

    useEffect (() => {
      console.log( `crypto stock changed : ${crypto}`)
    });

  

  return(
    <div>
      <h2>Current crypto : {crypto} </h2>
      <button style={{color: 'green', border: '2px solid green'}} onClick={addCrypto}>Increase Stocks in crypto</button>
      <button style={{color: 'white', backgroundColor: 'red' }} onClick={deductCrypto}>manage stocks</button>
      <button onClick={jumpadd5}>Add 5 more</button>
      <button onClick={jumpdeduct5}>deduct 5 </button>
    </div>
  );

}

export default CryptoContainer;