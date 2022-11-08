import { useState } from "react";
import Button from "@mui/material/Button";
import { Counter } from "./Counter";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

export function Movie({ movie }) {
  const [show, setShow] = useState(true);
  const styles = { color: movie.rating >= 8 ? "green" : "red" };
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
          </h2>
          <p style={styles} className="movie-rating">
            ⭐ {movie.rating}
          </p>
        </div>
        {show ? <p className="movie-summary">{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
        <Counter />
      </CardActions>
    </Card>
  );
}
