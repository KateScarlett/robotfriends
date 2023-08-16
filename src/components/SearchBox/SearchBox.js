import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
    return (
        <div className="tc pa3">
            <input
                className="w-50 pa3 br4 ba-3 b--purple bg-near-white"
                type="seach"
                placeholder="seach robots"
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;
