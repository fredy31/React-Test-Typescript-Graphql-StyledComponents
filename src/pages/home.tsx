import React from 'react';
import Helmet from 'react-helmet';

//import Loading from './loading';

import Body from '../layouts/body'
import Container from '../layouts/container';
import PageHead from '../layouts/page-head'
//import FlexGrid from './../layouts/flex-grid'
//import FlexColumn4 from './../layouts/flex-column-4'
import SearchResultPage from '../layouts/searchResultPage';
import Button from '../components/button';

import styled from 'styled-components'

const Flex = styled.div`
    display:flex;
    justify-content:space-between;
    padding:32px 0;
`;

interface Props{
    page:number
};

const Home:React.FC<Props> = ({page=1}) => {
    return <Body>
        <Helmet>
            <title>AnimeList (Tests React)</title>
            <meta name='description' content='Ceci est un test de fonctionalités react via Animelist' />
            <meta name='lang' content='fr_CA' />
        </Helmet>
        <Container>
            <PageHead>AnimeList<br />(Tests GraphQL / TypeScript / StyledComponents)</PageHead>
            <SearchResultPage page={page} />
            <Flex>
                {(page>1) ? <Button linkto={"/page/"+(page-1)}>Précédent</Button> : <div></div>}
                <div><Button linkto={"/page/"+(page+1)}>Suivant</Button></div>
            </Flex>
        </Container>
    </Body>
}

export default Home;