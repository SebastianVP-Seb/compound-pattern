import React from 'react';
import { useContext } from 'react';
import notFoundImg from '../../assets/didin.jpg';
import { contextCard } from './Card';

const CardImage = ({imgUrl, alt}) => {

  const {imgUrl:imgContext, altContext}=useContext(contextCard);

  // Ternario anhidado
  const imgShow=imgUrl ? imgUrl : imgContext ? imgContext : notFoundImg;

  return (
    <div className="card_image">
      {/* Validando la imagen  */}
        <img src={imgShow} alt={alt ? alt : altContext} />
    </div>
  );
};

export default CardImage;