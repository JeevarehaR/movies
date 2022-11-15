import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { API } from "./global";

export function EditMovieForm({ movie }) {
  const [name, setName] = useState(movie.name);
  const [rating, setRating] = useState(movie.rating);
  const [poster, setPoster] = useState(movie.poster);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const navigate = useNavigate();
  const updateMovie = () => {
    const updatedMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };
    fetch(`${API}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => navigate("/movies"));
  };
  return (
    <div className="add-movie-form">
      <TextField
        value={name}
        label="Name"
        variant="filled"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        value={poster}
        label="Poster"
        variant="filled"
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        value={rating}
        label="Rating"
        variant="filled"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      />

      <TextField
        value={summary}
        label="Summary"
        variant="filled"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
      />

      <TextField
        value={trailer}
        label="Trailer"
        variant="filled"
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
      />

      <Button variant="outlined" onClick={() => updateMovie()}>
        Save
      </Button>
    </div>
  );
}
