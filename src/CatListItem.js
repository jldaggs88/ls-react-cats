import React from 'react';
import { months } from './months';

const CatListItem = ({ cat, handleClick }) => {
  return (
    <div className="list-group-item" onClick={ () => handleClick(cat) } style={{"height": "118px", "padding": "10px 15px"}}>
      <div className="row">
        <div className="col-md-5">
          <img src={cat.thumbnail} alt="" width="85" height="85"/>
        </div>
        <div className="col-md-7">
          <h5 className="list-group-item-heading" >{cat.name}</h5>
        </div>
      </div>
        <p className="list-group-item-text">{new Date(cat.birthDate).getDate() + " " + months[new Date(cat.birthDate).getMonth()] + " " + new Date(cat.birthDate).getFullYear()}</p>
    </div>
  )
}

export default CatListItem;