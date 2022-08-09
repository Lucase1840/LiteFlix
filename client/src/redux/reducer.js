import {
  GET_MOVIES,
} from "./actions"

const initialState = {
  popularMovies: [],
  highlightedMovie: []
}

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        popularMovies: payload.popularMovies,
        highlightedMovie: payload.highlightedMovie
      }

    default: return state;
  }
}