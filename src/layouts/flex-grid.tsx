import React from 'react';

import styled from 'styled-components'

const FlexGridStyle = styled.div`
    margin:0 -15px;
    display:flex;
    flex-wrap:wrap;
    width:calc(100% + 30px);
`;

interface Props{
}

const FlexGrid:React.FC<Props> = ({children}) => {
    return <FlexGridStyle>{children}</FlexGridStyle>
}

export default FlexGrid;