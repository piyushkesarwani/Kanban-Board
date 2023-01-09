import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { Board } from "./Components/Boards/Board";
import { Editable } from "./Components/Editable/Editable";

export const App = () => {
  const [boards, setBoards] = useState(
    JSON.parse(localStorage.getItem("prac-kanban")) || []
  );

  const [targetCard, setTargetCard] = useState({
    bid: "",
    cid: "",
  });

  const addBoard = (title) => {
    const tempBoards = [...boards];
    tempBoards.push({
      id: new Date().toString(),
      title: title,
      card: [],
    });
    setBoards(tempBoards);
  };

  const deleteBoard = (bid) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards.splice(index, 1);
    setBoards(tempBoards);
  };

  const addCard = (id, title, comments, priority) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards[index].card.push({
      id: new Date().toString(),
      title: title,
      comments: comments,
      priority: priority,
    });
    setBoards(tempBoards);
    // console.log(boards)
  };

  const deleteCard = (cid, bid) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].card;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setBoards(tempBoards);
  };

  const dragEnded = (bid, cid) => {
    let s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex;
    s_boardIndex = boards.findIndex((item) => item.id === bid);
    if (s_boardIndex < 0) return;

    s_cardIndex = boards[s_boardIndex]?.card?.findIndex(
      (item) => item.id === cid
    );
    if (s_cardIndex < 0) return;

    t_boardIndex = boards.findIndex((item) => item.id === targetCard.bid);
    if (t_boardIndex < 0) return;

    t_cardIndex = boards[t_boardIndex]?.card?.findIndex(
      (item) => item.id === targetCard.cid
    );
    if (t_cardIndex < 0) return;

    const tempBoards = [...boards];
    const sourceCard = tempBoards[s_boardIndex].card[s_cardIndex];
    tempBoards[s_boardIndex].card.splice(s_cardIndex, 1);
    tempBoards[t_boardIndex].card.splice(t_cardIndex, 0, sourceCard);
    setBoards(tempBoards);

    setTargetCard({
      bid: "",
      cid: "",
    });
  };

  const dragEntered = (bid, cid) => {
    if (targetCard.cid === cid) return;
    setTargetCard({
      bid,
      cid,
    });
  };

  useEffect(() => {
    localStorage.setItem("prac-kanban", JSON.stringify(boards));
  }, [boards]);

  return (
    <>
      <div className="container">
        <Header />
        <div className="w-100 d-flex align-items-center boardsContainer">
          {boards.map((item) => (
            <Board
              key={item.id}
              board={item}
              deleteBoard={deleteBoard}
              addCard={addCard}
              deleteCard={deleteCard}
              dragEnded={dragEnded}
              dragEntered={dragEntered}
            />
          ))}
          <Editable onSubmit={addBoard} />
        </div>
      </div>
    </>
  );
};
