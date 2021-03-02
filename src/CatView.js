import React from 'react';

const CatView = ({ cat}) => {

  return (
    <div key={cat.index} className="cat-view">
      <div>
        <div>{console.log(cat)}</div>
        <img src={cat.thumbnail} alt="" />
        <div>{cat.name}</div>
        <div>{cat.birthdate}</div>
        <div>{cat.ownerName}</div>
      </div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default CatView;