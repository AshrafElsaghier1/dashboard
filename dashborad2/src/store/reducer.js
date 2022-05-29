import {
  DARK_MODE,
  LIGHT_MODE,
  TOGGLE,
  LOAD,
  LOAD_SUCCESS,
  LOGIN,
} from "./actions";
const THIEME = {
  isDarkThieme: false,
};
export const thiemeReducer = (state = THIEME, action) => {
  switch (action.type) {
    case DARK_MODE:
      return { ...state, isDarkThieme: true };
    case LIGHT_MODE:
      return { ...state, isDarkThieme: false };
    case TOGGLE:
      return { ...state, isDarkThieme: !state.isDarkThieme };
    default:
      return state;
  }
};

const initalState = {
  usersData: [],
  isLoading: false,
};
export const dataReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        usersData: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

const loginState = {
  users: [{ email: "ashraf@gmail.com", password: "123456" }],
  isLogin: false,
};

export const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
      };

    default:
      return state;
  }
};
