import React from "react";
import { useState } from "react";

const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleFormSubmit(term);
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="ui-form">
                <div className="field">
                    <input
                        className="search-box"
                        onChange={event => setTerm(event.target.value)}
                        name="video-search"
                        type="text"
                        value={term}
                        placeholder="Search"
                    />
                    <button type="submit" className="searchButton">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;

