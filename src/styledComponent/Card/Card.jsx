import React, { createContext } from 'react';
import { CardWrapper } from './styled/Card.styled';

export const contextCard=createContext({});
const {Provider}=contextCard;

const Card = ({children, config={}}) => {

  return (
    <Provider value={config}>
      <CardWrapper>
        {children}
      </CardWrapper>
    </Provider>
  );
};

export default Card;