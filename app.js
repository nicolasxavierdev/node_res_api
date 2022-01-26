const express = require('express');
const app = express();

const port = 4000;

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

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});