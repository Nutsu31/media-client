import { ACTION } from "./filterActions";

const initialState = {
  filter: {
    Domain: "",
    Name: "",
    Niche: "",
    sortBy: "",
    AdNetwork: [],
    Language: [],
  },
  user: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isActivated: false,
    payment: "",
    payouts: [],
    balance: 0,
    referralEmail: "",
    referrals: [],
    payoutAccId: "",
  },
  data: [],
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
          Domain: action.payload,
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
          Niche: action.payload,
        },
      };
    case ACTION.FILTER_BY_NAME:
      return {
        ...state,
        filter: {
          ...state.filter,
          Name: action.payload,
        },
      };
    case ACTION.FILTER_BY_ADNETWORK:
      return {
        ...state,
        filter: {
          ...state.filter,
          AdNetwork: action.payload,
        },
      };
    case ACTION.FILTER_BY_LANGUAGE:
      return {
        ...state,
        filter: {
          ...state.filter,
          Language: action.payload,
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
          Domain: "",
          Niche: "",
          sortBy: "",
          Name: "",
          AdNetwork: [],
          Language: [],
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
    case ACTION.PAYOUTS:
      return {
        ...state,
        user: {
          ...state.user,
          payouts: action.payload,
        },
      };
    case ACTION.UPDATE_PAYOUT_ID:
      return {
        ...state,
        user: {
          ...state.user,
          payoutAccId: action.payload,
        },
      };
    case ACTION.CHANGE_USER_NAME:
      return {
        ...state,
        user: { ...state.user, firstName: action.payload },
      };
    case ACTION.CHANG_USER_LASTNAME:
      return {
        ...state,
        user: { ...state.user, lastName: action.payload },
      };
    default:
      return state;
  }
};

export default filterReducer;
