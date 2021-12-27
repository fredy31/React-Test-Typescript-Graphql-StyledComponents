import React from 'react';

import styled from 'styled-components'

const FlexGridStyle = styled.div`
    margin:0 -15px;
    display:flex;
    flex-wrap:wrap;
    width:100%;
`;

const FlexGrid = (props) => {
    return <FlexGridStyle>{props.children}</FlexGridStyle>
}

export default FlexGrid;