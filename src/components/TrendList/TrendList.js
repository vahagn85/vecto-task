import React, { useEffect, useRef } from "react";
import MovieItem from "../MovieItem/MovieItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TrendList.module.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { listMovies } from "./../../actions/movieActions";
const TrendList = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);
  const { movies, loading, error } = movieList;

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    className: "trend-slider",
  };
  const mSlider = useRef(null);
  useEffect(() => {
    dispatch(listMovies());
    if (!loading && mSlider.current) {
      window.addEventListener("wheel", (e) => {
        if (e.deltaY < 0) {
          mSlider.current.slickNext();
        } else {
          mSlider.current.slickPrev();
        }
      });
    }
  }, []);
  return (
    <section className={styles.slider_section}>
      <h2 className={styles.title}>Trending Now</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>error</p>
      ) : (
        <Slider {...settings} ref={mSlider}>
          {movies?.map((slide) => (
            <div key={slide.Id}>
              <MovieItem
                movieId={slide.Id}
                cover={slide.CoverImage}
                name={slide.Title}
              />
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
};

export default TrendList;
