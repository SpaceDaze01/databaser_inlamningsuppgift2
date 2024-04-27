Inlämningsuppgift 2 - databas

Dokumentation

Skapa din egna databas med hjälp av mongoDB:
Först och främst behöver vi skapa ett konto på mongoDB atlas för att påbörja med våran databas. Sedan kan vi välja att ladda ner mongoDB compass, denna applikation gör processen mycket enklare för att få igång och att redigera databaser. 

1.Skapa en databas i mongoDB Atlas (t.ex. med namnet Cluster0), gör sedan en "connection" så att mongoDB ansluter sig och går ihop med mongoDB Compass. 
2.I sista steget för anslutningen så kommer vi få en lång sträng i Atlas som vi behöver kopiera och klistra in i Compass för att göra en anslutning. Denna kallas för connection string. Även så kommer vi behöva använda denna sträng i våran databas. Strängen brukar innehålla användarnamn, lösenord och databasnamnet.
3.En databas kan innehålla olika collections. Skapa och välj ett namn för din collection, den kommer att innehålla tabeller med information. 
4.Efter att allt funkar så behöver vi göra en setup av express-mongoose för att den ska ansluta till våran databas och att vi ska kunna få igång databasen på våran webbläsare. 

För att göra en simpel setup av Express-mongoose:
1.I terminalen skriv: npm init -y (i visual studio code)
2.Sedan skriv in npm i express mongoose
3.Gå in i package.json och lägg till "type": "module"
4.Skapa en server.js fil för att importera mongoose och express (import express from "express", import mongoose from "mongoose")
5.Skapa en const instans av express appen, detta kommer bli våran webbserver (const server = express())
6.Skapa en port som servern ska lyssna på (t.ex. const port = 3000)
7.Sedan skapar vi en server.use(express.json()). Detta gör vi då servern använder en middleware (express.json()) för att kunna göra om vår request till json. Då går det att hantera JSON-data som skickas i en request body. 
8.Med hjälp av mongoose.connect() så ansluter mongoose till mongoDB databasen. Strängen mellan parenteserna ska innehålla våran mongoDB Atlas connection-string. 
9.Skapa en Schema för t.ex. "books":
const booksSchema = new.mongoose.Schema({
  title: String, //varje "book" kommer att ha en "title"
  author: String,
  genre: String,
  price: Number})
  
  Strukturen defineras för varje "book"-dokument i databasen. 

10.Skapa en mongoose-modell baserat på booksSchema. På detta viss kan vi läsa, skapa, uppdatera och ta bort (CRUD) dokument i våran "Books"-collection. Exempel:
const Book = mongoose.model('books', booksSchema);

11.Nu gör vi det möjligt att starta servern genom att den lyssnar på den definierade porten (t.ex. 3000). När serven har startas så ska det loggas ett meddelande till konsolen. Exempel:
server.listen(port, () => console.log(`Listening on port http://localhost:${port}`))

12.Nu går det att börja skapa GET, POST, PUT, DELETE requests. Detta kan vi göra direkt inne i server.js eller i en separat fil. Det viktiga då är att man gör en "export default" och en "import". 
GET - läsa
POST - skapa
PUT - Uppdatera
DELETE - ta bort


Hämta MOCK-DATA till din databas:
Gå in på mockaroo.com, fyll i följande information som du vill ha med i din Schema, när du är klar med att fylla i information så trycker du på "Generate data". Spara din MOCK-DATA som en JSON Source File (.json) på din dator. Gå in på mongoDG Atlas och din collection, tryck på "add data" och sen "import JSON or CSV file". Välj din MOCK-DATA JSON fil och tryck sedan på "select". Nu ska du kunna se all MOCK-DATA som du generat i din databas när du kör igång din server på din webbläsare. 


Kör tester med postman:
För att köra tester med postman så måste man ha en fungerande databas med tabeller av information. 

Manuella tester:
Vi behöver skriva alla tester på egen hand, dvs att vi behöver repetera viss kod för varje test.

Automatiska tester:
Detta är ett enklare och smidigare sätt att jobba på, vi behöver inte alltid repetera vissa tester för varje test vi gör i en postman collection, istället kör vi en så kallad "run collection". Då kollar postman igenom alla tester vi skapat och ser och dem funkar (PASS) eller inte (FAIL). 


OBS! Beskrivning av testerna skickar jag separat i ett google docs dokument.

Rapport

Problem?
Jag har haft problem med visual studio code och mongoose express. I början funkade min databas jag hade skapat i flera dagar (med en server.js, books.js och register.js), men plötsligt en dag så slutade det funka. Vet ej varför då jag inte hade gjort några förändringar i databasen. Lösningen till problemet blev att förflytta all data från books.js och register.js till server.js. Detta har funkat för mig under resten av tiden för uppgiften.

Ett annat problem var att jag hade nåt en limit i min run collection i postman, det stod på engelska att jag nått över gränsen för det som ingår i ett gratis postman konto. Då kunde jag inte testa min automatiska tester, istället blev dem uppgifterna liknande som dem manuella testerna jag gjort. 

Vad har funkat bra?
Det gick ganska smidigt med dem manuella testerna på postman. 

Eventuella förbättringar?
Det jag skulle vilja till nästa gång är att ha en fungerande databas med flera filer i visual studio code (istället för en) så att jag kan skapa mer och ha mer ordning. 

Tester - hur har det gått?
Det har gått hyfsat bra med dem manuella testerna men inte lika bra med dem automatiska då det inte gick att köra en run collection i postman.  


OBS!
För att kunna komma in på localhost-länken behöver man kommentera ut .gitignore, eventuellt ta bort filen annars.

Betyg
Jag satsar på godkänt för denna uppgift.