import React, { useEffect } from "react";
import styles from "./MovieMain.module.css";
import MyButton from "./../UI/MyButton/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { featuredMovie } from "./../../actions/movieActions";

import { convertMsToTime } from "./../../utis/convertMillisecond";
import Loader from "./../Loader/Loader";
const MovieMain = () => {
  const dispatch = useDispatch();
  const movieFeatured = useSelector((state) => state.movieFeatured);
  const {
    loading: loadingFeatured,
    error: errorFeatured,
    featured,
  } = movieFeatured;

  useEffect(() => {
    dispatch(featuredMovie());
  }, [dispatch]);
  return (
    <div className={styles.movie_wrapper}>
      {loadingFeatured ? (
        <Loader />
      ) : errorFeatured ? (
        <p>{errorFeatured}</p>
      ) : (
        <>
          <span
            className={styles.bg}
            style={{
              backgroundImage: `url("/assets/${featured.CoverImage}")`,
            }}
          />
          <div className={styles.main_info}>
            <div className={styles.category}>{featured.Category}</div>
            <div className={styles.logo}>
              <img
                src={`/assets/${featured.TitleImage}`}
                alt={featured.Title}
              />
            </div>
            <ul className={styles.list}>
              <li className={styles.year}>{featured.ReleaseYear}</li>
              <li className={styles.rating}>{featured.MpaRating}</li>
              <li className={styles.date}>
                {convertMsToTime(featured.Duration)}
              </li>
            </ul>
            <p className={styles.desc}>{featured.Description}</p>
          </div>
          <div className={styles.btns_wrapper}>
            <MyButton className={styles.btn_play}>
              <span className={styles.btn_play_icon}>▶</span>
              Play
            </MyButton>
            <MyButton className={styles.btn_more}>More Info</MyButton>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieMain;
