import { Fragment } from "react";
import './App.css';
import Container from "./Components/Layouts/Container";
import Header from "./Components/Layouts/Header";
import Form from "./Components/Layouts/Form";

function App() {
  return (
    <Fragment>
      <Container>
          <Header />
          <Form />
      </Container>
    </Fragment>
  );
}

export default App;
