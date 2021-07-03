import styled from "styled-components"
import React from "react"
import { Link } from "gatsby"
// import AOS from "aos";
// import 'aos/dist/aos.css';
// import { SRLWrapper } from "simple-react-lightbox";
import imageLogo from '../content/images/Logo.png'
import image from '../content/images/iamge.jpeg'
import Profile from "../content/styling/profile1.css";
import Year from "./year"
import SettingsIcon from '@material-ui/icons/Settings';
import { LoremIpsum } from 'react-lorem-ipsum';
import AppsIcon from '@material-ui/icons/Apps';
import ListIcon from '@material-ui/icons/List';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import Pictures from "./Pictures"
import Cursor from "./mousemove"
import {AnimatePresence, motion} from "framer-motion";


const ISTEgram = styled.div`
  position:fixed;
  background:rgb(65, 65, 65);
  border:1px solid black;
  ${'' /* padding:1%; */}
  margin: 0px 5%;
  z-index:+9;
  height:100%;
  width:90%;
  overflow-y:scroll;

  .cursor{
    width:30px;
    height:30px;
    position:absolute;
    border:10px solid white;
    background-color:white;
    border-radius:50%;
    z-index:+8;
    transition-duration:120ms;
    transition-timing-function: ease-out;
    animation: cursorAnimation .5s infinite alternate;
  }
  .grid{
    margin: auto;
    text-align: center;
    position:absolute;
    position:realtive;
    a{
      text-decoration:none;
      width: 400px;
      padding: 1.5%
      height: 250px;
      max-width: 100%;
      margin: 1.5%;
      border:1px solid red;
      text-align: center;
      align-items: center;
      display: inline-block;
      background-color:#22283110;
      border:1px solid #22283110;
      img{
        border-radius: 7px;
        box-shadow: 0px 20px 20px -10px rgba(0, 0, 0, 0.75);
        height:250px;
        weight:400px;
        opacity:0
      }
    }

  }
`;

export default function person(props) {

  const pageTransition = {
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: "-100%"
    }
  };

  function Images(){
    var rows = [];
    for (var i = 0; i < 20; i++) {
      rows.push(
        <div class="picture_wrapper">
          <motion.img 
            exit="out" 
            animate="in" 
            initial="out" 
            variants={pageTransition}
            transition={{type:"spring" ,stiffness:1000}}
            src="https://cdn.pixabay.com/photo/2020/05/22/20/56/yellow-flowers-5207169_960_720.jpg"
            alt="Image" 
            key={i}
          />
        </div>
      );
    }
    return <div className="main_content">{rows}</div>;
  }

  return (

    <div style={{background:"black"}}>
      <ISTEgram>
        <Cursor/>
        <div class="main">
  {/* <div class="top_banner">
    <div class="content_title">
      <h1 class="title">
        <small class="d-block">Withoud JS, only CCS </small>Masonry grid
      </h1>
    </div>
  </div>  */}
  {/* <Images></Images> */}
  <div class="main_content">
      <div class="picture_wrapper">
        <img src="https://cdn.pixabay.com/photo/2020/07/24/21/58/lemon-5435158__340.jpg" alt=""/>
      </div>
      <div class="picture_wrapper">
        <img src="https://cdn.pixabay.com/photo/2017/04/19/10/47/amalfi-2241861_960_720.jpg" alt=""/>
      </div>
      <div class="picture_wrapper">
        <img src="https://cdn.pixabay.com/photo/2020/12/06/16/16/cosmos-5809271_960_720.png" alt=""/>
      </div>
      <div class="picture_wrapper">
        <img src="https://cdn.pixabay.com/photo/2020/05/22/20/56/yellow-flowers-5207169_960_720.jpg" alt=""/> 
      </div>
      <div class="picture_wrapper">
        <img src="https://cdn.pixabay.com/photo/2021/03/29/12/16/stairs-6133971_960_720.jpg" alt=""/>
      </div>
      <div class="picture_wrapper">
        <img src="https://cdn.pixabay.com/photo/2021/04/01/15/39/food-6142611_960_720.jpg" alt=""/>
      </div>
      <div class="picture_wrapper">
        <img src="https://cdn.pixabay.com/photo/2020/07/24/21/58/lemon-5435158__340.jpg" alt=""/>
      </div>
      <div class="picture_wrapper">
        <img src="https://cdn.pixabay.com/photo/2020/07/24/21/58/lemon-5435158__340.jpg" alt=""/>
      </div>
      <div class="picture_wrapper">
        <img src="https://cdn.pixabay.com/photo/2017/04/19/10/47/amalfi-2241861_960_720.jpg" alt=""/>
      </div>
      <div class="picture_wrapper">
        <img src="https://cdn.pixabay.com/photo/2020/12/06/16/16/cosmos-5809271_960_720.png" alt=""/>
      </div>
      <div class="picture_wrapper">
        <img src="https://cdn.pixabay.com/photo/2020/05/22/20/56/yellow-flowers-5207169_960_720.jpg" alt=""/> 
      </div>
      <div class="picture_wrapper">
        <img src="https://cdn.pixabay.com/photo/2021/03/29/12/16/stairs-6133971_960_720.jpg" alt="" />
      </div>
      <div class="picture_wrapper">
        <img src="https://cdn.pixabay.com/photo/2021/04/01/15/39/food-6142611_960_720.jpg" alt="" />
      </div>
      <div class="picture_wrapper">
        <img src="https://cdn.pixabay.com/photo/2020/07/24/21/58/lemon-5435158__340.jpg" alt="" />
      </div>
      <div class="picture_wrapper">
        <img src="https://cdn.pixabay.com/photo/2021/03/29/12/16/stairs-6133971_960_720.jpg" alt="" />
      </div>
      <div class="picture_wrapper">
        <img src="https://cdn.pixabay.com/photo/2020/05/22/20/56/yellow-flowers-5207169_960_720.jpg" alt=""/> 
      </div>
  </div>
</div>
      </ISTEgram>
    </div>
  )
}

