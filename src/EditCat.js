import React from 'react';

const EditCat = ({ cat }) => {

  return (
    <div className="cat-edit">
      {'you sure about this?!'}
    </div>
  )
}

export default EditCat;




// const editAttr = (i) => {
//   let allCats = cats;
//   allCats[i].isEditing = true;
//   setCats(cats);
// };

// const updateCat = (i, id, thumbnail, name, birthDate, ownerName, viewsCount) => {
//   let allCats = cats;
//   allCats[i].id = id;
//   allCats[i].thumbnail = thumbnail;
//   allCats[i].name = name;
//   allCats[i].birthDate = birthDate;
//   allCats[i].format = format;
//   allCats[i].ownerName = ownerName;
//   allCats[i].options = options;
//   allCats[i].viewsCount = viewsCount;

//   setCats(allCats);
// }