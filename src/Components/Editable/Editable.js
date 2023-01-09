import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Editable.css";
import { BsFillFileXFill } from "react-icons/bs";

export const Editable = ({onSubmit}) => {
  const [isEditable, setIsEditable] = useState(false);
  const [boardTitle, setBoardTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!boardTitle){
        alert('Board Title cannot be empty');
    }else {
        setBoardTitle("");
        onSubmit(boardTitle);
    }
    setIsEditable(false);
  }

  return (
    <div>
      {isEditable ? (
        <div>
          <div>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  value={boardTitle}
                  onChange={(e) => setBoardTitle(e.target.value)}
                />
              </Form.Group>
            </Form>
          </div>
          <div className="mt-1 d-flex flex-row align-items-center">
            <Button type="submit">Add</Button>
            <BsFillFileXFill onClick={() => setIsEditable(false)} className="fs-3 ms-3" />
          </div>
        </div>
      ) : (
        <div>
          <p onClick={() => setIsEditable(true)} className="bg-primary text-light p-2 addBoardBtn">Add New Board</p>
        </div>
      )}
    </div>
  );
};
