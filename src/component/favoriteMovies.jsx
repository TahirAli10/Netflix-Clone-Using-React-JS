import React, { useContext } from "react";
import MovieContext from "../context/movieContext";
import Navbar from "./Navbar";
import Footer from "./footer";
import { FaTimes } from "react-icons/fa";
import Nodata from "../images/Nodata.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FavoriteMovies = () => {
  const { favMovie, setFavMovie } = useContext(MovieContext);

  function handleDelete(obj) {
    const updatedMovie = favMovie.filter((movie) => movie.id !== obj.id);
    setFavMovie(updatedMovie);
    toast.success("Movie Removed")
  }
  
  return (
    <>
      {favMovie && (
       
        <div style={{ backgroundColor: "black", }}>
                 <ToastContainer />
          <div className="container  ">
            <Navbar />
            <h1
              className="d-flex justify-content-center"
              style={{ color: "white" }}
            >
              My Favorites
            </h1>
            <div className="row  ">
              {favMovie.length === 0 ? (
                <div
                  className="d-flex justify-centent-center align-items-center mx-auto"
                  style={{ height: "300px" }}
                >
                  <div className="">
                  <h3 className="text-center" style={{color:"whitesmoke", }}>No data found</h3>
                  <img src={Nodata} width={200}  alt="" />
                  </div>
                </div>
              ) : (
                favMovie.map((obj) => (
                  <div
                    key={obj.id}
                    className=" favoriteMovies col-md-3 col-sm-6 col-12 d-flex justify-content-center mt-3"
                  >
                    <div class="shadow">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${obj.poster_path}`}
                      width={200}
                      height={400}
                      alt=""
                      className="favImageTag"
                    />
                    </div>
                  
                    <FaTimes
                      className="Fatimes"
                      size={30}
                      onClick={() => handleDelete(obj)}
                    />
                   
                  </div>
                ))
              )}
            </div>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default FavoriteMovies;
