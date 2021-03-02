import React from 'react';
import CatListItem from './CatListItem';

const CatList = ({ allCats, handleClick }) => {

  return (
      <div className="cat-list">
        {allCats.map((cat, i) => <CatListItem cat={cat} index={cat.id} handleClick={handleClick} /> )}
      </div>
  )
}

export default CatList;