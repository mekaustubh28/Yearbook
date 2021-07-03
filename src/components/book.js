import React,{ useEffect } from "react"
import book from "../content/styling/book.css"
import styled from "styled-components"
import image from "../content/images/person.jpg";
import scene from "../content/images/iamge.jpeg";
import bg1 from "../content/images/bg.png";
import bg2 from "../content/images/3.png";
import bg3 from "../content/images/2.png";

const Container = styled.div`
  .firstcont{
    background-color:whitesmoke;
    display:flex;
    margin:0 3%;
    .container{
      width: 50%;
      border:1px solid red; 
    }
    .right{
      background-color:whitesmoke;
      z-index:2;
    }
    .left{
      z-index:1;
      .bg1{
        position:absolute;
        left:38%;
        top:20%;
        z-index:0;
      }
    }
  }
`;


function Book(props) {
  return (
    <Container>
      {/* <div className="firstcont"> */}
        {/* <div className="container left"> */}
          {/* <img src={bg1} className="bg1" width="30%"/> */}
          {/* <img src={bg2} className="bg2"/> */}
          {/* <img src={bg3} className="bg3"/> */}
        {/* </div> */}
        <div className="container right">
          <div className="gallery">
            <div className="gallery-item">
              <img src={scene} alt="scene.jpg"/>
            </div>
            <div className="gallery-item">
              <img src={scene} alt="scene.jpg"/>
            </div>
            <div className="gallery-item">
              <img src={scene} alt="scene.jpg"/>
            </div>
            <div className="gallery-item">
              <img src={scene} alt="scene.jpg"/>
            </div>
            <div className="gallery-item">
              <img src={scene} alt="scene.jpg"/>
            </div>
            <div className="gallery-item">
              <img src={scene} alt="scene.jpg"/>
            </div>
            <div className="gallery-item">
              <img src={scene} alt="scene.jpg"/>
            </div>
            <div className="gallery-item">
              <img src={scene} alt="scene.jpg"/>
            </div>
            <div className="gallery-item">
              <img src={scene} alt="scene.jpg"/>
            </div><div className="gallery-item">
              <img src={scene} alt="scene.jpg"/>
            </div>
            <div className="gallery-item">
              <img src={scene} alt="scene.jpg"/>
            </div>
            <div className="gallery-item">
              <img src={scene} alt="scene.jpg"/>
            </div>
            <div className="gallery-item">
              <img src={scene} alt="scene.jpg"/>
            </div>
            <div className="gallery-item">
              <img src={scene} alt="scene.jpg"/>
            </div>
          </div>
        </div>
      {/* </div> */}
    </Container>
  );
}

export default Book;
