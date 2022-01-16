import React,{useState,useEffect} from 'react';
import Helmet from 'react-helmet';
import Loading from './loading';

import Body from '../layouts/body'
import Container from '../layouts/container';
import PageHead from '../layouts/page-head';
import FlexGrid from '../layouts/flex-grid';

import FlexColumn from '../layouts/flex-column';

import styled from 'styled-components';

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
const Flex = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
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
const YoutubeIframe = styled.iframe`
    border:0;
    width:100%;
    aspect-ratio: 16/9;
`;

interface Props{
    id:number
}

const MediaSingle:React.FC<Props> = ({id}) => {
    const [data,setData] = useState<any>([]);;
    useEffect(()=>{
        var query = `
        query($id: Int){
            Media(id: $id, type: ANIME) {
                id
                title {
                    romaji
                    english
                    native
                }
                description
                coverImage{
                    large
                }
                season
                seasonYear
                averageScore
                trailer{
                    id
                    site
                    thumbnail
                }
            }
        }
        `;

        // Define our query variables and values that will be used in the query request
        var variables = {
            id: id
        };

        // Define the config we'll need for our Api request
        var url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        };

        // Make the HTTP Api request
        fetch(url, options).then((response)=>{
            console.log('response')
            response.json().then(data=>{
                //console.log(data.data)
                setData(data.data)
            })
        }).catch((error)=>{
            console.log('error')
        });
    },[id])
    if(data.length === 0){
        return <Loading />;
    }
    console.log(data);
    return <Body>
        <Helmet>
            <title>{data['Media']['title']['romaji']} - AnimeList</title>
            <meta name='description' content={data['Media']['description']} />
            <meta name='lang' content='fr_CA' />

            <meta property="og:title"              content={data['Media']['title']['romaji'] + "- AnimeList"} />
            <meta property="og:description"        content={data['Media']['description']} />
            <meta property="og:image"              content={data['Media']['coverImage']['large']} />
            <meta property="og:locale"             content='fr_CA' />
        </Helmet>
        <Container>
            <PageHead>{data['Media']['title']['romaji']}</PageHead>
            <FlexGrid>
                <FlexColumn col={9}>
                    {data['Media']['trailer'] && 
                        <div>
                            {data['Media']['trailer']['site'] === 'youtube' &&
                                <YoutubeIframe src={"https://www.youtube.com/embed/"+data['Media']['trailer']['id']}></YoutubeIframe>
                            }
                        </div>
                    }
                    <h3>Description</h3>
                    <p dangerouslySetInnerHTML={{__html:data['Media']['description']}}></p>
                </FlexColumn>
                <FlexColumn col={3}>
                    <Thumbnail>
                        <source srcSet={"https://testsreact.fredericpilon.com/webpconverter.php?src="+data['Media']['coverImage']['large']} type='image/webp' />
                        <source srcSet={data['Media']['coverImage']['large']} type={"image/"+data['Media']['coverImage']['large'].split(/[#?]/)[0].split('.').pop().trim()} />
                        <Image loading="lazy" src={data['Media']['coverImage']['large']} />
                    </Thumbnail>
                    <h3>Noms:</h3>
                    <p>
                        EN: {data['Media']['title']['english']}<br />
                        JP: {data['Media']['title']['romaji']}<br />
                        JP: {data['Media']['title']['native']}<br />
                    </p>
                    <Flex>
                        <b>Anilist Score:</b><Score score={data['Media']['averageScore']}>{data['Media']['averageScore']}</Score>
                    </Flex>
                </FlexColumn>
            </FlexGrid>
        </Container>
    </Body>
}

export default MediaSingle;