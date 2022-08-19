import React, { useState } from 'react';
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
        <p>La contraseña es {password}</p>
        <PasswordInput
            label='Password Input'
            disabled={isActiveInputPassword}
            onChange={({target})=>setPassword(target.value)}
            value={password}
        />
    </div>
  );
};

export default SystemDesign;