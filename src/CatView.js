import React from 'react';

const CatView = ({ cat }) => {

  return (
    <div key={cat.id} className="cat-view">
      <div>
        <div>{console.log('views', cat.viewsCount)}</div>
        <img src={cat.thumbnail} alt="" />
        <div>{cat.name}</div>
        <div>{cat.birthDate}</div>
        <div>{cat.ownerName}</div>
        <div>Number of views: {cat.viewsCount} times</div>
      </div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default CatView;