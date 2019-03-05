import React from "react"
import reactDOM from "react-dom"
import { useState, useEffect } from "react"
import utils from "../../utils"

// Import react-bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/ListGroup"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// Import vis-react
import Graph from "vis-react"

// Import custom components
import NavBar from "../global/Navbar"

function Apps(props) {

   return (
      <Col lg={4}>
         <Card>
            <Card.Header>
               <h3> My Apps </h3>
            </Card.Header>
            {/* <h1>Apps</h1> */}
            <Card.Body>
               <ListGroup>
                  {props.list.map((elem, ind) => {
                     let placer = ind
                     let handler = () => {
                        // console.log(ind)
                        props.toggleApp(ind)
                     }
                     return (

                        <ListGroup.Item action
                           // href={`#`}
                           key={ind}
                           id={`app-${ind}`}
                           onClick={handler}>
                           <strong>{elem.name}</strong>
                        </ListGroup.Item>

                     )
                  })}
               </ListGroup>
            </Card.Body>
         </Card>
      </Col>
   )
}

function Tree(props) {

   // const [thisApp, setThisApp] = useState(false)
   console.log(props.current)
   let thisApp = props.list[props.current]
   console.log(thisApp)

   return (
      <Col lg={8}>
         <Card className={"tree-render-location"}>
            <Card.Header>
               <h3>atk appMap</h3>
            </Card.Header>
         </Card>
      </Col>
   )
}

function Statboard(props) {

   let stats = props.app.stats
   return (
      <Col>
         <Card>
            <Card.Header>
            <h3>appStats</h3>
            </Card.Header>
            <Card.Body>
               <h4> User Defined components </h4>
               <hr />
               <strong> Function Components </strong> {stats.ΣFu}<br />
               <strong> Class Components </strong> {stats.ΣCl}<br />
               <br />
               <strong> Ratio </strong> {stats.μFuCl}<br />
               <hr />
               <strong> Stateful Components </strong> {stats.ΣSt}<br />
               <strong> Stateless Components </strong> {stats.ΣSl}<br />
               <br />
               <strong> Ratio </strong> {stats.μStSl}<br />

            </Card.Body>
         </Card>
      </Col>
   )
}

function Dashboard(props) {

   const [currentApp, setCurrentApp] = useState(false)

   return (
      <div>
         <Row>
            <Apps list={props.list} toggleApp={setCurrentApp} />
            <Tree list={props.list} app={currentApp} />
         </Row>
         <Row>
            <Statboard app={currentApp}/>
         </Row>
      </div>
   )
}

function DataWrapper(props) {
   return (
      <div>
         <NavBar user={props.info.username} />
         <Container fluid={true}>
            <Dashboard list={props.info.apps} />
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