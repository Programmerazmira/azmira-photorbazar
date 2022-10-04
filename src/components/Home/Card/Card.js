import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ cards }) => {
    const { picture, title, text, ratings } = cards;
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path  = `/checkout`; 
      navigate(path);
    }
    return (
        <div>
            <div className=''>
                <div className="card h-100 ">
                    <img src={picture} className="card-img-top photo" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <p className=''>{ratings}</p>
                        <button onClick={routeChange} className='btn btn-primary'>click on</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;