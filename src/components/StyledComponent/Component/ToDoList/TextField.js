import React from 'react';

import styled from 'styled-components';


export const Input = styled.input`
    border: 1px solid ${props => props.theme.color};
    min-height:35px;
    height:35px;
    font-size:17px;
    width:auto;
    display:initial;
    padding-left:10px;
`

// export const Label = styled.span`
//     color:${props => props.theme.color};
//     width:auto;
// `
export const Label = styled.h5`
    font-size:1rem;
    font-weight:300;
    line-height:1.2;
    color: ${props => {return props.theme.color}}
`

export const TextField = ({ label, ...props }) => {
    return <span>
        <Label>
            {label}
        </Label>
        <Input {...props} />
    </span>
}
