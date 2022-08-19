import React from 'react';
import Card from '../styledComponent/Card/Card';
import CardHeader from '../styledComponent/Card/CardHeader';
import CardImage from '../styledComponent/Card/CardImage';
import CardDescription from '../styledComponent/Card/CardDescription';
import CardButtons from '../styledComponent/Card/CardButtons';

const CompoundPatternWithStyledComp = () => {

  const arrayCards = [{
    title: 'Card1 Config-Compound-Pattern Styled Components',
    subtitle: 'Subtitle from config',
    imgUrl: 'https://images.unsplash.com/photo-1553532070-e2c5714303e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    altContext: 'Imagen Cascada',
    description: 'Descripción desde config-Compound Styled Components'
  }, {
    title: 'Card2 Config-Compound-Pattern Styled Components',
    subtitle: 'Subtitle from config',
    imgUrl: 'https://images.unsplash.com/photo-1657040899601-fbcc8f6486f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    altContext: 'Imagen Cascada',
    description: 'Descripción desde config-Compound Styled Components'
  }];

  return (
    <div>
      {
        arrayCards.map(item => (
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