import React from "react";
import { BooksList } from "../Datas/BooksList";

function Card(props) {
  const book = BooksList[props.id];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-1/6">
      <img
        className="w-full h-48 object-cover"
        src={book.cover}
        alt={book.title}
      />
      <div className="p-4">
        <h3 className="text-2xl font-medium mb-2">{book.title}</h3>
        <p className="text-xl text-gray-700 mb-3">{book.author}</p>
        <p className="text-sm text-gray-500">{book.description}</p>
      </div>
    </div>
  );
}

export default Card;