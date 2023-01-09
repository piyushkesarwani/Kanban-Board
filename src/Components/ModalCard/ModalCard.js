import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export const ModalCard = ({ onSubmit, boardId }) => {
  const [show, setShow] = useState(false);

  const [title, setTitle] = useState("");
  const [comments, setComments] = useState("");
  const [priority, setPriority] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCardSubmit = (e) => {
    e.preventDefault();
    if (!title || !comments || !priority) {
        alert('Error Occured')
    } else {
      setTitle("");
      setComments("");
      setPriority("");
      onSubmit(boardId, title, comments, priority);
    }
    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCardSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Your Title"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="comments">
              <Form.Label>Comments</Form.Label>
              <Form.Control
                type="text"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Write Your Comments (Optional)"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="priority">
              <Form.Label>Priority</Form.Label>
              <Form.Control
                type="text"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                placeholder="Your Priority (Eg: Low, Med, or High)"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
