import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Profile from "../pages/profile"
import Styles from "../content/styling/styles.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {motion} from "framer-motion";
import ParticleBackground from "../pages/ParticleBackground";


const Card = styled.div`
  .back{
    cursor:pointer;
    position:fixed;
    background-color: rgba(255, 255, 255, 0.1);
    position:fixed;
    border-radius:50%;
    padding:0.2%;
    z-index:+20;
    right:20px;
    font-size:30px;
    top:20px;
    &:hover{
      .backbtn{
        color:whitesmoke;
        ${'' /* transition:0.3s ease-in-out; */}
      }
    }
    .backbtn{
      font-size:40px;
    }
  }
  div{
    .instaCard{
      position:fixed;
    }
  }
`

export default function Members() {
  const data = useStaticQuery(graphql`
    query {
      allMembersXlsxSheet1(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            link
            img
            description
          }
        }
      }
    }
  `)


  const [Id, setId] = useState('-1');
  const [Name, setName] = useState('name');
  const [Desc, setDesc] = useState('desc');
  const [Img, setImg] = useState('img');
  const [show, setShow] = useState(false);

  const [Opacity,setOpacity] = useState(false);

  function UserClick(event) {
    let { id, name, desc, img } = event.currentTarget.dataset;
    console.log(id, name, desc, img);
    setId(id);
    setName(name);
    setDesc(desc);
    setImg(img);
    setShow(true);
    setOpacity(!Opacity);
    // console.log(Opacity);
  }


  function UserClickBack() {
    setShow(false);
    setOpacity(!Opacity);
  }
  
  const ShowInsta = { display: show ? 'block' : 'none' }
  const ShowBackBtn = { display: show ? 'block' : 'none' }

  // console.log({ Id, Name, Desc, Img });

  return (
    <>
      <Card>
        <a
          className="back"
          style={ShowBackBtn}
          onClick={UserClickBack}
        >
          <ArrowBackIcon className="backbtn" />
        </a>
        <div style={ShowInsta} >
          <Profile className="instaCard" id={Id} name={Name} desc={Desc} img={Img}/>
          </div>
        <ParticleBackground/>
        <div className="cards" id={Opacity ? 'opacity' : ''}> 
          {data.allMembersXlsxSheet1.edges.map((row, i) => (
            <motion.div 
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.9 }}
              className="card-container"
            > 
                <img
                  className="round"
                  src={row.node.img}
                  alt="user"
                  height="180px"
                />
                <h3>{row.node.name}</h3>
                <p>{row.node.description}</p>
                <div className="buttons">
                  <button 
                    className="profile" 
                    data-id={i} 
                    data-tag={i} 
                    data-name={row.node.name} 
                    data-desc={row.node.description} 
                    data-img={row.node.img} 
                    onClick={UserClick}
                  >
                    View Memories
                  </button>
                </div>
                <div className="skills">
                  <h6>Handles</h6>
                  <div>
                    <a href="https://www.youtube.com/">
                      <GitHubIcon style={{ fill: "#F1F1EF" }} />
                    </a>
                    <a href="https://www.youtube.com/">
                      <InstagramIcon style={{ fill: "#F1F1EF" }} />
                    </a>
                    <a href="https://www.youtube.com/">
                      <LinkedInIcon style={{ fill: "#F1F1EF" }} />
                    </a>
                  </div>
                </div>
              </motion.div>
          ))}
        </div>
      </Card>
    </>
  )
}