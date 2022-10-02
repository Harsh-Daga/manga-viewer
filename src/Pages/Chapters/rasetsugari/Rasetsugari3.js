import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../../Components/Carousel";

export default function Rasetsugari3() {

  const images = [
    {
      title: "1",
      subtitle: "1/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/023.jpg",
    },
    {
      title: "2",
      subtitle: "2/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/024.jpg",
    },
    {
      title: "3",
      subtitle: "3/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/025.jpg",
    },
    {
      title: "4",
      subtitle: "4/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/026.jpg",
    },
    {
      title: "5",
      subtitle: "5/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/027.jpg",
    },
    {
      title: "6",
      subtitle: "6/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/028.jpg",
    },
    {
      title: "7",
      subtitle: "7/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/029.jpg",
    },
    {
      title: "8",
      subtitle: "8/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/030.jpg",
    },
    {
      title: "9",
      subtitle: "9/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/031.jpg",
    },
    {
      title: "10",
      subtitle: "10/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/032.jpg",
    },
    {
      title: "11",
      subtitle: "11/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/033.jpg",
    },
    {
      title: "12",
      subtitle: "12/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/034.jpg",
    },
    {
      title: "13",
      subtitle: "13/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/035.jpg",
    },
    {
      title: "14",
      subtitle: "14/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/036.jpg",
    },
    {
      title: "15",
      subtitle: "15/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/037.jpg",
    },
    {
      title: "16",
      subtitle: "16/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/038.jpg",
    },
    {
      title: "17",
      subtitle: "17/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/039.jpg",
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
            <button>2</button>
          </Link>
        </li>
        <li>
          <Link to="/rasetsugari/3/">
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
          <Link to="/rasetsugari/4/">
            <button>4</button>
          </Link>
        </li>
      </ul>
      
      <Carousel images={images} />


    </div>
  );
}
