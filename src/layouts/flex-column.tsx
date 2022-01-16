import React from 'react';

import styled from 'styled-components'

const FlexColumnStyle = styled.div<Props>`
    padding:0 15px;
    max-width:${props => "calc(100%*"+props.col+"/12)"};
    box-sizing:border-box;
    width:100%;
    @media(max-width:480px){
        max-width:100%;
    }
`;

interface Props{
    col: number
}

const FlexColumn:React.FC <Props> = ({col,children}) => {
    return <FlexColumnStyle col={col}>{children}</FlexColumnStyle>
}

export default FlexColumn;