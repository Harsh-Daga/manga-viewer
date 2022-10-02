import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../../Components/Carousel";

export default function Chapter2() {

  const images = [
    { 
      title: "1", 
      subtitle: "1/17", 
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/11.jpg"
    },
    {
      title: "2",
      subtitle: "2/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/12.jpg",
    },
    {
      title: "3",
      subtitle: "3/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/13.jpg",
    },
    {
      title: "4",
      subtitle: "4/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/14.jpg",
    },
    {
      title: "5",
      subtitle: "5/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/15.jpg",
    },
    {
      title: "6",
      subtitle: "6/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/16.jpg",
    },
    {
      title: "7",
      subtitle: "7/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/17.jpg",
    },
    {
      title: "8",
      subtitle: "8/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/18.jpg",
    },
    {
      title: "9",
      subtitle: "9/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/19.jpg",
    },
    {
      title: "10",
      subtitle: "10/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/20.jpg",
    },
    {
      title: "11",
      subtitle: "11/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/21.jpg",
    },
    {
      title: "12",
      subtitle: "12/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/22.jpg",
    },
    {
      title: "13",
      subtitle: "13/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/23.jpg",
    },
    {
      title: "14",
      subtitle: "14/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/24.jpg",
    },
    {
      title: "15",
      subtitle: "15/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/25.jpg",
    },
    {
      title: "16",
      subtitle: "16/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/26.jpg",
    },
    {
      title: "17",
      subtitle: "17/17",
      img: "https://test-mamba-viewer.s3.us-west-1.amazonaws.com/27.jpg",
    },
  ];




  return (
    <div >
      <ul style={{listStyleType: 'none', display: 'flex', justifyContent: 'center'}}>
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
          <Link to="/ballon_dream/3/">
            <button>3</button>
          </Link>
        </li>
      </ul>
      
      <Carousel images={images} />

    <br/> <br/> <br/>


    </div>
  );
}
