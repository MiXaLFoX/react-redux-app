import {ADD_PERSON, DELETE_PERSON, EDIT_PERSON} from "./formConstants";
import {sampleData} from '../forms/sampleData'

const initialState = {
  persons: sampleData
};

export default function formReducer(state = initialState, {type, payload}) {
  switch (type) {
    case ADD_PERSON:
      return {
        ...state,
        persons: [...state.persons, payload]
      };
    case EDIT_PERSON:
      return {
        ...state,
        persons: [...state.persons.filter(pers => pers.id !== payload.id), payload]
      };
    case DELETE_PERSON:
      return {
        ...state,
        persons: [...state.persons.filter(pers => pers.id !== payload)]
      };
    default:
      return state;
  }
}