import React from 'react';

const Search = ({data,handleChange,handleSubmit}) => {
   
    return (
        <>
            <div >
            <form className='search' onSubmit={(e)=>handleSubmit(e)}>
            <input className='inputsearch' type='text'
             name='search'
             value={data.search}
             onChange={(e)=>handleChange(e)}
             placeholder='Search...'/>
            <button className='btn btn-search'><i className="fa-sharp fa-solid fa-magnifying-glass"></i></button>
            </form>
            </div>
        </>
    );
};

export default Search;