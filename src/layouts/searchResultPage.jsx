import React, {useEffect, useState} from 'react';

import FlexGrid from './flex-grid'
import FlexColumn4 from './flex-column-1-4';

import MediaCard from '../components/mediaCard';
import LoadMore from '../components/loadMore';

const SearchResultPage = (props) => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        var query = `
        query($page: Int){
            Page(page: $page, perPage: 48) {
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
                        coverImage{
                            large
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
        var variables = {
            page: props.page
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
    },[props.page])
    if(data.length === 0){
        return <LoadMore />;
    }
    return <FlexGrid>
        {(Array.isArray(data.Page.mediaList) && data.Page.mediaList !== 0) && data.Page.mediaList.map(media=>( 
            <FlexColumn4 key={media['media']['id']}>
                <MediaCard data={media['media']} />
            </FlexColumn4>
        ))}
    </FlexGrid>
}

export default SearchResultPage;