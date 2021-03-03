import React from 'react';
import { months } from './months';

const CatListItem = ({ cat, handleClick }) => {
  return (
    <div class="list-group-item" onClick={ () => handleClick(cat) } style={{"height": "115px", "padding": "10px 15px"}}>
      <div class="row">
        <div class="col-md-5">
          <img src={cat.thumbnail} alt="" width="85" height="85"/>
        </div>
        <div class="col-md-7">
          <h5 class="list-group-item-heading" >{cat.name}</h5>
        </div>
      </div>
        <p class="list-group-item-text">{new Date(cat.birthDate).getDate() + " " + months[new Date(cat.birthDate).getMonth()] + " " + new Date(cat.birthDate).getFullYear()}</p>
    </div>
  )
}

export default CatListItem;