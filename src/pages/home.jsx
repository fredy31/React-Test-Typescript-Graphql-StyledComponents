import React, {useEffect, useState} from 'react';

import Loading from './loading';

import Body from './../layouts/body'
import Container from './../layouts/container';
import PageHead from './../layouts/page-head'
import FlexGrid from './../layouts/flex-grid'
import FlexColumn from './../layouts/flex-column'

const Home = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        var query = `
        {
            Page(page: 1, perPage: 50) {
                pageInfo {
                    total
                    currentPage
                    lastPage
                    hasNextPage
                    perPage
                }
                mediaList {
                    media {
                        id
                        title {
                            romaji
                            english
                            native
                        }
                        season
                        seasonYear
                        averageScore
                    }
                }
            }
        }
        `;

        // Define our query variables and values that will be used in the query request
        /*var variables = {
            id: 15125
        };*/

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
                //variables: variables
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
    },[])
    if(data.length === 0){
        return <Loading />;
    }
    return <Body>
        <Container>
            <PageHead>AnimeList<br />(Tests GraphQL / TypeScript / StyledComponents)</PageHead>
            <FlexGrid>
                {(Array.isArray(data.Page.mediaList) && data.Page.mediaList !== 0) && data.Page.mediaList.map(media=>( 
                    <FlexColumn>
                        {(console.log(media['media']))}
                        {media['media']['title']['romaji']}
                    </FlexColumn>
                ))}
            </FlexGrid>
        </Container>
    </Body>
}

/*function getData(){
    useQuery("posts",async()=>{
        const {
            id = 15125
        } = await request(
            endpoint,
            gql`
                Media (id: 15125, type: ANIME) {
                    id
                    title {
                        romaji
                        english
                        native
                    }
                }
            `
        );
        console.log(data);
        return data
    })
}*/

export default Home;