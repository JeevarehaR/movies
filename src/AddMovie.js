import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { API } from "./global";

export function AddMovie() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();
  const addMovie = () => {
    const newMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };

    console.log(newMovie);
    //copy existing movie list into the new list
    // setMoviesList([...moviesList, newMovie]);
    // 1. use post method
    // 2.body - JSON Data
    // 3.headers - json
    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => navigate("/movies"));
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

      <TextField
        label="Trailer"
        variant="filled"
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
      />

      <Button variant="outlined" onClick={() => addMovie()}>
        Add Movie
      </Button>
    </div>
  );
}
