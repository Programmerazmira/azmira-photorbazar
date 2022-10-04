import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';


const Checkout = () => {
    const[card,setCard]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data=>setCard(data));
    },[])
    return (
        <div>
            <div className='card-group container w-75 gap-4'>
           
           
           {
               card.map(cards => <Card
               key={cards.id}
               cards = {cards}
               ></Card>)
           }
       </div>
        </div>
    );
};

export default Checkout;