import React, { useContext } from 'react';
import { contextCard } from './Card';
import { CardDescriptionWrapper } from './styled/CardDescription.styled';

const CardDescription = ({description}) => {

  const { description: descriptionContext }=useContext(contextCard);

  return (
    <CardDescriptionWrapper>
      <p>{description ? description : descriptionContext}</p>
    </CardDescriptionWrapper>
  );
};

export default CardDescription;