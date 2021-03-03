import React from 'react';
import DeleteModal from './DeleteModal'
import EditModal from './EditModal';
import { months } from './months';

const CatView = ({ cat, deleteCat, editCat, setShowEdit, showEdit, showModal, setShowModal, allCats }) => {
  return (
    <div className="thumbnail">
      <img src={cat.thumbnail} alt="" width="350px" height="325px" />
      <div className="caption">
        <h3>{cat.name}</h3>
        <div>
          <div>{new Date(cat.birthDate).getDate() + " " + months[new Date(cat.birthDate).getMonth()] + " " + new Date(cat.birthDate).getFullYear()}</div>
          <div>{cat.ownerName}</div>
          <div>Number of views: {cat.viewsCount} times</div>
        </div>
      
      <div>
        <div className="btn-toolbar" role="toolbar" aria-label="...">
          <button type="button" className="btn btn-primary" onClick={ () => setShowEdit(!showEdit)}>
            Edit
          </button>
        
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#deleteModal" onClick={ () => setShowModal(!showModal)}>
            Delete
          </button>
        </div>
      </div>
      {showModal ? <DeleteModal showModal={showModal} setShowModal={setShowModal} deleteCat={deleteCat} cat={cat} allCats={allCats}/> : null}
      {showEdit ? <EditModal showEdit={showEdit} setShowEdit={setShowEdit} editCat={editCat} cat={cat} allCats={allCats} /> : null}
    
      </div>
    </div>
  )
}

export default CatView;