import { Movie } from "./Movie";

export function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((mv) => (
        <Movie movie={mv} />
      ))}
    </div>
  );
}
