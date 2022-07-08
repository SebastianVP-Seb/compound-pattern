import React from 'react';
import { useContext } from 'react';
import { contextCard } from './Card';

const CardDescription = ({description}) => {

  const { description: descriptionContext }=useContext(contextCard);

  return (
    <div className="card_description">
      <p>{description ? description : descriptionContext}</p>
    </div>
  );
};

export default CardDescription;