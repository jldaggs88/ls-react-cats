import React, { useState } from 'react';
import DeleteModal from './DeleteModal'

const CatView = ({ cat, deleteCat, setShowEdit, showEdit, showModal, setShowModal }) => {

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
        <button onClick={ () => setShowEdit(!showEdit)}>Edit</button>
        <button onClick={ () =>{
          setShowModal(!showModal);
          // deleteCat(cat.id)
        }}>Delete</button>
      </div>
      {showModal ? <DeleteModal showModal={showModal} setShowModal={setShowModal} deleteCat={deleteCat} cat={cat}/> : null}
    </div>
  )
}

export default CatView;