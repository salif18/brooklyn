import React from 'react';

const Category = () => {
    const category =['Vetement','Chaussures','Accessoires']
    return (
        <div className='category'>
            <form className=''>
            <select className='category-select' name='category'>
            <option value=''>Category</option>
            {category.sort().map((v,i)=>(
                <option value={v} key={i}>{v}</option>))}
            </select>
            </form>
        </div>
    );
};

export default Category;