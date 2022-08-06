import {
  GET_MOVIES,
} from "./actions"

const initialState = {
  movies: [],
}

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_MOVIES:
      return { ...state, movies: payload }

    default: return state;
  }
}