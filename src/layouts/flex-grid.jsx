import React from 'react';

import styled from 'styled-components'

const FlexGridStyle = styled.div`
    margin:0 -15px;
    display:flex;
    flex-wrap:wrap;
    width:calc(100% + 30px);
`;

const FlexGrid = (props) => {
    return <FlexGridStyle>{props.children}</FlexGridStyle>
}

export default FlexGrid;