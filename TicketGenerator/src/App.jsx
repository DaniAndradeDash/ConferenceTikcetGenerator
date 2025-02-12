import { Form, Button, Stack, Container, Row, Col } from 'react-bootstrap'
import './App.css'

function App() {

  return (
    <>
      <div className="logoTittle"></div>
      <div className="lineBottom"></div>
      <div className="lineTop"></div>
      <div className="circule"></div>
      <div className="linesTop"></div>
      <div className="tittles text-center">
        <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p>Secure your spot at next year's biggest coding conference</p>
      </div>
      <div className="formsTicket">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <div className="other">
        <Stack direction="horizontal" gap={2}>
          <Button as="a" variant="primary">
            Button as link
          </Button>
          <Button as="a" variant="success">
            Button as link
          </Button>
        </Stack>;
      </div>
    </>
  )
}

export default App
