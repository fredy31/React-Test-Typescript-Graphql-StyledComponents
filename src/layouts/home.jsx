import React, {useEffect, useState} from 'react';

import Loading from './loading.jsx';

const Home = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        var query = `
            query ($id: Int) {
                Media (id: $id, type: ANIME) {
                    id
                    title {
                    romaji
                    english
                    native
                    }
                }
            }
        `;

        // Define our query variables and values that will be used in the query request
        var variables = {
            id: 15125
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
                setData(data.data)
            })
        }).catch((error)=>{
            console.log('error')
        });
    },[])
    if(data.length === 0){
        return <Loading />;
    }
    console.log(data["Media"]);
    return <div>{data["Media"]["title"]["romaji"]}</div>
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