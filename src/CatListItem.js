import React, { useState } from 'react';

const CatListItem = ({ cat, handleClick }) => {

  return (
    <div className="cat-item" onClick={ () => {handleClick(cat)} }>
      <div>{console.log(cat)}</div>
      <img src={cat.thumbnail} alt="" />
      <div>{cat.name}</div>
      <div>{cat.birthdate}</div>
    </div>
  )
}

export default CatListItem;