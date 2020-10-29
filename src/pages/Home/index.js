import React from 'react';
import Navbar from '../../components/Nav';
import SearchBar from '../../components/SearchBar';
import { Container, Row, Col } from 'reactstrap';


function Home(){
    return(
        <div>
            <Container>   
                <Navbar />
                <Row>
                    <Col xs='12' sm='12' lg='4'>
                        <h1>Pokédex</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs='12' sm='12' lg='4'>
                        <SearchBar />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;