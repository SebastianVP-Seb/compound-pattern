import React from 'react';
import { createContext } from 'react';
import './styles.css';

export const contextCard=createContext({});
const {Provider}=contextCard;

//render children
const Card = ({config, children}) => {
  return (
    <Provider value={config} >
      <div className='card'>
        {children}
      </div>
    </Provider>
  );
};

export default Card;