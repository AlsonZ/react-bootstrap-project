import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import { Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form >
          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="email@email.com"/>
            <Form.Text className="text-muted">
              Your email is safe with us!
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
          </Form.Group>
          <Button variant="secondary" type="submit">Login</Button>
        </Form>
        <Card className="mb-3" style={{color: 'black'}}>
          <Card.Img src="https://picsum.photos/200/100"/>
          <Card.Body>
            <Card.Title>
              Card Title
            </Card.Title>
            <Card.Text>
              Card Description is here.
            </Card.Text>
              <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant='success'>This is a Button</Alert>
        <Button>Test Button</Button>
        
      </header>
    </div>
  );
}

export default App;
