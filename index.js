const express = require('express');
const bodyParser = require('body-parser');
const Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost/mydb');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Model = Mongoose.model('books', {
  Bookname: String,
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/books', async (req, res) => {
  const person = new Model(req.body);
  const result = await person.save(req.body);
  res.send(result);
});

// app.get('/books', (req, res) => {
//   res.json(books);
// });
// app.get('/books/:id', (req, res) => {
//   res.json(books.find(book => book.id === req.params.id));
// });
// app.post('/books', (req, res) => {
//   books.push(req.body);
//   res.status(201).json(req.body);
// });


// app.put('/books/:id', (req, res) => {
//   const updateIndex = books.findIndex(book => book.id === req.params.id);
//   res.json(Object.assign(books[updateIndex], req.body));
// });
// app.delete('/books/:id', (req, res) => {
//   const deletedIndex = books.findIndex(book => book.id === req.params.id);
//   books.splice(deletedIndex, 1);
//   res.status(204).send();
// });

app.listen(3000, () => {
  console.log('Start server at port 3000.');
});
