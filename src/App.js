import logo from "./logo.svg";
import "./App.css";
import {
  Image,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavbarBrand,
  Jumbotron,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
function App() {
  return (
    <>
      <Navbar className="transparentDark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <Jumbotron className="my-3 mx-2 shadow-lg p-3 mb-5 bg-body rounded jumboTransparent text-center">
        <h1 className="text-light">Hello, world!</h1>
        <p className="text-light ">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="outline-light">Learn more</Button>
        </p>
      </Jumbotron>

      <div className="cardTransparent mb-2">
        <Row className="justify-content-center">
          <h3 className="text-white">Who make Titles Anymore</h3>
          <Col xs="5" md="5">
            <Image
              className="imageCirc imageBorder shadow"
              src="https://img.freepik.com/free-photo/tech-devices-icons-connected-digital-planet-earth_117023-449.jpg?size=626&ext=jpg"
              roundedCircle
            />
          </Col>

          <Col xs="5" md="5">
            <Image
              className="imageCirc imageBorder shadow"
              src="https://img.freepik.com/free-photo/tech-devices-icons-connected-digital-planet-earth_117023-449.jpg?size=626&ext=jpg"
              roundedCircle
            />
          </Col>
        </Row>
      </div>
      <div className="">
        <div className="cardTransparentYellow shadow">
          <h3 className="text-white ml-2">Hello Good Bye World</h3>
          <Row>
            <Col>
              <Image
                className="imageCirc ml-2"
                src="https://img.freepik.com/free-photo/tech-devices-icons-connected-digital-planet-earth_117023-449.jpg?size=626&ext=jpg"
                roundedCircle
              />
            </Col>
            <Col>
              <p className="text-white">
                loren ipsemLorem ips dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                elit, sed do eiusmod
              </p>
            </Col>
          </Row>
          <Button variant="outline-info ml-5">Learn More</Button>
          <div className='cardDesign'>
            <h6 className='cardHeaderText'>hello</h6>

          </div>
        </div>

      </div>
    </>
  );
}

export default App;
