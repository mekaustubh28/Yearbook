import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Member from "../pages/Member"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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

  const [Id,setId] = useState('-1');
  const [Name,setName] = useState('kaustubh');
  const [Desc,setDesc] = useState('happy');
  const [Img,setImg] = useState('Img');
  const [show,setShow] = useState(false);


  function UserClick(event){
    let {id, name, desc, img} = event.currentTarget.dataset;
    console.log(id,name,desc,img);
    setId(id);
    setName(name);
    setDesc(desc);
    setImg(img);
    setShow(true);
  }

  function UserClickBack(){
    setShow(false);
  }

  const ShowInsta = {display:show?'block':'none'}
  const ShowBackBtn = {display:show?'block':'none'}

  console.log({Id,Name,Desc,Img});

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
        <div style={ShowInsta}>
        <Member className="instaCard" id={Id} name={Name} desc={Desc} img={Img}/>
        </div>
          <div className="cards">
          {data.allMembersXlsxSheet1.edges.map((row, i) => (  
              <div className="card" data-id={i} data-tag={i} data-name={row.node.name} data-desc={row.node.description} data-img={row.node.img} onClick={UserClick}>
                <div>{row.node.name}</div>
                <div>{row.node.description}</div>
                <img
                  src={row.node.img}
                  height="200px"
                  style={{
                  border: "1px solid gray",
                  marginLeft: "1%",
                  }}
                  alt={row.node.name}
                />
              </div>
      ))}
      </div>
      </Card>
    </>
  )
}