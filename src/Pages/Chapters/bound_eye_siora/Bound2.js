import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../../Components/Carousel";

export default function Bound2() {

  const images = [
    { 
      title: "1", 
      subtitle: "1/17", 
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/005.jpg"
    },
    {
      title: "2",
      subtitle: "2/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/006.jpg",
    },
    {
      title: "3",
      subtitle: "3/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/007.jpg",
    },
    {
      title: "4",
      subtitle: "4/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/008.jpg",
    },
    {
      title: "5",
      subtitle: "5/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/009.jpg",
    },
    {
      title: "6",
      subtitle: "6/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/010.jpg",
    },
    {
      title: "7",
      subtitle: "7/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/011.jpg",
    },
    {
      title: "8",
      subtitle: "8/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/012.jpg",
    },
    {
      title: "9",
      subtitle: "9/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/013.jpg",
    },
    {
      title: "10",
      subtitle: "10/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/014.jpg",
    },
    {
      title: "11",
      subtitle: "11/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/015.jpg",
    },
    {
      title: "12",
      subtitle: "12/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/016.jpg",
    },
    {
      title: "13",
      subtitle: "13/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/017.jpg",
    },
    {
      title: "14",
      subtitle: "14/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/018.jpg",
    },
    {
      title: "15",
      subtitle: "15/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/019.jpg",
    },
    {
      title: "16",
      subtitle: "16/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/020.jpg",
    },
    {
      title: "17",
      subtitle: "17/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/bound_eye_siora/021.jpg",
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
