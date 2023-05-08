import { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MoviesList from "./components/MoviesList/MoviesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </Fragment>
  );
}

export default App;
