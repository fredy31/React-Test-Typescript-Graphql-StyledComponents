import React from 'react';

import styled from 'styled-components'

const ContainerStyle = styled.div`
    max-width:1080px;
    margin:0 auto;
    padding:0 30px;
`;

const Container = (props) => {
    return <ContainerStyle>{props.children}</ContainerStyle>
}

export default Container;