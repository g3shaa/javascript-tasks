// Дефиниране на обект Movie
function Movie(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
  }
  
  // Добавяне на метод към обект Movie
  Movie.prototype.getDetails = function() {
    return `${this.title} (${this.year}), directed by ${this.director}`;
  }
  
  // Създаване на няколко обекта Movie
  const movie1 = new Movie('The Godfather', 'Francis Ford Coppola', 1972);
  const movie2 = new Movie('The Shawshank Redemption', 'Frank Darabont', 1994);
  const movie3 = new Movie('The Dark Knight', 'Christopher Nolan', 2008);
  
  // Създаване на масив от обекти Movie
  const movies = [movie1, movie2, movie3];
  
  // Функция за извеждане на всички филми
  function listMovies() {
    console.log('Списък на всички филми:');
    movies.forEach(movie => console.log(movie.getDetails()));
  }
  
  // Функция за търсене на филм по заглавие
  function searchMovie(title) {
    const movie = movies.find(movie => movie.title.toLowerCase() === title.toLowerCase());
    if (movie) {
      console.log(`Намерен е филм с заглавие "${title}":`);
      console.log(movie.getDetails());
    } else {
      console.log(`Филмът с заглавие "${title}" не е намерен.`);
    }
  }
  
  // Извеждане на списъка с филмите
  listMovies();
  
  // Търсене на филм по заглавие
  searchMovie('The Godfather');
  searchMovie('The Dark Knight');
  searchMovie('The Social Network');
  