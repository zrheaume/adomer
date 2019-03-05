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

function Apps(props) {
   return (
      <Col>
         <Card>
            <h1>Cool</h1>
         </Card>
      </Col>
   )
}

function Tree(props) {

   return (
      <Col>
         <Card>
            <h1>Cool</h1>
         </Card>
      </Col>
   )
}

function Statboard(props) {

   return (
      <Col>
         <Card>
            <h1>Cool</h1>
         </Card>
      </Col>
   )
}

function Dashboard(props) {
   
   return (
      <div>
         <Row>
            <Apps />
            <Tree />
         </Row>
         <Row>
            <Statboard />
         </Row>
      </div>
   )
}

function DataWrapper(props) {
   return (
      <div>
         <NavBar user={props.info.username} />
         <Container fluid={true}>
            <Dashboard />
         </Container>
      </div>
   )
}

function Home(props) {

   const [data, setData] = useState(false)

   useEffect(() => {
      if (!data) {
         let session = window.sessionStorage.getItem("SID")
         utils.server.get.details(session).then((res) => {
            setData({ content: res })
         }).catch((err) => {
            throw new Error("FETCHER: 'uh-oh'")
         })
      }
   })

   return (
      <div>
         {data ? <DataWrapper info={data.content} /> : <div />}
      </div>
   )
}

export default Home