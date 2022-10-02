import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../Components/Carousel";

export default function Rasetsugari() {
  const images = [
    {
      title: "1",
      subtitle: "1/7",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/000.jpg",
    },
    {
      title: "2",
      subtitle: "2/7",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/001.jpg",
    },
    {
      title: "3",
      subtitle: "3/7",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/002.jpg",
    },
    {
      title: "4",
      subtitle: "4/7",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/003.jpg",
    },
    {
      title: "5",
      subtitle: "5/7",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/004.jpg",
    },
    {
      title: "6",
      subtitle: "6/7",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/005.jpg",
    },
    {
      title: "7",
      subtitle: "7/7",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/006.jpg",
    },
  ];

  return (
    <div >
      <ul style={{listStyleType: 'none', display: 'flex', justifyContent: 'center'}}>
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
            <button
              style={{
                backgroundColor: "darkgreen",
                border: "2px solid gold",
                color: "white",
              }}
            >
              1
            </button>
          </Link>
        </li>
        <li>
          <Link to="/rasetsugari/2/">
            <button>2</button>
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
