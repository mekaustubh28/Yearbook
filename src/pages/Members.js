import React from "react"
import { graphql, useStaticQuery} from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
// import image from "../content/members"
import { StaticImage } from "gatsby-plugin-image"



const Img = styled(Image)`
  width: 100%;
  height: 150px;
  span{
    border: 1px solid black;
    img {
      margin: 0;
      display: inline;
    }
  }
  @media only screen and (max-width: 786px) {
    width: 100%;
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
          }
        }
      }
    }
  `)

  return (
    <div>
          {data.allMembersXlsxSheet1.edges.map((row, i) => (
            <span
            >
              {/* <div className="name">{row.node.img}</div> */}              
              {/* <StaticImage src={row.node.img} alt="A dinosaur" /> */}
              <img src={row.node.img} width="32.33%" style={{border: "1px solid gray", marginLeft:"1%",borderRadius:"3px"}}/>
          </span>
        ))}
    </div>
  )
}



  // img {
  //   childImageSharp {
  //     fluid {
  //       ...GatsbyImageSharpFluid
  //     }
  //   }
  // }