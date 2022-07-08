import React, { useContext } from 'react';
import { useState } from 'react';
import { contextCard } from './Card';

const CardDescriptionCollapsed = ({description}) => {

    const { description: descriptionContext }=useContext(contextCard);
    const [collapsed, setCollapsed]=useState(true);

  return (
    <>
        <p role='button' className='button-collapsed' onClick={()=>setCollapsed(!collapsed)} >
            {collapsed ? 'Ver menos' : 'Ver más'}
        </p>
        <div className={`card_collapsed ${collapsed ? '' : 'is-active'} `} >
            <p>{description ? description : descriptionContext}</p>
        </div>
    </>
  );
};

export default CardDescriptionCollapsed;