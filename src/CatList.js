import React from 'react';
import CatListItem from './CatListItem';

const CatList = ({ allCats, handleClick }) => {

  return (
    <div className="list-group" >
      {allCats.map((cat, i) => <CatListItem key={cat.id} cat={cat} handleClick={handleClick} /> )}
    </div>
  )
}

export default CatList;