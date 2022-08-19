import React from 'react';

// import Card from '../components/card/Card';
import Card from '../components/card';

// import CardHeader from '../components/card/CardHeader';
// import CardImage from '../components/card/CardImage';
// import CardDescription from '../components/card/CardDescription';

import imgAsset from '../assets/collins.jpg';
import imgAsset1 from '../assets/didin.jpg';
import CardButtons from '../components/card/CardButtons';
import CardDescriptionCollapsed from '../components/card/CardDescriptionCollapsed';

const arrayCards = [{
  title: 'Card1 Config-Compound-Pattern',
  subtitle: 'Subtitle from config',
  imgUrl: imgAsset,
  altContext: 'Imagen Cascada',
  description: 'Descripción desde config-Compound'
}, {
  title: 'Card2 Config-Compound-Pattern',
  subtitle: 'Subtitle from config',
  imgUrl: imgAsset1,
  altContext: 'Imagen Cascada',
  description: 'Descripción desde config-Compound'
}];

const CompoundPattern = () => {

  return (
    <div>
      {
        arrayCards.map(item => (
          <Card config={item} >
            <Card.Header />
            <Card.Image />
            <Card.Description />
            <CardDescriptionCollapsed />
            <CustomButtonsCard />
          </Card>
        ))
      }
    </div>
  );
};

export default CompoundPattern;

export const CustomButtonsCard = () => {
  return (
    <CardButtons
      secondary={{
        label: 'Secondary',
        actionClick: () => console.log('Click en Secondary')
      }}
      //definiendo children para primary
      primary={{
        children: <button
          className='button'
          onClick={() => alert('Button primary')}
          style={{
            border: '3px solid green'
          }}
        >Button Children</button>
      }}
    />
  );
};