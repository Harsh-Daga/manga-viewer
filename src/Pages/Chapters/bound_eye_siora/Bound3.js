import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../../Components/Carousel";

export default function Bound3() {
  const images = [
    {
      title: "1",
      subtitle: "1/15",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/022.jpg",
    },
    {
      title: "2",
      subtitle: "2/15",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/023.jpg",
    },
    {
      title: "3",
      subtitle: "3/15",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/024.jpg",
    },
    {
      title: "4",
      subtitle: "4/15",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/025.jpg",
    },
    {
      title: "5",
      subtitle: "5/15",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/026.jpg",
    },
    {
      title: "6",
      subtitle: "6/15",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/027.jpg",
    },
    {
      title: "7",
      subtitle: "7/15",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/028.jpg",
    },
    {
      title: "8",
      subtitle: "8/15",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/029.jpg",
    },
    {
      title: "9",
      subtitle: "9/15",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/030.jpg",
    },
    {
      title: "10",
      subtitle: "10/15",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/031.jpg",
    },
    {
      title: "11",
      subtitle: "11/15",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/032.jpg",
    },
    {
      title: "12",
      subtitle: "12/15",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/033.jpg",
    },
    {
      title: "13",
      subtitle: "13/15",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/034.jpg",
    },
    {
      title: "14",
      subtitle: "14/15",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/035.jpg",
    },
    {
      title: "15",
      subtitle: "15/15",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/036.jpg",
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
            <button
              style={{
                backgroundColor: "darkgreen",
                border: "2px solid gold",
                color: "white",
              }}
            >
              3
            </button>
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
