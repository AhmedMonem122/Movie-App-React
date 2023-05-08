import logo from "../../assets/images/Cinema logo.jpg";
import useMovie from "../../hooks/use-movie";
import "./Navbar.css";
import { Col, Container, Form, Row } from "react-bootstrap";

function Navbar() {
  const { searchMovies, getSearchPages } = useMovie();

  const onSearch = (query) => {
    searchMovies(query);
    getSearchPages(1, query);
  };

  return (
    <nav className="nav py-3">
      <Container>
        <Row className="align-items-center py-3">
          <Col>
            <a href="/">
              <img className="img-fluid logo" src={logo} alt="Cinema logo" />
            </a>
          </Col>
          <Col xs={10}>
            <Form.Control
              className="w-100"
              type="search"
              placeholder="Search"
              onChange={(e) => onSearch(e.target.value)}
            />
          </Col>
        </Row>
      </Container>
    </nav>
  );
}

export default Navbar;
