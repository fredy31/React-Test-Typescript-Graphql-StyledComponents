import React from 'react';

import styled from 'styled-components'

const ContainerStyle = styled.div`
    max-width:1080px;
    margin:0 auto;
    padding:0 30px;
`;

interface Props{

};

const Container:React.FC <Props> = ({children}) => {
    return <ContainerStyle>{children}</ContainerStyle>
}

export default Container;