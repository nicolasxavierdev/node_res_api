const express = require('express');
const app = express();

const port = 4000;

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});

app.get('/games', (req, res) => {
  res.send(games);
});

//Lista de ususarios.
const users = [
  {
    id: 1,
    name: "Nícolas",
    year: 28,
    email: "nicolas@gmail.com"
  },
  {
    id: 2,
    name: "Betariz",
    year: 25,
    email: "beatriz@gmail.com"
  },
  {
    id: 3,
    name: "Lucas",
    year: 24,
    email: "lucas@gmail.com"
  },
  {
    id: 4,
    name: "Junior",
    year: 40,
    email: "junior@gmail.com"
  }
];

//Lista de games.
const games = [
  {
    id: 1,
    name: "Apex Legends",
    year: 2019,
    gender: "battle royale"
  },
  {
    id: 2,
    name: "Fortnite",
    year: 2017,
    gender: "battle royale"
  },
  {
    id: 3,
    name: "Crash Bandicoot",
    year: 1996,
    gender: "aventura"
  },
  {
    id: 4,
    name: "Donkey Kong Country",
    year: 1994,
    gender: "aventura"
  }
];

//Endpoint de usuarios.
app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:email', (req, res) => {
  const userEmail = req.params.email;

  const user = users.filter((item) => {
    return item.email == userEmail
  });
  res.send(user);
});

//Endpoint de games.
app.get('/games/:id', (req, res) => {
  const idGame = req.params.id;

  const game = games.filter((item) => {
    return item.id == idGame
  });
  res.send(game);
});