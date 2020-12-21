import {combineReducers} from 'redux';
import testReducer from "./testReducer";
import formReducer from "../components/forms/formReducer";

const rootReducer = combineReducers({
  test: testReducer,
  form: formReducer
});

export default rootReducer;