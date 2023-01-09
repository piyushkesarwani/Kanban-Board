import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Board } from "./Boards/Board";

export const MyVerticallyCenteredModal = (props) => {

    const [boardTitle, setBoardTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!boardTitle){
            alert('Board Title Cannot be Empty!')
        }else {
            // console.log(boardTitle);
            <Board boardTitle={boardTitle} />
        }
    }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a new board
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control type="text" placeholder="Enter Board Title" value={boardTitle} onChange={(e) => setBoardTitle(e.target.value)} />
            </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" onClick={props.onHide}>Create Board</Button>
      </Modal.Footer>
    </Modal>
  );
};
