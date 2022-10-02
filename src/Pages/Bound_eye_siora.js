import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../Components/Carousel";

export default function Bound_eye_siora() {
  const images = [
    {
      title: "1",
      subtitle: "1/5",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/000.jpg",
    },
    {
      title: "2",
      subtitle: "2/5",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/001.jpg",
    },
    {
      title: "3",
      subtitle: "3/5",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/002.jpg",
    },
    {
      title: "4",
      subtitle: "4/5",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/003.jpg",
    },
    {
      title: "5",
      subtitle: "5/5",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/004.jpg",
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
            <button>4</button>
          </Link>
        </li>
      </ul>

      <Carousel images={images} />
    </div>
  );
}
