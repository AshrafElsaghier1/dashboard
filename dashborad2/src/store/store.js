import { thiemeReducer, dataReducer, loginReducer } from "./reducer";

import { createStore, combineReducers } from "redux";

export const rootReducer = combineReducers({
  thiemeReducer,
  dataReducer,
  loginReducer,
});

const Store = createStore(rootReducer);
export default Store;
