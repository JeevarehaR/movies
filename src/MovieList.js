import { Movie } from "./Movie";
import { useEffect, useState } from "react";
import { API } from "./global";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export function MovieList() {
  const [movieList, setMoviesList] = useState([]);
  const navigate = useNavigate();

  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((mvs) => setMoviesList(mvs));
  };

  useEffect(() => getMovies(), []);

  return (
    <div className="movie-list">
      {movieList.map((mv) => (
        <Movie
          key={mv._id}
          movie={mv}
          id={mv._id}
          deleteButton={
            <IconButton
              onClick={() => {
                fetch(`${API}/movies/${mv._id}`, {
                  method: "DELETE",
                }).then(() => getMovies());
              }}
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              onClick={() => navigate(`/movies/edit/${mv.id}`)}
              color="secondary"
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}
