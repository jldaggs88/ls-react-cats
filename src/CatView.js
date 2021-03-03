import React from 'react';
import DeleteModal from './DeleteModal'
import EditModal from './EditModal';
import { months } from './months';

const CatView = ({ cat, deleteCat, editCat, setShowEdit, showEdit, showModal, setShowModal, allCats }) => {
  return (
    <div key={cat.id} className="cat-view">
      <div>
        <img src={cat.thumbnail} alt="" />
        <div>{cat.name}</div>
        <div>{new Date(cat.birthDate).getDate() + " " + months[new Date(cat.birthDate).getMonth()] + " " + new Date(cat.birthDate).getFullYear()}</div>
        <div>{cat.ownerName}</div>
        <div>Number of views: {cat.viewsCount} times</div>
      </div>
      <div>
        <div class="btn-toolbar" role="toolbar" aria-label="...">
          <button type="button" class="btn btn-primary" onClick={ () => setShowEdit(!showEdit)}>
            Edit
          </button>
        
          <button type="button" class="btn btn-primary" onClick={ () => setShowModal(!showModal)}>
            Delete
          </button>
        </div>
      </div>
      {showModal ? <DeleteModal showModal={showModal} setShowModal={setShowModal} deleteCat={deleteCat} cat={cat}/> : null}
      {showEdit ? <EditModal showEdit={showEdit} setShowEdit={setShowEdit} editCat={editCat} cat={cat} allCats={allCats} /> : null}
    </div>
  )
}

export default CatView;