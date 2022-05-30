import * as React from 'react';


const SearchSell = () => {
    const submitFrom = (event) => {
        event.preventDefault();
    }

    return(
    <form onSubmit={submitFrom}>
    <div>
        <input/>
        <button>buscar</button>
    </div>
    </form>
    );
}

export default SearchSell;