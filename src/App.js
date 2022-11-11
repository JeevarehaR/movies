import "./App.css";
import { MovieList } from "./MovieList";
import { useState } from "react";
import { INITIAL_MOVIE_LIST } from "./INITIAL_MOVIE_LIST";
import { AddMovie } from "./AddMovie";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
} from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function App() {
  const [moviesList, setMoviesList] = useState(INITIAL_MOVIE_LIST);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/movies")}>
            Movies
          </Button>
          <Button color="inherit" onClick={() => navigate("/movies/add")}>
            Add Movies
          </Button>
          <Search sx={{ marginLeft: "auto" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Navigate replace to="/movies" />} />
        <Route
          path="/movies"
          element={
            <MovieList
              movies={moviesList.filter((mv) =>
                mv.name.toLowerCase().includes(search.toLowerCase())
              )}
            />
          }
        />
        <Route
          path="/movies/add"
          element={
            <AddMovie setMoviesList={setMoviesList} moviesList={moviesList} />
          }
        />

        <Route
          path="/movies/:id"
          element={<MovieDetails moviesList={moviesList} />}
        />

        {/* <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} /> */}
      </Routes>
    </div>
  );
}

function MovieDetails({ moviesList }) {
  const { id } = useParams();
  const movie = moviesList[id];
  const styles = { color: movie.rating >= 8 ? "green" : "red" };
  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="550px"
        src={movie.trailer}
        title={movie.name}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
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

function NotFound() {
  const styles = {
    width: "100%",
    maxHeight: "400px",
    objectFit: "contain",
  };
  return (
    <div>
      <img
        style={styles}
        src="https://cdn.dribbble.com/users/1022481/screenshots/3018253/404-snow.gif"
        alt="404 Not Found"
      />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to Movie App !!!🥳😺🎊🎉</h1>
    </div>
  );
}

export default App;
