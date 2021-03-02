import React, { useState } from 'react';

import { catData } from "./catData";
import CatList from './CatList';
import CatView from './CatView';
import Search from './Search';

const App = () => {

  const [cats, setCats] = useState(catData); //insert dummydata using localstorage
  const [currentCat, setCurrentCat] = useState(catData[0]);

  const handleClick = (cat) => {
    setCurrentCat(cat);
  };

  
  const handleSearch = () => {

  };

  return (
    <div className="container">
      <h1>Cats</h1>
      <CatList allCats={cats} handleClick={handleClick}/>
      <CatView cat={currentCat} />
      <Search handleSearch={handleSearch} />
    </div>
  )
}

export default App;
