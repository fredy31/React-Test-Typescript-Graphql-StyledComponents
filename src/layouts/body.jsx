import React from 'react';

import styled from 'styled-components'

const BodyStyle = styled.div`
    min-height:100vh;
    color:#fff;
    background:#111;
`;

const Body = (props) => {
    return <BodyStyle>{props.children}</BodyStyle>
}

export default Body;