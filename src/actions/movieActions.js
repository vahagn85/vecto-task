import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
  MOVIE_FEATURED_FAIL,
  MOVIE_FEATURED_REQUEST,
  MOVIE_FEATURED_SUCCESS,
} from "./../constants/movieConstants";
import data from "../data.json";
export const listMovies = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MOVIE_LIST_REQUEST });

    setTimeout(() => {
      const sessionId = getState().movieFeatured.lastVideoId;
      if (sessionId) {
        const firstData = data.TendingNow.find(
          (i) => Number(i.Id) === Number(sessionId)
        );
        const filteredData = data.TendingNow.slice(0, 50)
          .filter((i) => Number(i.Id) !== Number(sessionId))
          .sort((a, b) => b.Id - a.Id);
        const newData = [firstData, ...filteredData];
        dispatch({
          type: MOVIE_LIST_SUCCESS,
          payload: newData,
        });
      } else {
        dispatch({
          type: MOVIE_LIST_SUCCESS,
          payload: data.TendingNow.slice(0, 50).sort((a, b) => b.Id - a.Id),
        });
      }
    }, 1000);
  } catch (error) {
    dispatch({
      type: MOVIE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const featuredMovie = (id) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_FEATURED_REQUEST });
    setTimeout(() => {
      if (id) {
        sessionStorage.setItem("lastVideo", id);
      }
      dispatch({
        type: MOVIE_FEATURED_SUCCESS,
        payload: id
          ? data.TendingNow.find((i) => Number(i.Id) === Number(id))
          : data.Featured,
        lastVideoId: id ? id : data.Featured.Id,
      });
    }, 1000);
  } catch (error) {
    dispatch({
      type: MOVIE_FEATURED_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
