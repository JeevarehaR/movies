import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik";
import { movieValidationSchema } from "./AddMovie";

export function EditMovieForm({ movie }) {
  // const [name, setName] = useState(movie.name);
  // const [rating, setRating] = useState(movie.rating);
  // const [poster, setPoster] = useState(movie.poster);
  // const [summary, setSummary] = useState(movie.summary);
  // const [trailer, setTrailer] = useState(movie.trailer);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: movie.name,
      poster: movie.poster,
      rating: movie.rating,
      summary: movie.summary,
      trailer: movie.trailer,
    },
    validationSchema: movieValidationSchema,
    onSubmit: (updatedMovie) => {
      console.log("onSubmit", updatedMovie);
      editMovie(updatedMovie);
    },
  });

  const editMovie = (updatedMovie) => {
    fetch(`${API}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => navigate("/movies"));
  };

  return (
    <form onSubmit={formik.handleSubmit} className="add-movie-form">
      <TextField
        id="name"
        name="name"
        error={formik.touched.name && formik.errors.name}
        helperText={
          formik.touched.name && formik.errors.name ? formik.errors.name : ""
        }
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        variant="filled"
      />

      <TextField
        id="poster"
        name="poster"
        error={formik.touched.poster && formik.errors.poster}
        helperText={
          formik.touched.poster && formik.errors.poster
            ? formik.errors.poster
            : ""
        }
        label="Poster"
        value={formik.values.poster}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        variant="filled"
      />
      {formik.touched.poster && formik.errors.poster
        ? formik.errors.poster
        : ""}
      <TextField
        id="rating"
        name="rating"
        error={formik.touched.rating && formik.errors.rating}
        helperText={
          formik.touched.rating && formik.errors.rating
            ? formik.errors.rating
            : ""
        }
        label="Rating"
        value={formik.values.rating}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        variant="filled"
      />
      {formik.touched.rating && formik.errors.rating
        ? formik.errors.rating
        : ""}
      <TextField
        id="summary"
        name="summary"
        error={formik.touched.summary && formik.errors.summary}
        helperText={
          formik.touched.summary && formik.errors.summary
            ? formik.errors.summary
            : ""
        }
        label="Summary"
        value={formik.values.summary}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        variant="filled"
      />
      {formik.touched.summary && formik.errors.summary
        ? formik.errors.summary
        : ""}
      <TextField
        id="trailer"
        name="trailer"
        error={formik.touched.trailer && formik.errors.trailer}
        helperText={
          formik.touched.trailer && formik.errors.trailer
            ? formik.errors.trailer
            : ""
        }
        label="Trailer"
        value={formik.values.trailer}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        variant="filled"
      />
      {formik.touched.trailer && formik.errors.trailer
        ? formik.errors.trailer
        : ""}
      <Button type="submit" variant="contained" color="success">
        Edit Movie
      </Button>
    </form>
  );
}
