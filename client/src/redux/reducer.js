import {
  GET_MOVIES,
  GET_USER_MOVIES,
  MOVIES_SELECTED
} from "./actions"

const initialState = {
  popularMovies: [],
  userMovies: [],
  highlightedMovie: [],
  moviesSelected: []
}

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        popularMovies: payload.popularMovies,
        highlightedMovie: payload.highlightedMovie,
        moviesSelected: payload.popularMovies
      }

    case GET_USER_MOVIES:
      return {
        ...state,
        userMovies: payload
      }

    case MOVIES_SELECTED:
      if (payload === "populares") {
        return {
          ...state,
          moviesSelected: state.popularMovies
        }
      } else {
        return {
          ...state,
          moviesSelected: state.userMovies
        }
      }

    default: return state;
  }
}