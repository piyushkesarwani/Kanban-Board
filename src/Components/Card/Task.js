import { Badge } from "react-bootstrap";
import React, { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import { FaCommentAlt } from "react-icons/fa";
import "./Task.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export const Task = ({ card, bid, deleteCard, dragEntered, dragEnded }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = new Date().getDate(); //1
  let month = new Date().getMonth(); //0

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const { id, title, comments, priority } = card;

  return (
    <>
      <div>
        <article
          key={id}
          className="border singleTask p-2 my-3"
          draggable
          onDragEnd={() => dragEnded(bid, id)}
          onDragEnter={() => dragEntered(bid, id)}
        >
          <div className="d-flex justify-content-between align-items-center">
            <Badge className="m-0 bg-info">{priority}</Badge>
            <p className="m-0">{`0${day}-${months[month]}`}</p>
          </div>
          <h5>{title}</h5>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div>
              <button
                className="commentsBtn"
                ref={target}
                onClick={() => setShow(!show)}
              >
                <FaCommentAlt />
              </button>
              <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                  <Tooltip id="overlay-example" {...props}>
                    {comments}
                  </Tooltip>
                )}
              </Overlay>
            </div>
            <div className="eidtDeleteBtn d-flex flex-row justify-content-center align-items-center">
              <AiFillEdit className="me-2 fs-5 text-success" />
              <AiFillDelete
                className="fs-5 text-danger"
                onClick={() => deleteCard(id, bid)}
              />
            </div>
          </div>
        </article>
      </div>
    </>
  );
};
