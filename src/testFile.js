const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'out.csv',
  header: [
    {id: 'id', title: 'Id'},
    {id: 'thumbnail', title: 'Thumbnail'},
    {id: 'name', title: 'Name'},
    {id: 'birthDate', title: 'BirthDate'},
    {id: 'ownerName', title: 'OwnerName'},
    {id: 'viewsCount', title: 'ViewsCount'},
  ]
});

const data = [
  {
    id: 0,
    thumbnail: "https://media.istockphoto.com/videos/portrait-of-highland-straight-fluffy-cat-with-long-hair-and-round-in-video-id1161210058?s=640x640",
    name: "Gordo",
    birthDate: "2014-07-13",
    ownerName: "Jane Doe",
    viewsCount: 0 
  },{
    id: 1,
    thumbnail: "https://i.pinimg.com/originals/bf/f5/d0/bff5d074d399bdfec6071e9168398406.jpg",
    name: "Gigi",
    birthDate: "2016-08-22",
    ownerName: "Kate Debarros",
    viewsCount: 0 
  },{
    id: 2,
    thumbnail: "https://cdn.shopify.com/s/files/1/0074/5049/2975/products/O1CN013rTfLQ1xXWI3iJ4Hh__672316453_650x.jpg?v=1613061370",
    name: "Super",
    birthDate: "2019-01-3",
    ownerName: "John Doe",
    viewsCount: 0 
  },{
    id: 3,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlbglatVBDYyrXXzvlVzovq-4lV3FqLwUeOg&usqp=CAU",
    name: "Zappy",
    birthDate: "2014-12-8",
    ownerName: "John Doe",
    viewsCount: 0 
  },{
    id: 4,
    thumbnail: "https://www.thepaws.net/wp-content/uploads/2019/04/funny-cats.jpg",
    name: "Mr.& Mrs. Poppers",
    birthDate: "2012-06-11",
    ownerName: "Kate Debarros",
    viewsCount: 0 
  },
];

csvWriter
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));