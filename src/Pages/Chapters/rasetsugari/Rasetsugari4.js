import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../../Components/Carousel";


export default function Rasetsugari4() {
  const images = [
    {
      title: "1",
      subtitle: "1/14",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/040.jpg",
    },
    {
      title: "2",
      subtitle: "2/14",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/041.jpg",
    },
    {
      title: "3",
      subtitle: "3/14",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/042.jpg",
    },
    {
      title: "4",
      subtitle: "4/14",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/043.jpg",
    },
    {
      title: "5",
      subtitle: "5/14",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/044.jpg",
    },
    {
      title: "6",
      subtitle: "6/14",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/045.jpg",
    },
    {
      title: "7",
      subtitle: "7/14",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/046.jpg",
    },
    {
      title: "8",
      subtitle: "8/14",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/047.jpg",
    },
    {
      title: "9",
      subtitle: "9/14",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/048.jpg",
    },
    {
      title: "10",
      subtitle: "10/14",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/049.jpg",
    },
    {
      title: "11",
      subtitle: "11/14",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/050.jpg",
    },
    {
      title: "12",
      subtitle: "12/14",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/051.jpg",
    },
    {
      title: "13",
      subtitle: "13/14",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/052.jpg",
    },
    {
      title: "14",
      subtitle: "14/14",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/rasetsigari/053.jpg",
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
            <button>3</button>
          </Link>
        </li>
        <li>
          <Link to="/rasetsugari/4/">
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
