import React from "react"
import styled from 'styled-components'
import imageLogo from '../content/images/Logo.png'
import Year from "./year"
import SettingsIcon from '@material-ui/icons/Settings';
import { LoremIpsum } from 'react-lorem-ipsum';
import AppsIcon from '@material-ui/icons/Apps';
import ListIcon from '@material-ui/icons/List';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import Pictures from "./Pictures"
import {AnimatePresence, motion} from "framer-motion";
import Book from "../components/book";


const ISTEgram = styled.div`
  position:fixed;
  background:#222830;
  border:1px solid black;
  color:whitesmoke;
  padding:1%;
  margin: 0px 23%;
  z-index:+9;
  height:100%;
  overflow-y:scroll;

  @media screen and (max-width: 1602px){
    margin: 0px 20%;
  }

  @media screen and (max-width: 1200px){
    margin: 0px 10%;
  }
  @media screen and (max-width: 1000px){
    margin: 0px;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(185, 185, 185); 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #888; 
  }
  img{
    display: inline-flex;
    margin:0;
    }
  h1{
    margin: 0 0 0 1%;
    font-size: 50px;
    display: inline-flex;
  }
  .profile{
    border-bottom: 1px solid black;
    @media screen and (max-width: 770px){
      border-bottom: 0;
    }
    padding-bottom:2%;
    margin:2%;
    margin-bottom:0;
    display:flex;
    .details{
      width:35%;
      img{
      margin:1%;
      border-radius:100%;
      }
      h3{
        text-align:center;
        margin:1%;
        @media screen and (max-width: 770px){
          display:none;
        }
      }  
    }
    .bio{
      width:65%;
      float:right;
      margin-left:4% ;
      table{
        border:none;
        margin-left:10%;
        margin-bottom:0;
        width:80%;
        th{
          border:none;
          text-align:center;
          font-size:2vw;
          padding:0;
          @media screen and (max-width: 1200px){
            font-size:3vw;
          }
          @media screen and (max-width: 475px){
            font-size:5vw;
          }
        }
        td{
          border:none;
          text-align:center;
          font-size:1vw;
          padding:0;
          @media screen and (max-width: 1200px){
            font-size:3vw;
          }
        }
      }
      h3{
        margin:1% 0 1% 4%;
        @media screen and (max-width: 1200px){
            margin-top:3%;
        }
        .span1{
          padding:1% 24%;
          border:1px solid black;
          margin-right:2%;
          font-size:1.5vw;
          border-radius:5px;
          @media screen and (max-width: 1200px){
            font-size:2vw;
            padding:1% 25%;
          }
          @media screen and (max-width:475px){
            font-size:4vw;
          }
        }
        .span2{
          padding:1% 3%;
          border-radius:5px;
          font-size:1.5vw;
          border:1px solid black;
          @media screen and (max-width: 1200px){
            font-size:2vw;
            padding:1% 5%;
          }
          @media screen and (max-width: 475px){
            font-size:4vw;
          }
          svg{
            font-size:1.5vw;
            padding-top:1%;
            @media screen and (max-width: 1200px){
              font-size:2vw;
            }
            @media screen and (max-width: 475px){
            font-size:4vw;
          }
          }
        }
      }
      .text-wrapper{
        p{
          @media screen and (max-width: 770px){
            display:none;
          }
        }
      }
      .name{
        display:none;
        @media screen and (max-width: 770px){
          display:block;
          font-size:4vw;
          margin: 0 0 0 20%;
        }
      }
    }
  }
  .para{
    display:none;
      @media screen and (max-width: 770px){
        display:block;
      }
    p{
      @media screen and (max-width: 770px){
        margin-left: 5%;
      }
    }
    @media screen and (max-width: 770px){
      border-bottom: 1px solid black;
    }  
  }
  
  .icons{
    margin:1%;
    svg{
      margin: 0 9.5% 0 9.5%;
      font-size: 2.5vw;
      color:rgb(59, 59, 59);
      @media screen and (max-width: 1200px){
            font-size:4vw;
      }
      @media screen and (max-width: 475px){
            font-size:5vw;
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
  return (
    <div>
      <ISTEgram>
      <AnimatePresence>
        <motion.div 
          exit="out" 
          animate="in" 
          initial="out" 
          variants={pageTransition}
          className="container" 
          id={props.id}
        >
          <div>
            <img src={imageLogo}  alt="ISTElogo" width="50px"/>
            <h1><span>ISTE</span>gram</h1>
          </div>
          <div className="profile">
            <div className="details">
              <img src={props.img} alt="My Image" width="100%"/>
              <h3>{props.name}</h3>
            </div>
            <div className="bio">
              <Year />
              <div className="text-wrapper">
                <h3><span className="span1">Profile</span><span className="span2"><SettingsIcon /></span></h3><br></br>
                <h3 className="name">{props.name}</h3>
                <LoremIpsum p={1} />
              </div>
            </div>
          </div>
          <div className="para">
            <LoremIpsum p={1}/>
          </div>
          <div className="icons">
              <AppsIcon style={{fill:"#515BD4"}}/>
              <ListIcon style={{fill:"#8134AF"}}/>
              <AssignmentIndIcon style={{fill:"#DD2A7B"}}/>
              <TurnedInNotIcon style={{fill:"#F58529"}}/>
          </div>
          </motion.div>
        {/* <Pictures></Pictures> */}
        <Book></Book>
        </AnimatePresence>
      </ISTEgram>
    </div>
  )
}

