// import React, { useState } from "react";
// import { Link } from "gatsby"
// import styled from "styled-components"
// import styling from "../content/styling/styles.css";
// import { Scrambler, Cycler } from "react-text-scrambler";

// const LandingPage = styled.div`
//   color: white;
//   .top{
//     text-align:center;
//     h1{
//       text-transform:uppercase;
//       position:absolute;
//       top:30px;
//       left:50%;
//       transform: translate(-50%, 0%);
//     }
//     .welcome{
//       font-size:110px;
//       color:#202529;
//       font-weight:bold;
//       letter-spacing: 10px;
//       text-shadow: 3px 3px 20px white, -2px 1px 30px black;
//       font-family: 'Krona One', sans-serif;
    
//     }
//     .to{
//       color:rgba(235, 25, 110, 1);
//       top:130px;
//       font-size:100px;
//     }
//   }
//   .container{
//     margin-top: 15%; 
//     display:flex;
//   }
//   .left{
//     width: 50%;
//     padding-left:3%;
//     h1{
//       text-transform: uppercase;
//       font-size:80px;
//       span{
//         color:rgba(235, 25, 110, 1);
//         font-weight:900;
//       }
//     } 
//     a{
//       text-decoration:none;
//       text-transform:uppercase;
//       background-color:rgba(235, 25, 110, 1);
//       border:4px solid rgba(235, 25, 110, 1);
//       border-radius:8px;
//       font-size:25px;
//       padding: 1% 5%;
//       transition:all 0.3s ease-in-out;
//       &:hover{
//         background-color:transparent;
//         color:white;
//         transition:all 0.3s ease-in-out;
//       }
//     }
//   }
//   .right{
//     width: 50%;
//   }
// `;



// export default function Landing() {
//   return(
//     <LandingPage>
//       <div className="top">
//         <h1 className="welcome">Welcome</h1>
//         <h1 className="to">to</h1>
//       </div>
//       <div className="container">
//         <div className="left">
//           <h1 className="fontBN">
//             YearBook for <br/>
//             <span>
//             <Scrambler
//               children=""
//               text="Final-Year" 
//               characters="+/%!?<)~"
//               renderIn="4000"
//             />
//             </span>
//           </h1>
//           <Link to="/layout/">
//             Visit YearBook 
//           </Link>
//         </div>
//         <div className="right">
//           Hello
//         </div>
//       </div>
//     </LandingPage>
//   );
// }