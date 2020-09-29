import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import { Button, Alert, Breadcrumb, Card } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
