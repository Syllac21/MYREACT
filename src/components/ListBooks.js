import React from "react";
import Card from "./Card";
import { BooksList } from "../Datas/BooksList";

function ListBooks(){
    const NbBooks = BooksList.length;
    return(
        <div className="mx-5">
            <h1 className="text-center text-3xl">
                Liste des livres
                <aside className="container flex space-x-2 mt-3 justify-items-center">
                    {Array.from({length:NbBooks}, (_, index)=>(
                        <Card key = {index} id ={index}/>
                    ))}
                </aside>
            </h1>
        </div>
    )
}
export default ListBooks;