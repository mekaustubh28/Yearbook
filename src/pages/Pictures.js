import React from "react"
import { graphql, useStaticQuery} from "gatsby"


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
        <span>
          <img 
            key={i} 
            src={row.node.img} 
            width="32.33%" 
            height="300px"
            style={{
              border: "1px solid gray", 
              marginLeft:"1%"
              }}
            alt={row.node.name}  
          />
        </span>
    ))}
    </div>
  )
}
