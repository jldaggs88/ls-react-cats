import React, { useState, useEffect } from 'react';

import { catData } from "./catData";
import CatList from './CatList';
import CatView from './CatView';

const App = () => {

  const initialData = () => JSON.parse(window.localStorage.getItem('catData').split(','));
  initialData()

  const [cats, setCats] = useState(initialData);
  const [cat, setCat] = useState({
    id: catData[0].id,
    thumbnail: catData[0].thumbnail,
    name: catData[0].name,
    birthDate: catData[0].birthDate,
    ownerName: catData[0].ownerName,
    viewsCount: catData[0].viewsCount
  });
  const [showEdit, setShowEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    window.localStorage.setItem('catData', JSON.stringify(catData));
    initialData()
    
  }, [])

  const handleClick = (record) => {
    setCat(record, record.viewsCount = record.viewsCount + 1);
  };

  const editCat = (id, thumbnail, name, birthDate, ownerName) => {
    console.log()
    
    let newCats = cats;
    newCats[id][thumbnail] = thumbnail;
    newCats[id].name = name;
    newCats[id][birthDate] = birthDate;
    newCats[id].ownerName = ownerName;
    
    setCats(newCats);
    setCat(cat)
    setShowEdit(!showEdit);
  }
  
  const deleteCat = (i) => {
    let allCats = cats.filter((cat, index) => {
      console.log(cat, i, index)
      return index !== i;
    });
    setCats(allCats);
    setShowModal(!showModal)
  };

  return (
    <div className="container">
      <h1 className="text-center">Cats</h1>
      <div className="row">
        <div className="col-md-4">
          <div>
            <CatList allCats={cats} handleClick={handleClick} />
          </div>
        </div>
        <div className="col-md-8">
          <div className="jumbotron">
            {
              !(cats.length > 0) ? 
                <div>I'm sorry there are no more cats.</div> :
                <CatView cat={cat} setCat={setCat} deleteCat={deleteCat} editCat={editCat} showModal={showModal} setShowModal={setShowModal} showEdit={showEdit} setShowEdit={setShowEdit} allCats={cats}/>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
