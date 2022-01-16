import React from 'react';

import styled from 'styled-components'

const BodyStyle = styled.div`
    min-height:100vh;
    color:#fff;
    background:#111;
`;

interface Props{

}

const Body:React.FC <Props> = ({children}) => {
    return <BodyStyle>{children}</BodyStyle>
}

export default Body;