import React, { useState } from 'react';

import { catData } from "./catData";
import CatList from './CatList';
import CatView from './CatView';
import Search from './Search';

const App = () => {

  const [cats, setCats] = useState(catData); //insert dummydata using localstorage
  // const [count, setCount] = useState(0);  
  const [cat, setCat] = useState({
    id: catData[0].id,
    thumbnail: catData[0].thumbnail,
    name: catData[0].name,
    birthDate: catData[0].birthDate,
    ownerName: catData[0].ownerName,
    viewsCount: catData[0].viewsCount
  });    

  const handleClick = (record) => {
    setCat(record, record.viewsCount = record.viewsCount + 1);


    // setCount(count + 1);
    // cat.viewsCount = count;
  };
  
  const handleSearch = () => {

  };

  return (
    <div className="container">
      <h1>Cats</h1>
      <CatList allCats={cats} handleClick={handleClick} cat={cat}/>
      <CatView cat={cat} />
      <Search handleSearch={handleSearch} />
    </div>
  )
}

export default App;
