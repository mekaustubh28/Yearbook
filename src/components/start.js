import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import styling from "../content/styling/styles.css"
import Member from "../pages/Member"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";




const Card = styled.div`
  .cards{
    .card{
      width:33.33%;
      align-items: center;
      text-align: center;
      display: inline-block;
      border: 2px solid red;
      cursor:pointer;
    }
  }
  .back{
    cursor:pointer;
    background-color: red;
    position:fixed;
    z-index:+9;
    right:10px;
    border:2px solid black;
    .backbtn{
      
    }
  }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    transition: 0.2s;
    &:hover{
        color: #e63468;
    }
`;






export default function Members() {

  return(<li><StyledLink to="/layout/">Visit ISTE Year-Book</StyledLink></li>)



  // const data = useStaticQuery(graphql`
  //   query {
  //     allMembersXlsxSheet1(sort: { fields: name, order: ASC }) {
  //       edges {
  //         node {
  //           name
  //           link
  //           img
  //           description
  //         }
  //       }
  //     }
  //   }
  // `)

  // // const [Mouse,SetMouse] = useState(true);

  // // function handleOver(){
  // //   SetMouse(false);
  // // }

  // // function handleOut(){
  // //   SetMouse(true);
  // // }

  // // const styleBtn = {
  // //   backgroundColor: Mouse?"#03bfcb":"transparent",
  // //   color: Mouse?"#231e39":"white"
  // // };

  // const [Id, setId] = useState('-1');
  // const [Name, setName] = useState('kaustubh');
  // const [Desc, setDesc] = useState('happy');
  // const [Img, setImg] = useState('Img');
  // const [show, setShow] = useState(false);


  // function UserClick(event) {
  //   let { id, name, desc, img } = event.currentTarget.dataset;
  //   console.log(id, name, desc, img);
  //   setId(id);
  //   setName(name);
  //   setDesc(desc);
  //   setImg(img);
  //   setShow(true);
  // }

  // function UserClickBack() {
  //   setShow(false);
  // }

  // const ShowInsta = { display: show ? 'block' : 'none' }
  // const ShowBackBtn = { display: show ? 'block' : 'none' }

  // console.log({ Id, Name, Desc, Img });

  // return (
  //   <>
  //     <Card>
  //       <a
  //         className="back"
  //         style={ShowBackBtn}
  //         onClick={UserClickBack}
  //       >
  //         <ArrowBackIcon className="backbtn" />
  //       </a>
  //       <h1 className="Header">Hello React</h1>
  //       <div style={ShowInsta}>
  //         <Member className="instaCard" id={Id} name={Name} desc={Desc} img={Img} />
  //       </div>
  //       <div className="cards">
  //         {data.allMembersXlsxSheet1.edges.map((row, i) => (
  //           <div className="card-container">
  //               <img
  //                 className="round"
  //                 src={row.node.img}
  //                 alt="user"
  //                 // height="150px"
  //               />
  //               <h3>{row.node.name}</h3>
  //               <p>{row.node.description}</p>
  //               <div className="buttons">
  //                 <button 
  //                   className="profile" 
  //                   // style={styleBtn} 
  //                   // onMouseOver={handleOver} 
  //                   // onMouseOut={handleOut}
  //                   data-id={i} 
  //                   data-tag={i} 
  //                   data-name={row.node.name} 
  //                   data-desc={row.node.description} 
  //                   data-img={row.node.img} 
  //                   onClick={UserClick}
  //                 >
  //                   View Profile
  //                 </button>
  //               </div>
  //               <div className="skills">
  //                 <h6>Handles</h6>
  //                 <div>
  //                   <a href="https://www.youtube.com/">
  //                     <GitHubIcon style={{ fill: "white" }} />
  //                   </a>
  //                   <a href="https://www.youtube.com/">
  //                     <InstagramIcon style={{ fill: "white" }} />
  //                   </a>
  //                   <a href="https://www.youtube.com/">
  //                     <LinkedInIcon style={{ fill: "white" }} />
  //                   </a>
  //                 </div>
  //               </div>
  //             </div>
  //         ))}
  //       </div>
  //     </Card>
  //   </>
  // )
}