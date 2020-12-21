import {ADD_PERSON, DELETE_PERSON, EDIT_PERSON} from "./formConstants";

export function addPerson(person) {
  return {
    type: ADD_PERSON,
    payload: person
  }
}

export function editPerson(person) {
  return {
    type: EDIT_PERSON,
    payload: person
  }
}

export function deletePerson(personId) {
  return {
    type: DELETE_PERSON,
    payload: personId
  }
}