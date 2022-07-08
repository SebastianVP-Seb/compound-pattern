import styled, { css } from "styled-components";

export const Button=styled.button`
    cursor: pointer;
    border: none;
    width: 9rem;
    border-radius: 30rem;
    transition: all .5s;

    &:hover {
        transform: scale(1.1);
    }

    ${props=>{
        switch (props.variant) {
            case 'primary':
                return css`
                    background-color: blueviolet;
                `;
            case 'secondary':
                return css`
                    background-color: aqua;
                `;
            default:
                return;
        }
    }}
`;