import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "./global";
import { EditMovieForm } from "./EditMovieForm";

export function EditMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((mv) => {
        setMovie(mv);
      });
  }, []);

  return movie ? <EditMovieForm movie={movie} /> : <h1>Loading...</h1>;
}
