import React from 'react';
import styled from 'styled-components';

/*Descomponiendo un input basic, input y label */
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  `;

const InputStyled = styled.input`
  min-width: 100%;
  margin: .5rem 0;
  border-radius: 20rem;
  height: 1.5rem;
  outline: none;
  background-color: rgb(229, 236, 234);
  padding: 0 1rem;
  color: grey;
  border: none;
  
  &:active {
    border: 2px solid magenta;
  }
  
  &:focus {
    border: 2px solid magenta;
    box-shadow: 0 0 10px 2px rgba(221, 15, 228, 0.534);
  }
  
  &:disabled {
    background-color: #36ca5b;
  }
`;

const LabelStyled = styled.label`
  margin-left: 1rem;
  font-weight: 600;
`;

const Input = (props) => {

  // restProps=resto de las props 
  const { label, ...restProps } = props;

  return (
    <InputWrapper>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled {...restProps} />
    </InputWrapper>
  );
};

export default Input;

/* Permite crear un nuevo componente, con las características del padre (Input), pero a 
la vez con sus propias características
*/
export const PasswordInput = styled(Input).attrs({
  type: 'password'
})`
    &:active {
    border: 2px solid rgb(38, 192, 172);
  }

  &:focus {
    border: 2px solid rgb(38, 192, 172);
    box-shadow: 0 0 10px 2px rgb(38, 192, 172);
  }

  &:disabled {
    background-color: #b4ca36;
  }
`;