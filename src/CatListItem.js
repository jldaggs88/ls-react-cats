import React from 'react';

const CatListItem = ({ cat, handleClick }) => {

  return (
    <div className="cat-item" onClick={ () => handleClick(cat) }>
      <img src={cat.thumbnail} alt="" />
      <div>{cat.name}</div>
      <div>{cat.birthDate}</div>
    </div>
  )
}

export default CatListItem;