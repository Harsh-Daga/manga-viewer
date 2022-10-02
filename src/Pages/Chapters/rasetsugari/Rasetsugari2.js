import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../../Components/Carousel";

export default function Rasetsugari2() {

  const images = [
    {
      title: "1",
      subtitle: "1/16",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/007.jpg",
    },
    {
      title: "2",
      subtitle: "2/16",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/008.jpg",
    },
    {
      title: "3",
      subtitle: "3/16",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/009.jpg",
    },
    {
      title: "4",
      subtitle: "4/16",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/010.jpg",
    },
    {
      title: "5",
      subtitle: "5/16",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/011.jpg",
    },
    {
      title: "6",
      subtitle: "6/16",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/012.jpg",
    },
    {
      title: "7",
      subtitle: "7/16",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/013.jpg",
    },
    {
      title: "8",
      subtitle: "8/16",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/014.jpg",
    },
    {
      title: "9",
      subtitle: "9/16",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/015.jpg",
    },
    {
      title: "10",
      subtitle: "10/16",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/016.jpg",
    },
    {
      title: "11",
      subtitle: "11/16",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/017.jpg",
    },
    {
      title: "12",
      subtitle: "12/16",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/018.jpg",
    },
    {
      title: "13",
      subtitle: "13/16",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/019.jpg",
    },
    {
      title: "14",
      subtitle: "14/16",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/020.jpg",
    },
    {
      title: "15",
      subtitle: "15/16",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/021.jpg",
    },
    {
      title: "16",
      subtitle: "16/16",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/022.jpg",
    },
  ];


  return (
    <div className="container">
      <ul style={{ listStyleType: "none", display: "flex" }}>
        <li>
          <Link to="/">
            <button>balloon_dream</button>
          </Link>
        </li>
        <li>
          <Link to="/bound_eye_siora">
            <button>bound_eye_siora</button>
          </Link>
        </li>
        <li>
          <Link to="/rasetsugari">
            <button
              style={{
                backgroundColor: "darkgreen",
                border: "2px solid gold",
                color: "white",
              }}
            >
              rasetsugari
            </button>
          </Link>
        </li>
      </ul>

      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <li>
          <Link to="/rasetsugari">
            <button>1</button>
          </Link>
        </li>
        <li>
          <Link to="/rasetsugari/2/">
            <button
              style={{
                backgroundColor: "darkgreen",
                border: "2px solid gold",
                color: "white",
              }}
            >
              2
            </button>
          </Link>
        </li>
        <li>
          <Link to="/rasetsugari/3/">
            <button>3</button>
          </Link>
        </li>
        <li>
          <Link to="/rasetsugari/4/">
            <button>4</button>
          </Link>
        </li>
      </ul>
      
      <Carousel images={images} />


    </div>
  );
}
