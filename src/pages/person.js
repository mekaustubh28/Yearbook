import React from "react"
import styled from 'styled-components'
import imageLogo from '../content/images/Logo.png'
import imagePerson from "../content/images/person.jpg"
import styling from '../content/styling/styles.css'
import Year from "./year"
import SettingsIcon from '@material-ui/icons/Settings';
import { LoremIpsum } from 'react-lorem-ipsum';
import ContactsIcon from '@material-ui/icons/Contacts';
// @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');


const ISTEgram = styled.div`
  ${'' /* text-align:center; */}
  border:2px solid black;
  padding:1%;
  margin: 0px 23%;
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
    display:flex;
    .details{
      width:35%;
      img{
      margin:1%;
      border-radius:100%;
      }
      h3{
        text-align:center;
        ${'' /* width:fit-content; */}
        margin:1%;
      }  
    }
    .bio{
      width:65%;
      float:right;
      margin-left:4% ;
      border:1px solid black;
      table{
        border:none;
        ${'' /* float:right; */}
        ${'' /* align-items:center; */}
        margin-left:10%;
        margin-bottom:0;
        width:80%;
        th{
          border:none;
          text-align:center;
          font-size:2vw;
          padding:0;
        }
        td{
          border:none;
          text-align:center;
          font-size:1vw;
          padding:0;
        }
      }
      h3{
        margin:1% 0 1% 4%;
        ${'' /* margin-top:1%; */}
        ${'' /* text-align:center; */}
        .span1{
          padding:1% 24%;
          border:1px solid black;
          margin-right:2%;
          border-radius:5px;
        }
        .span2{
          padding:1% 3%;
          border-radius:5px;
          border:1px solid black;
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
            <div className="details">
              <img src={imagePerson} alt="My Image" width="100%"/>
              <h3>Kaustubh Verma<span style={{margin:"1%"}}><ContactsIcon style={{fill:"blue"}}/></span></h3>
              {/* <p>Hello world</p> */}
            </div>
            <div className="bio">
              <Year />
              <div className="text-wrapper">
                <h3><span className="span1">Profile</span><span className="span2"><SettingsIcon /></span></h3>
                <LoremIpsum p={1} />
              </div>
            </div>
          </div>
        </div>
      </ISTEgram>
    </>
  )
}