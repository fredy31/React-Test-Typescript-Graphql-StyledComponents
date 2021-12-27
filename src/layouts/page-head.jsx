import React from 'react';

import styled from 'styled-components'

const PageHeadStyle = styled.div`
    padding:80px 0;
    text-align:center;
    font-size:60px;
    font-weight:700;
`;

const PageHead = (props) => {
    return <PageHeadStyle>{props.children}</PageHeadStyle>
}

export default PageHead;