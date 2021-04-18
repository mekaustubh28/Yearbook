import React from "react"
import styled from 'styled-components'
import imageLogo from '../content/images/Logo.png'
import imagePerson from "../content/images/person.jpg"
import styling from '../content/styling/styles.css'

const tableStyle = styled.div`
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
`;



export default function Year(){
  return(
    <>
      <tableStyle>
        <table>
        <tr>
          <th>29</th>
          <th>10</th>
          <th>2003</th>
        </tr>
        <tr>
          <td>Date</td>
          <td>Month</td>
          <td>Year</td>
        </tr>
      </table>
    </tableStyle>
    </>
)
}