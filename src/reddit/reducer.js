import * as types from './actionTypes';

const DEFAULT_STATE = {
  random: 0,
};

export default (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case types.RANDOM:
      return { ...state, random: state.random + 1 };
    default:
      return state;
  }
};
