import React from 'react';
import Card from '../styledComponent/Card/Card';
import CardHeader from '../styledComponent/Card/CardHeader';
import imgAsset from '../assets/collins.jpg';
import CardImage from '../styledComponent/Card/CardImage';
import CardDescription from '../styledComponent/Card/CardDescription';
import CardButtons from '../styledComponent/Card/CardButtons';

const CompoundPatternWithStyledComp = () => {

    const arrayCards = [{
        title: 'Card1 Config-Compound-Pattern',
        subtitle: 'Subtitle from config',
        imgUrl: imgAsset,
        altContext: 'Imagen Cascada',
        description: 'Descripción desde config-Compound'
      }, {
        title: 'Card2 Config-Compound-Pattern',
        subtitle: 'Subtitle from config',
        imgUrl: imgAsset,
        altContext: 'Imagen Cascada',
        description: 'Descripción desde config-Compound'
      }];

  return (
    <div>
        {
            arrayCards.map(item=>(
            <Card config={item} >
                <CardHeader />
                <CardImage />
                <CardDescription />
                <CustomButtonsCard />
            </Card>
            ))
        }
    </div>
  );
};

export default CompoundPatternWithStyledComp;

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