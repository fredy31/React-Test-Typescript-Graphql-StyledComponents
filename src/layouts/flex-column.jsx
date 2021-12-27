import React from 'react';

import styled from 'styled-components'

const FlexColumnStyle = styled.div`
    padding:0 15px;
    max-width:25%;
    box-sizing:border-box;
    width:100%;
`;

const FlexColumn = (props) => {
    return <FlexColumnStyle>{props.children}</FlexColumnStyle>
}

export default FlexColumn;