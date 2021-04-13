import {Form, Button, Col} from 'react-bootstrap';
export default function InputForm(props) {
  return (
    <div >
        <Form onSubmit={props.createCountNote} style={{margin: '60px'}}>
          <Form.Group controlId="formGridAddress2">
            <Form.Label>Enter title for timer</Form.Label>
            <Form.Control type="text" name="title" placeholder="enter title for you event" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Date before the event</Form.Label>
              <Form.Control type="date" name="date" placeholder="date"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Time before the event (optional)</Form.Label>
              <Form.Control type="time" name="time" placeholder="time"/>
            </Form.Group>
          </Form.Row>
          <div className="d-flex justify-content-between">
            <Button variant="primary" type="submit">
              Create timer
            </Button>
            <Button variant="primary" onClick={props.delete}>
              Delete timers
            </Button>
          </div>
        </Form>
    </div>
  );
  }
