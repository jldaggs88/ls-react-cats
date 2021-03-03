import React from 'react';
import DeleteModal from './DeleteModal'
import EditModal from './EditModal';

const CatView = ({ cat, deleteCat, editCat, setShowEdit, showEdit, showModal, setShowModal, allCats }) => {

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
        <button onClick={ () => setShowModal(!showModal)}>
          Delete
        </button>
      </div>
      {showModal ? <DeleteModal showModal={showModal} setShowModal={setShowModal} deleteCat={deleteCat} cat={cat}/> : null}
      {showEdit ? <EditModal showEdit={showEdit} setShowEdit={setShowEdit} editCat={editCat} cat={cat} allCats={allCats} /> : null}
    </div>
  )
}

export default CatView;