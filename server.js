// Importera Express för att kunna skapa en webbserver och Mongoose för att interagera med MongoDB-databasen.
import express from "express"
import mongoose from "mongoose"


// Skapar en instans av Express-appen, detta är vår webbserver.
const server = express()

// port som servern lyssnar på
const port = 4000


//Servern använder en middleware ( express.json() ) för att omvandla våra request till JSON.
server.use(express.json())


mongoose.connect("mongodb+srv://Hayden01:MusicAndArtLover@Cluster0.u8qd0bq.mongodb.net/BookFinder")




// Skapar ett schema för "books", vilket definierar strukturen för varje "book"-dokument i databasen.
const booksSchema = new mongoose.Schema({
  title: String,
  genre: String,
  page_count: Number,
  price: Number,
  author: String,
  language: String,
  publication_date: Date,
  grade: Number,
});

 
//Skapar en Mongoose-modell baserat på booksSchema.
const Book = mongoose.model('books', booksSchema);

/*
  Skapar en GET - route på '/api/books'. 
  route anropas, hämtar den alla dokument från vår "books"-collection och skickar tillbaka dem som en JSON-response.
*/
server.get('/api/books', async (req, res) => {
  res.json(await Book.find())
    ;  
});


//find()-metoden: felmeddelande om det uppstår problem med att hämta book
server.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    req.json(books); // Skickar en array av alla books som JSON.
  } catch (error) {
    res.status(500).json({ message: "Something went wrong with the server when trying to get the books" });
  }
});


//findById: hämtar ett dokument (book) baserat på ID 
server.get('/api/books/:id', async (req, res) => {
  try {
    const bookId = await Book.findById(req.params.id);
    if (!bookId) {
      return res.status(404).json({ message: "The book could not be found" });
    }
    res.json(bookId); // Skickar book som JSON.
  } catch (error) {
    res.status(500).json({ message: "Something went wrong with the server when trying to get one specific book by id" });
  }
});



//save: möjlighet att skapa en POST request (lägga till en ny book med info) 
server.post('/api/books', async (req, res) => {
  const newBook = new Book(req.body);
  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook); 
  } catch (error) {
    res.status(500).json({ message: "Something went wrong with the server when trying to add a new book" });
  }
});


//findByIdAndUpdate: låter dig uppdatera ett dokument (book) baserat på dess ID
server.put('/api/books/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ message: "The book could not be found" });
    }
    res.json(updatedBook); // Skickar den uppdaterade book som JSON.
  } catch (error) {
    res.status(500).json({ message: "Something went wrong with the server when trying to update a specific book by id" });
  }
});



//findByIdAndDelete: Låter dig radera ett book-dokument baserat på dess ID
server.delete('/api/books/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: "The book could not be found" });
    }


    res.json({ message: "The book has been deleted!" }); 
  } catch (error) {
    res.status(500).json({ message: "Something went wrong with the server when trying to delete a book by id" });
  }
});


server.listen(port, () => console.log(`Listening on port http://localhost:${port}/api/books`))