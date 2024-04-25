/*export default function (server, mongoose) {

  //skapar ett schema för "books", definerar strukturen för varje "book"-dokument i databasen
  const bookSchema = new mongoose.Schema({
    title: String,
    genre: String,
    page_count: String,
    price: Number,
    author: String,
    language: String,
    publication_date: Date,
    grade: Number

  });

  /*
      Skapar en Mongoose-modell baserat på usersSchema.
      Detta möjliggör för oss att skapa, läsa, uppdatera och radera (CRUD) dokument i vår "books"-samling (collection).
    */
  //const Book = mongoose.model("books", bookSchema);


  /*
  Skapar en GET-route på '/api/books'. 
  När denna route anropas, hämtar den alla dokument från vår "books"-samling och skickar tillbaka dem som ett JSON-svar.
  */
  /*server.get('/api/books', async (req, res) => {
    try {
      req.json(await Book.find());
    } catch (error) {
      res.status(500).json({ message: "Something went wrong when loading books" });
    }
  });*/

  /*server.get('/api/books', async (req, res) => {
    res.json(await Book.find())
      ;  // Använder Mongoose's "find"-metod för att hämta alla "books".
  });




  //GET- hämtar en specifik bok med ett ID
  server.get('/api/books/:id', async (req, res) => {
    try {
      const bookId = await Book.findById(req.params.id);
      if (!bookId) {
        return res.status(404).json({ message: "the book could not be found" });
      }
      res.json(bookId); // Skickar användaren som JSON.
    } catch (error) {
      res.status(500).json({ message: "Something went wrong with the server when trying to get the book" });
    }
  });


  //POST- lägger till en ny bok
  server.post('/api/books', async (req, res) => {
    try {
      const newBook = new Book({
        title: req.body.title,
        genre: req.body.genre,
        page_count: req.body.page_count,
        price: req.body.price,
        author: req.body.author,
        language: req.body.language,
        publication_date: req.body.publication_date,
        grade: req.body.grade
      })
      const savedBook = await newBook.save()
      res.json(savedBook)
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong with the server when trying to add a new book" });
    }
  });


  //PUT: updaterar en bok baserat på dess ID
  server.put('/api/books/:id', async (req, res) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body);

      if (!updatedBook) {
        return res.status(404).json({ message: "The book could not be found" });
      }
      res.json(updatedBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong with the server when trying to update the book" });
    }
  });


  //DELETE: raderar en bok baserat på dess ID
  server.delete('/api/books/:id', async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);

      if (!deletedBook) {
        return res.status(404).json({ message: "Book could not be found" });
      }
      res.json({ message: "The book is now deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong with the server when trying to delete a book" });
    }
  });
  
  }

  */
  

