import { useEffect, useState } from "react";

function LiveCryptoTracker () {
    // to store the price but for now its initial nulll value
    const [price, setPrice] = useState(null);

    const fetchPrice = async () => {
        try{
            const res = await fetch(
                'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
            );
            const data = await res.json();
            setPrice(data.bitcoin.usd);
        } catch (err) {
            console.error('Sorry Network sleeps at this time:', err);
        }
    };

    useEffect(()=>{
        fetchPrice();
    }, []);

    return(
        <div>
            <h2>Live BTC Price</h2>
            {price ? <p>${price}</p> : <p>Loading...</p>}
            <button onClick={fetchPrice}>Refresh</button>
        </div>
    );
}

export default LiveCryptoTracker;