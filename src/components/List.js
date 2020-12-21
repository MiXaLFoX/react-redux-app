import React from "react";
import ListItem from "./ListItem";

export default function List({persons}) {
  return (
    <>
      {persons.map(person =>
        <ListItem person={person} key={person.id}/>
      )}
    </>
  )
}