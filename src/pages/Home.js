import React from "react";
import Menu from "../components/Menu/Menu";
import MovieMain from "../components/MovieMain/MovieMain";
import TrendList from "../components/TrendList/TrendList";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-1 left_block">
          <Menu />
        </div>
        <div className="col-md-11 right_block">
          <div className="d-flex flex-column vh-100">
            <MovieMain />
            <TrendList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
