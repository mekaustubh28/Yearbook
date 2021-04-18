import React from "react"
import styled from 'styled-components'
import imageLogo from '../content/images/Logo.png'
import imagePerson from "../content/images/person.jpg"
import styling from '../content/styling/styles.css'
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
    border:2px solid black;
    margin:2%;
    img{
      margin:1%;
      border-radius:100%;
      ${'' /* display: inline-flex; */}
    }
    div{
      position:absolute;
      table{
        width:200%;
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
              <table>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Age</th>
                </tr>
                <tr>
                  <td>Jill</td>
                  <td>Smith</td>
                  <td>50</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </ISTEgram>
    </>
  )
}