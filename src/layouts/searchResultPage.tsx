import React, {useEffect, useState} from 'react';

import FlexGrid from './flex-grid'
import FlexColumn from './flex-column';

import MediaCard from '../components/mediaCard';
import LoadMore from '../components/loadMore';

interface Props{
    page:number
}

const SearchResultPage:React.FC<Props> = ({page}) => {
    const [data,setData] = useState<any>([]);
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
            page: page
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
    },[page])
    if(data.length === 0){
        return <LoadMore />;
    }
    return <FlexGrid>
        {(Array.isArray(data.Page.mediaList) && data.Page.mediaList !== 0) && data.Page.mediaList.map((media:any)=>( 
            <FlexColumn col={3} key={media['media']['id']}>
                <MediaCard data={media['media']} />
            </FlexColumn>
        ))}
    </FlexGrid>
}

export default SearchResultPage;