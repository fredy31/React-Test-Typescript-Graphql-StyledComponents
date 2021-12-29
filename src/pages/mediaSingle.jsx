import React,{useState,useEffect} from 'react';
import Loading from './loading';

import Body from './../layouts/body'
import Container from './../layouts/container';
import PageHead from './../layouts/page-head'

const MediaSingle = (props) => {
    const [data,setData] = useState([]);
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
                coverImage{
                    large
                }
                season
                seasonYear
                averageScore
            }
        }
        `;

        // Define our query variables and values that will be used in the query request
        var variables = {
            id: props.id
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
    },[props.id])
    if(data.length === 0){
        return <Loading />;
    }
    console.log(data);
    return <Body>
        <Container>
            <PageHead>{data['Media']['title']['romaji']}</PageHead>
        </Container>
    </Body>
}

export default MediaSingle;