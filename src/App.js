import "./App.css";
import { MovieList } from "./MovieList";
import { useState } from "react";
import { AddMovie } from "./AddMovie";
import { NotFound } from "./NotFound";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { EditMovie } from "./EditMovie";
import { BasicForm } from "./BasicForm";
import { AddColor } from "./AddColor";
import { TicTacToe } from "./TicTacToe";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Paper from "@mui/material/Paper";

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
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: 0, minHeight: "100vh" }} elevation={0}>
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
              <Button color="inherit" onClick={() => navigate("/color-game")}>
                Color Game
              </Button>
              <Button color="inherit" onClick={() => navigate("/tic-tac-toe")}>
                Tic-Tac-Toe
              </Button>
              <Search sx={{ marginLeft: "auto", marginRight: 0 }}>
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
              <Button
                sx={{ margin: " 0 30px" }}
                color="inherit"
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                onClick={() => setMode(mode == "light" ? "dark" : "light")}
              >
                {mode == "light" ? "dark" : "light"} MODE
              </Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Navigate replace to="/movies" />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/movies/add" element={<AddMovie />} />
            <Route path="/movies/edit/:id" element={<EditMovie />} />
            <Route path="/color-game" element={<AddColor />} />
            <Route path="/basic-form" element={<BasicForm />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
// / movies={movieList.filter((mv) =>mv.name.toLowerCase().includes(search.toLowerCase()))}
function Home() {
  return (
    <div>
      <h1>Welcome to Movie App !!!🥳😺🎊🎉</h1>
    </div>
  );
}

export default App;
