import React from 'react'
import { InputGroup, InputGroupText, InputGroupAddon, Input} from 'reactstrap';

const SearchBar = (props) => {
    return (
        <div>
            <InputGroup>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>Search</InputGroupText>
                </InputGroupAddon>
                <Input />
            </InputGroup>
        </div>
    );
};

export default SearchBar;