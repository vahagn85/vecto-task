import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  movieListReducer,
  movieFeaturedReducer,
} from "./reducers/movieReducers";

const reducer = combineReducers({
  movieList: movieListReducer,
  movieFeatured: movieFeaturedReducer,
});

const moviesFromStorage = sessionStorage.getItem("lastVideo")
  ? JSON.parse(sessionStorage.getItem("lastVideo"))
  : null;
const initialState = {
  movieFeatured: {
    loading: true,
    featured: {},
    lastVideoId: moviesFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
