import React, { useState } from 'react';
import ButtonSeb from '../button/ButtonSeb';
import Input, { PasswordInput } from '../input/Input';

const SystemDesign = () => {

    const [password, setPassword]=useState('');
    const [isActiveInputPassword, setIsActiveInputPassword]=useState(false);
    const [datos, setDatos]=useState('');

  return (
    <div>
        <Input
            label={`El input está ${isActiveInputPassword ? 'Desactivado' : 'Activado'}`}
            type='checkbox'
            value={isActiveInputPassword}
            onChange={()=>setIsActiveInputPassword(!isActiveInputPassword)}
            />
        <Input 
            disabled={isActiveInputPassword}
            label='Introduce tu nombre' 
            type= 'password'
            onChange={({target})=>setPassword(target.value)}
            value={password}
        />
        <button
            onClick={()=>{
                setDatos(password);
                console.log(datos);
            }}
        >Enviar datos</button>
        <p>La contraseña es {password}</p>
        <PasswordInput
            label='Password Input'
            disabled={isActiveInputPassword}
            onChange={({target})=>setPassword(target.value)}
            value={password}
        />
        <ButtonSeb />
    </div>
  );
};

export default SystemDesign;