import React from 'react';

const Category = ({handleChange2,handleSubmit2,categoryData}) => {
    const catego =['Vetement','Chaussure','Accessoire']
    
    return (
        <div className='category'>
            <form className='' onSubmit={(e)=>handleSubmit2(e)}>
            <select className='category-select' value={categoryData.category} 
            name='category'
            onChange={(e)=>handleChange2(e)}>
            <option value=''>Category</option>
            {catego.sort().map((v,i)=>(
                <option value={v} key={i}>{v}</option>))}
            </select>
            </form>
        </div>
    );
};

export default Category;