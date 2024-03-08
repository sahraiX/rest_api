const express = require('express')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Chanannaphat Singkhal 6404101357')
})

const books = require('./db')
app.get('/books', (req, res) => {
  res.json(books)
})
/*
app.get('/books/:id', (req, res) => {
    res.json(books.find(book => book.id === req.params.id))
  })

  app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).json(req.body)
  })  

  app.put('/books/:id', (req, res) => {
    const updateIndex = books.findIndex(book => book.id === req.params.id)
    res.json(Object.assign(books[updateIndex], req.body))
  })

//Delete from books where id = 5
  app.delete('/books/:id', (req, res) => {
    const deletedIndex = books.findIndex(book => book.id === req.params.id)
    delete books[deletedIndex];
    res.status(200).json(req.body)
})
*/
app.listen(3000, () => {
  console.log('http://localhost:3000')
})