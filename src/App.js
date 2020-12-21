import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navibar from './components/Navibar';
import HomePage from "./components/HomePage";
import ListManager from "./components/ListManager";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path={'/(.+)'} render={() => (
          <>
          <Navibar/>
            <main>
              <Container fluid>
                <Row>
                  <Col>
                    <Switch>
                      <Route path="/list" component={ListManager} />
                    </Switch>
                  </Col>
                </Row>
              </Container>
            </main>
          </>
        )} />
      </Router>
    </>
  );
}

export default App;
