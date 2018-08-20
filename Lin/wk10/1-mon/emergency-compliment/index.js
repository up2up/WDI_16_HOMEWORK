const express = require('express');
const _ = require('lodash');

const app = express();
const PORT = 3333;

const compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you"
]
const colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"]

app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index',
    {
      compliments: _.sample(compliments),
      backgroundColor: _.sample(colors),
      person: ""
    })
})

app.get('/*/', (req, res) => {
  res.render('index',
    {
      compliments: _.sample(compliments),
      backgroundColor: _.sample(colors),
      person: `Hello ${req.path.replace('\/', '')}`
    })
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))