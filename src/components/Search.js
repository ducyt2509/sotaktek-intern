import React from 'react';

const Search = ({ setSearch }) => {
    return (
        <div>
            <div className='w-full mc'>
                <input type="text" name='task' placeholder='Search ...' onChange={(e) => setSearch(e.target.value)} />
            </div>

        </div>
    );
};

export default Search;  