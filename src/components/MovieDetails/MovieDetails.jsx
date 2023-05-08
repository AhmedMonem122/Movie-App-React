import { useEffect, useState } from "react";
import "./MovieDetails.css";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  //get  movie by details
  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=2dc4f3b7280c70e5009487448e8c74f4`
    );
    setMovie(res.data);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  const {
    original_title,
    overview,
    poster_path,
    release_date,
    vote_average,
    vote_count,
    homepage,
  } = movie;

  return (
    <div>
      <div className="">
        <div className="mt-4 ">
          <div className="card-details">
            <div>
              <img
                className="img-movie w-30"
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt="ascad"
              />
            </div>
            <div className="text-center mx-auto">
              <p className="card-text-details border-bottom">
                Movie Title: {original_title}
              </p>
              <p className="card-text-details border-bottom">
                Release Date: {release_date}
              </p>
              <p className="card-text-details border-bottom">
                Ratings Number: {vote_count}
              </p>
              <p className="card-text-details border-bottom">
                Ratings: {vote_average}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
          <div className="card-story  d-flex flex-column align-items-start">
            <div className="text-end p-4 ">
              <p className="card-text-title border-bottom">Story:</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">{overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "5rem" }} className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center "
        >
          <Link to="/">
            <button
              style={{ backgroundColor: "#bb37bb", border: "none" }}
              className="btn btn-primary mx-2"
            >
              Back To HomePage
            </button>
          </Link>
          <a href={homepage}>
            <button
              style={{ backgroundColor: "#bb37bb", border: "none" }}
              className="btn btn-primary"
            >
              Watch Movie
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default MovieDetails;
