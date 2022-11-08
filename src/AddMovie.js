import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";

export function AddMovie({ setMoviesList, moviesList }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const addMovie = () => {
    const newMovie = {
      name,
      poster,
      rating,
      summary,
    };

    console.log(newMovie);
    //copy existing movie list into the new list
    setMoviesList([...moviesList, newMovie]);
  };
  return (
    <div className="add-movie-form">
      <TextField
        label="Name"
        variant="filled"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        label="Poster"
        variant="filled"
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        label="Rating"
        variant="filled"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      />

      <TextField
        label="Summary"
        variant="filled"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
      />

      <Button variant="outlined" onClick={addMovie}>
        Add Movie
      </Button>
    </div>
  );
}
