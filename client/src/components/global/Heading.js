import React from "react"

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

function Heading(props) {
   return (
      <Jumbotron fluid style={{background : "#ffb247"}}>
         <Container className="text-center">
            <h1>adomer online</h1>
            <p> Connect your applications to adomer-toolkit diagnostics </p>
         </Container>
      </Jumbotron>
   )
}

export default Heading