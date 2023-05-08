import { Row } from "react-bootstrap";
import useMovie from "../../hooks/use-movie";
import MovieCard from "../MovieCard/MovieCard";
import PaginationComponent from "../Pagination/Pagination";

function MoviesList() {
  const { movies } = useMovie();

  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          const { id } = mov;

          return <MovieCard key={id} mov={mov} />;
        })
      ) : (
        <h2 className="text-center p-5">There is no Movies</h2>
      )}

      {movies.length >= 1 ? <PaginationComponent /> : null}
    </Row>
  );
}

export default MoviesList;
