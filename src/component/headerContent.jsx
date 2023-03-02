import React, { Component } from "react";
import { Link } from "react-router-dom";
import Movies from "./MoviesList";
import { FaPlay, FaPlus } from "react-icons/fa";
const HeaderContent = ({ movieObj }) => {
  const { movie } = movieObj;

  let relaeseDate = movie?.release_date;
  relaeseDate = relaeseDate?.slice(0, 4);
  return (
    <>
      {movie && (
        <div style={{ paddingTop: "200px", paddingBottom: "200px" }}>
          <div>
            <div className="title">{movie.title}</div>
            <div className="row pl-3 " style={{ marginBottom: "15px" }}>
              <div className="IMDb">IMDb</div>

              <div className="movieDetails">{relaeseDate}</div>
              <div className="movieDetails">{movie.vote_average}</div>
            </div>
            <div className="overview" style={{ marginBottom: "15px" }}>
              {movie.overview}
            </div>
            <div className="row pl-3 ">
              <button
                className="btn d-flex justify-centent-center align-items-center"
                style={{ backgroundColor: "white", paddingRight: "20px" }}
              >
                <FaPlay size={12} />{" "}
                <span style={{ fontSize: "small", paddingLeft: "12px" }}>
                  Lecture
                </span>{" "}
              </button>
              <button
                className="btn d-flex justify-centent-center align-items-center ml-3"
                style={{
                  backgroundColor: "rgb(100, 100, 100)",
                  paddingRight: "20px",
                }}
              >
                <Link to={"/movie/favoriteMovie"} >
                <FaPlus size={12} color={"white"} />{" "}
                <span
                  style={{
                    fontSize: "small",
                    paddingLeft: "12px",
                    color: "whitesmoke",
                  }}
                >
                  My List
                </span></Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderContent;
