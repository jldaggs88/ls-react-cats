import React, { useState } from 'react';

import { catData } from "./catData";
import CatList from './CatList';
import CatView from './CatView';
import EditCat from './EditCat';
import Search from './Search';

const App = () => {

  const [cats, setCats] = useState(catData); //insert dummydata using localstorage
  const [cat, setCat] = useState({
    id: catData[0].id,
    thumbnail: catData[0].thumbnail,
    name: catData[0].name,
    birthDate: catData[0].birthDate,
    ownerName: catData[0].ownerName,
    viewsCount: catData[0].viewsCount
  });
  const [showEdit, setShowEdit] = useState(false);

  const handleClick = (record) => {
    setCat(record, record.viewsCount = record.viewsCount + 1);
  };

  
  const deleteCat = (i) => {
    let allCats = cats.filter((cat, index) => {
      return index !== i;
    });
    setCats(allCats);
};
  
  const handleSearch = () => {

  };

  const formSubmit = () => {
    // const { cat, rememberMe } = cats;
    // localStorage.setItem('cat', rememberMe);
    // localStorage.setItem('user', rememberMe ? user : '');
  }
  

  return (
    <div className="container">
      <h1>Cats</h1>
      <CatList allCats={cats} handleClick={handleClick} cat={cat}/>
      <CatView cat={cat} deleteCat={deleteCat} showEdit={showEdit} setShowEdit={setShowEdit} />
      <Search handleSearch={handleSearch} />
      {showEdit ? <EditCat /> : null} 
    </div>
  )
}

export default App;
