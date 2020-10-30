import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';





const SearchBar = (props) => {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label for='search'>Search</Label>
                    <Input type='search' name='search' id='searchBar' placeholder='Search for Pokémon'/>
                </FormGroup>
                <Button ></Button>
            </Form>
        </div>
    );
};

export default SearchBar;