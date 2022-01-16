import React from 'react';

import styled,{keyframes} from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;
const Spinner = styled.div`
    border:5px solid #fff;
    border-color:#333;
    border-top-color:#fff;
    border-radius:999vw;
    width:40px;
    height:40px;
    animation: ${rotate} 2s linear infinite;
    margin:0 auto;
`;

interface Props{

}

const LoadMore:React.FC<Props> = () => {
    return <Spinner />;
}

export default LoadMore;

