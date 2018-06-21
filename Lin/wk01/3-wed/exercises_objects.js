// The Recipe Card
var recipe = {
  title: "chocolate cake",
  servings: 3,
  ingredients: ["flour", "baking powder", "sugar", "eggs", "milk"]
};

console.log(" . " + recipe.title);
console.log(" . Serves: " + recipe.servings);
console.log(" . Ingredients: ");
for (var i = 0; i < recipe.ingredients.length; i++) {
  console.log(" . " + recipe.ingredients[i]);
}

// The Reading List

var books = [
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    alreadyRead: true
  },
  {
    title: "You Don’t Know JS Book Series",
    author: "Kyle Simpson",
    alreadyRead: true
  },
  {
    title: "JavaScript: The Definitive Guide",
    author: "David Flangan",
    alreadyRead: false
  }
]

for (var i = 0; i < books.length; i++) {
  if (books[i].alreadyRead) {
    console.log("You already read " + "\"" + books[i].title + "\"" + " by " + books[i].author + ".");
  }
  else {
    console.log("You still need to read " + "\"" + books[i].title + "\"" + " by " + books[i].author + ".");
  }
}

// The Movie Database

var movie = {
  title: "Ocean's Eight ",
  duration: "1h 50min",
  stars: ["Sandra Bullock", "Cate Blanchett", "Anne Hathaway"]
}

var printMovieInfo = function (movieToPrint) {
  return movieToPrint.title + "for " + movieToPrint.duration + "." + " Stars: " + movieToPrint.stars.join(', ') + ".";
}

console.log(printMovieInfo(movie));
