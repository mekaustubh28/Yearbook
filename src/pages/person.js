import React from "react"
import styled from 'styled-components'
import imageLogo from '../content/images/Logo.png'
import imagePerson from "../content/images/person.jpg"
import styling from '../content/styling/styles.css'
import Year from "./year"
// @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');


const ISTEgram = styled.div`
  ${'' /* text-align:center; */}
  border:2px solid black;
  padding:1%;
  margin: 0px 15%;
  img{
    display: inline-flex;
    margin:0;
  }
  h1{
    ${'' /* font-family: 'Josefin Sans', sans-serif; */}
    ${'' /* font-family: 'Open Sans', sans-serif; */}
    font-family: 'Zen Dots', cursive;
    margin: 0 0 0 1%;
    font-size: 50px;
    display: inline-flex;
    span{
      font-family: 'Lobster', cursive;
    }
  }
  .profile{
    border:3px solid black;
    margin:2%;
    img{
      margin:1%;
      border-radius:100%;
      ${'' /* display: inline-flex; */}
    }
    div{
      ${'' /* position:absolute; */}
      width:65%;
      float:right;
      top:0;
      border:1px solid black;
      table{
        float:right;
        margin-right:5%;
        ${'' /* position:relative; */}
        width:80%;
        th{
          text-align:center;
          font-size:2vw;
        }
        td{
          text-align:center;
          font-size:1.5vw;
        }
      }
    }

  }
`;

export default function person() {
  return (
    <>
      <ISTEgram>
        <div className="container">
          <div>
            <img src={imageLogo}  alt="ISTElogo" width="50px"/>
            <h1><span>ISTE</span>gram</h1>
          </div>
          <div className="profile">
            <img src={imagePerson} alt="My Image" width="30%"/>
            <div>
              <Year />
            </div>
          </div>
        </div>
      </ISTEgram>
    </>
  )
}