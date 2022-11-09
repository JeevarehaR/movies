import { Movie } from "./Movie";

export function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((mv, index) => (
        <Movie key={index} movie={mv} id={index} />
      ))}
    </div>
  );
}
