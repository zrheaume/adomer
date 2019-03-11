import React, { useState } from "react"

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Navbar from "./Navbar"

function Heading(props) {
   return (
      <>
         <Navbar hideBrandName={true}/>
         <Jumbotron fluid style={{ background: "#ffb247" }}>
            <Container className="text-center">
               <h1>adomer</h1>
               <hr></hr>
               <p>Developer microservice for react application analysis</p>
            </Container>
         </Jumbotron>
      </>
   )
}

export default Heading