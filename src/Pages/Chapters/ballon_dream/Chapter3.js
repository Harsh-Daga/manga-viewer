import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../../Components/Carousel";

export default function Chapter3() {
  const images = [
    {
      title: "1",
      subtitle: "1/10",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/29.jpg",
    },
    {
      title: "2",
      subtitle: "2/10",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/30.jpg",
    },
    {
      title: "3",
      subtitle: "3/10",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/31.jpg",
    },
    {
      title: "4",
      subtitle: "4/10",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/32.jpg",
    },
    {
      title: "5",
      subtitle: "5/10",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/33.jpg",
    },
    {
      title: "6",
      subtitle: "6/10",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/34.jpg",
    },
    {
      title: "7",
      subtitle: "7/10",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/35.jpg",
    },
    {
      title: "8",
      subtitle: "8/10",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/36.jpg",
    },
    {
      title: "9",
      subtitle: "9/10",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/37.jpg",
    },
    {
      title: "10",
      subtitle: "10/10",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/38.jpg",
    },
  ];

  return (
    <div className="container">
      <ul style={{ listStyleType: "none", display: "flex" }}>
        <li>
          <Link to="/">
            <button
              style={{
                backgroundColor: "darkgreen",
                border: "2px solid gold",
                color: "white",
              }}
            >
              balloon_dream
            </button>
          </Link>
        </li>
        <li>
          <Link to="/bound_eye_siora">
            <button>bound_eye_siora</button>
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
          <Link to="/">
            <button>1</button>
          </Link>
        </li>
        <li>
          <Link to="/ballon_dream/2/">
            <button>2</button>
          </Link>
        </li>
        <li>
          <Link to="/ballon_dream/3/">
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
      </ul>
      <Carousel images={images} />
      <br /> <br /> <br />
    </div>
  );
}
