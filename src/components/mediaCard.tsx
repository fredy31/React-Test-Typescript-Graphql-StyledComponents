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
const Score = styled.div<{score:number}>`
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

const MediaCard:React.FC<{data:any}> = ({data}) => {
    return <MediaCardStyle to={"/media/"+data['id']}>
            <div>
                <Thumbnail>
                    <source srcSet={"https://testsreact.fredericpilon.com/webpconverter.php?src="+data['coverImage']['large']} type='image/webp' />
                    <source srcSet={data['coverImage']['large']} type={"image/"+data['coverImage']['large'].split(/[#?]/)[0].split('.').pop().trim()} />
                    <Image loading="lazy" src={data['coverImage']['large']} />
                </Thumbnail>
                <MediaTitle>{data['title']['english']}</MediaTitle>
                <MediaJPTitle>{data['title']['romaji']}</MediaJPTitle>
            </div>
            <MediaInfo>
                <div>{data['season'] + ' ' + data['seasonYear']}</div>
                <Score score={data['averageScore']}>{data['averageScore']}</Score>
            </MediaInfo>
        </MediaCardStyle>;
}

export default MediaCard;

