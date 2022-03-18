import React from "react";
import styles from "./MovieItem.module.css";
import { featuredMovie } from "../../actions/movieActions";
import { useDispatch } from "react-redux";
const MovieItem = ({ cover, name, movieId }) => {
  const dispatch = useDispatch();
  const movieHandler = (id) => {
    dispatch(featuredMovie(id));
  };
  return (
    <div className={styles.img_wrap} onClick={() => movieHandler(movieId)}>
      <img src={`/assets/${cover}`} alt={name} />
    </div>
  );
};

export default MovieItem;
