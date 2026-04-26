const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Serverul Express funcționează perfect!');
});


app.get('/home', (req, res) => {
   
    res.render('index'); 
});

app.get('/admin', (req, res) => {
    res.send('Aceasta este pagina de Admin');
});

app.post('/api/login', (req, res) => {
    // Extragem datele trimise din formular
    const username = req.body.username;
    const password = req.body.password;


    console.log(`Încercare de login - User: ${username}, Parolă: ${password}`);

    res.send(`Autentificare procesată pentru utilizatorul: ${username}`);
});

app.listen(port, () => {
    console.log(`Serverul a pornit și ascultă pe http://localhost:${port}`);
});