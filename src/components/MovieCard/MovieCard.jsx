import { Link } from "react-router-dom";
import "./MovieCard.css";
import { Col } from "react-bootstrap";

function MovieCard({ mov }) {
  const {
    id,
    original_title,
    release_date,
    vote_average,
    vote_count,
    poster_path,
  } = mov;

  return (
    <Col xs="12" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            className="card__image"
            alt="hu"
          />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>Movie Title : {original_title}</p>
              <p>Release Date : {release_date}</p>
              <p>Ratings Number : {vote_count}</p>
              <p>Ratings : {vote_average} </p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default MovieCard;
