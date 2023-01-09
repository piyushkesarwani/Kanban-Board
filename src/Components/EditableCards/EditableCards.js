import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsFillFileXFill } from "react-icons/bs";

export const EditableCards = ({ onSubmit, boardId }) => {
  const [isEditable, setIsEditable] = useState(false);

  // const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [comments, setComments] = useState("");
  const [priority, setPriority] = useState("");

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleCardSubmit = (e) => {
    e.preventDefault();
    if (!title || !comments || !priority) {
      alert("Error Occured");
    } else {
      console.log(comments, title, priority);
      setTitle("");
      setComments("");
      setPriority("");
      onSubmit(boardId, title, comments, priority);
    }
    setIsEditable(false);
  };

  return (
    <div>
      {isEditable ? (
        <>
          {/* <Button variant="primary" onClick={handleShow}>
            Add New Task
          </Button> */}

          {/* <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Details</Modal.Title>
            </Modal.Header>
            <Modal.Body> */}
          <div>
            <Form onSubmit={handleCardSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
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

              <div className="mt-1 d-flex flex-row align-items-center">
                <Button type="submit">Add</Button>
                <BsFillFileXFill
                  onClick={() => setIsEditable(false)}
                  className="fs-3 ms-3"
                />
              </div>
            </Form>
          </div>
          {/* </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal> */}
        </>
      ) : (
        <div>
          <p
            onClick={() => setIsEditable(true)}
            className="w-50 bg-primary text-light p-2"
          >
            Add new Task
          </p>
          {/* <Button variant="primary" onClick={() => setIsEditable(true)}>
            Add New Task
          </Button> */}
        </div>
      )}
    </div>
  );
};
