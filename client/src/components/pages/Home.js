import React from "react"
import { useState, useEffect } from "react"
import utils from "../../utils"

// Import react-bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// Import custom components
import NavBar from "../global/Navbar"


function DataWrapper(props) {
   return (
      <div>
         <NavBar />
         <Container>

         </Container>
      </div>
   )
}

function Home(props) {
   
   const [data, setData] = useState(false)

   useEffect(() => {
      let session = window.sessionStorage.getItem("session")
      utils.server.get.details(session).then((res) => {
         setData(res)
      })
   })

   return (
      <div>
         { data ? <DataWrapper /> : <div />  }
      </div>
   )
}

export default Home