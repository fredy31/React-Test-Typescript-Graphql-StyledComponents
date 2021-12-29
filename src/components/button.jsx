import React from 'react';

import styled from 'styled-components';

import {Link} from '@reach/router';

const ButtonStyles = styled(Link)`
    display:block;
    border:3px solid currentColor;
    width:200px;
    padding:16px 0;
    text-align:center;
    color:#fff;
    text-decoration:none;
    font-size:16px;
    font-weight:700;
    transition:0.3s all ease-out;
    &:hover{
        background:#fff;
        border-color:#fff;
        color:#333;
    }
`;

const Button = (props) => {
    return <ButtonStyles to={props.linkto}>{props.children}</ButtonStyles>;
}

export default Button;

