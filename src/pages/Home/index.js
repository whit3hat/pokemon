import React from 'react';
import Navbar from '../../components/Nav';
import SearchBar from '../../components/SearchBar';
import { Container, Row, Col } from 'reactstrap';

function Home(){
    return(
        <div>
            <Container>
                <Row>
                    <Navbar />
                </Row>
                <Row>
                    <h1>Pokédex</h1>
                </Row>
                <Row>
                    <SearchBar />
                </Row>
            </Container>
        </div>
    )
}

export default Home;