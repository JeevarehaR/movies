import { useState } from "react";
import { Counter } from "./Counter";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

export function Movie({ movie, id, deleteButton, editButton }) {
  const [show, setShow] = useState(true);
  const styles = { color: movie.rating >= 8 ? "green" : "red" };
  const navigate = useNavigate();
  return (
    <Card className="movie-container">
      <img class="movie-poster" alt={movie.name} src={movie.poster} />
      <CardContent>
        <div className="movie-specs">
          <h2 className="movie-name">
            {movie.name}
            <IconButton
              onClick={() => setShow(!show)}
              color="primary"
              aria-label="delete"
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              onClick={() => navigate(`/movies/${id}`)}
              color="primary"
              aria-label="delete"
            >
              <InfoIcon />
            </IconButton>
          </h2>
          <p style={styles} className="movie-rating">
            ⭐ {movie.rating}
          </p>
        </div>
        {show ? <p className="movie-summary">{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
        <Counter />
        <div className="edit-movie">{editButton}</div>
        <div className="del-movie">{deleteButton}</div>
      </CardActions>
    </Card>
  );
}
