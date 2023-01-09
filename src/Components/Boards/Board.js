import React from "react";
import { BsArrowBarDown } from "react-icons/bs";
import { Task } from "../Card/Task";
import { Dropdowm } from "../Dropdown/Dropdowm";
import { EditableCards } from "../EditableCards/EditableCards";

export const Board = ({ board, deleteBoard, addCard, deleteCard, dragEntered, dragEnded }) => {
  return (
    <>
      <div className="border singleBoard my-3 me-3 w-25 p-2">
        <div
          key={board.id}
          className="header mb-2 d-flex flex-row justify-content-between align-items-center"
        >
          <h5>
            {board.title}
            <span className="text-secondary"> ({board.card.length})</span>
          </h5>
          <Dropdowm bid={board.id} delBoard={deleteBoard} />
        </div>
        <div className="cardContainer">
          {board.card.map((item) => (
            <Task
              key={item.id}
              card={item}
              bid={board.id}
              deleteCard={deleteCard}
              dragEntered={dragEntered}
              dragEnded={dragEnded}
            />
          ))}
        </div>
        <EditableCards onSubmit={addCard} boardId={board.id} />
      </div>
    </>
  );
};
