import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

export const movieValidationSchema = yup.object({
  name: yup.string().required("Please fill the name!"),
  poster: yup
    .string()
    .min(7, "Need longer poster!")
    .required("Please insert a poster!"),
  rating: yup
    .number()
    .min(0, "Need higher rating!")
    .max(10, "Too much rating!")
    .required("Please provide a rating!"),
  summary: yup
    .string()
    .min(10, "Need Longer Summary!")
    .required("Please summarize!"),
  trailer: yup
    .string()
    .min(10, "Need Longer trailer!")
    .required("Please share the trailer!"),
});

export function AddMovie() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {
      console.log("onSubmit", newMovie);
      createMovie(newMovie);
    },
  });

  const createMovie = (newMovie) => {
    console.log("createMovie", newMovie);
    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
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
      <Button type="submit" variant="contained">
        Add Movie
      </Button>
    </form>
  );
}
