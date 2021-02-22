import React, { useState, useEffect } from 'react';

const Search = () => {
    const [query, setQuery] = useState();

    useEffect(() => {
        if (!query)
            return;
        console.log("fetch data of server")
    }, [query])
    return (
        <div>
            Search: <input vale={query} onChange={e => setQuery(e.target.value)} />
        </div>
    );
};

export default Search;