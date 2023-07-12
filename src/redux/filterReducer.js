import { ACTION } from "./filterActions";
import Data from "../db/index";
const initialState = {
  filter: {
    website: "",
    name: "",
    category: "",
    sortBy: "",
    adNetwork: [],
    language: [],
  },
  user: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isActivated: false,
    payment: "",
  },
  data: Data,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.UPDATE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ACTION.FILTER_BY_DOMAIN:
      return {
        ...state,
        filter: {
          ...state.filter,
          website: action.payload,
        },
      };
    case ACTION.FILTER_DATA_WITH_DOMAIN:
      return {
        ...state,
        data: action.payload,
      };
    case ACTION.FILTER_BY_NICHE:
      return {
        ...state,
        filter: {
          ...state.filter,
          category: action.payload,
        },
      };
    case ACTION.FILTER_BY_NAME:
      return {
        ...state,
        filter: {
          ...state.filter,
          name: action.payload,
        },
      };
    case ACTION.FILTER_BY_ADNETWORK:
      return {
        ...state,
        filter: {
          ...state.filter,
          adNetwork: action.payload,
        },
      };
    case ACTION.FILTER_BY_LANGUAGE:
      return {
        ...state,
        filter: {
          ...state.filter,
          language: action.payload,
        },
      };
    case ACTION.FILTER_WITH_LANG:
      return {
        ...state,
        data: action.payload,
      };
    case ACTION.CLEAR_SINGLE:
      return {
        ...state,
        filter: action.payload,
      };
    case ACTION.CLEAR_ALL:
      return {
        ...state,
        filter: {
          website: "",
          category: "",
          sortBy: "",
          name: "",
          adNetwork: [],
          language: [],
        },
      };
    case ACTION.FETCH_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case ACTION.PAYMENT_SUCCEED:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
