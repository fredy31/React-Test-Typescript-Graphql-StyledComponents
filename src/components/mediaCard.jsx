import React from 'react';

import styled from 'styled-components';

import {Link} from '@reach/router';

const MediaCardStyle = styled(Link)`
    padding:16px 0;
    border-bottom:1px solid #555;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:100%;
    box-sizing:border-box;
    color:#fff;
    text-decoration:none;
`;

const MediaTitle = styled.div`
    margin-bottom:4px;
    font-weight:600;
`;
const MediaJPTitle = styled.div`
    font-style:italic;
    margin-bottom:4px;
`;

const MediaInfo = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    margin-top:16px;
`;
const Score = styled.div`
    border:2px solid currentColor;
    border-radius:999vw;
    display:flex;
    align-items:center;
    justify-content:center;
    width:24px;
    height:24px;
    color: ${({score})=>
        (score>70 && '#595') ||
        (score>40 && '#993') ||
        '#955'
    }
`;
const Thumbnail = styled.picture`
    width:100%;
    display:block;
    margin-bottom:16px;
    max-width:100%;
`;
const Image = styled.img`
    width:100%;
    display:block;
    margin-bottom:16px;
    max-width:100%;
`;

const MediaCard = (props) => {
    return <MediaCardStyle to={"/media/"+props.data['id']}>
            <div>
                <Thumbnail>
                    <Image loading="lazy" src={props.data['coverImage']['large']} />
                </Thumbnail>
                <MediaTitle>{props.data['title']['english']}</MediaTitle>
                <MediaJPTitle>{props.data['title']['romaji']}</MediaJPTitle>
            </div>
            <MediaInfo>
                <div>{props.data['season'] + ' ' + props.data['seasonYear']}</div>
                <Score score={props.data['averageScore']}>{props.data['averageScore']}</Score>
            </MediaInfo>
        </MediaCardStyle>;
}

export default MediaCard;

