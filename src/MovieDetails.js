import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "./global";

export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const styles = { color: movie.rating >= 8 ? "green" : "red" };
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((mv) => {
        setMovie(mv);
        // console.log(mv);
      });
  }, []);

  return (
    <div>
      <iframe
        width="100%"
        height="550px"
        src={movie.trailer}
        title={movie.name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="movie-detail">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={styles} className="movie-rating">
            ⭐ {movie.rating}
          </p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button
          variant="outlined"
          onClick={() => navigate(-1)}
          startIcon={<KeyboardBackspaceIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
