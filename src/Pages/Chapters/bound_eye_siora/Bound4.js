import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../../Components/Carousel";

export default function Bound4() {
  const images = [
    {
      title: "1",
      subtitle: "1/9",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/037.jpg",
    },
    {
      title: "2",
      subtitle: "2/9",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/038.jpg",
    },
    {
      title: "3",
      subtitle: "3/9",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/039.jpg",
    },
    {
      title: "4",
      subtitle: "4/9",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/040.jpg",
    },
    {
      title: "5",
      subtitle: "5/9",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/041.jpg",
    },
    {
      title: "6",
      subtitle: "6/9",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/042.jpg",
    },
    {
      title: "7",
      subtitle: "7/9",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/043.jpg",
    },
    {
      title: "8",
      subtitle: "8/9",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/044.jpg",
    },
    {
      title: "9",
      subtitle: "9/9",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/045.jpg",
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
            <button
              style={{
                backgroundColor: "darkgreen",
                border: "2px solid gold",
                color: "white",
              }}
            >
              bound_eye_siora
            </button>
          </Link>
        </li>
        <li>
          <Link to="/rasetsugari">
            <button>rasetsugari</button>
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
          <Link to="/bound_eye_siora">
            <button>1</button>
          </Link>
        </li>
        <li>
          <Link to="/bound_eye_siora/2/">
            <button>2</button>
          </Link>
        </li>
        <li>
          <Link to="/bound_eye_siora/3/">
            <button>3</button>
          </Link>
        </li>
        <li>
          <Link to="/bound_eye_siora/4/">
            <button
              style={{
                backgroundColor: "darkgreen",
                border: "2px solid gold",
                color: "white",
              }}
            >
              4
            </button>
          </Link>
        </li>
      </ul>

      <Carousel images={images} />
    </div>
  );
}
