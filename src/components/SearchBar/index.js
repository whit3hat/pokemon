import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from '../../utils/API';

const SearchBar = (props) => {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label for='search'>Search</Label>
                    <Input type='search' name='search' id='searchBar' placeholder='Search for Pokémon'/>
                </FormGroup>
                <Button>Search</Button>
            </Form>
        </div>
    );
};

export default SearchBar;