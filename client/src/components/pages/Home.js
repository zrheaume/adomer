import React from "react"
import { useState, useEffect } from "react"
import utils from "../../utils"

// Import graphing lib
import { Graph } from "react-d3-graph"

// Import react-bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/ListGroup"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// Import custom components
import NavBar from "../global/Navbar"

function Apps(props) {

   return (

      <Card>
         <Card.Header>
            <h5> My Apps </h5>
         </Card.Header>
         {/* <h1>Apps</h1> */}
         <Card.Body>
            <ListGroup>
               {props.list.map((elem, ind) => {
                  let placer = ind
                  let handler = () => {
                     // console.log(ind)
                     props.toggleApp(placer)
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

   )
}

function Tree(props) {

   let MyGraph = Graph

   let myConfig = {
      nodeHighlightBehavior: true,
      node: {
         color: 'lightgreen',
         size: 300,
         highlightStrokeColor: 'blue',
         labelProperty: "component"
      },
      link: {
         highlightColor: 'lightblue'
      }
   }


   return (

      <Card className={"tree-render-location"}>
         <Card.Header>
            <h5>atk appMap</h5>
         </Card.Header>
         <Card.Body>
            <MyGraph id="c-tree" data={{
               nodes: props.app.content.tree.nodes,
               links: props.app.content.tree.links
               // links: props.app.content.extracted.map((comp, n) => {
               //    if (n > 0) {
               //       return ({ source: `${props.app.content.extracted[n - 1].name}[${n - 1}]`, target: `${props.app.content.extracted[n].name}[${n}]` })
               //    }
               // })
            }} config={myConfig} />
         </Card.Body>
      </Card>

   )
}

function Statboard(props) {

   let StatTxt = <div />
   if (props.app.content.stats) {
      let stats = props.app.content.stats
      StatTxt = (<div>
         <h5> User Defined components </h5>
         <hr />
         <Container fluid={true}>
            <Row>
               <Col>
                  <span> Components => </span> {props.app.content.extracted.length}
               </Col>
               <Col>
                  <span> Function Components =></span> {stats.ΣFu}<br />
                  <span> Class Components =></span> {stats.ΣCl}<br />
                  <br />
                  <span> Ratio =></span> {stats.μFuCl}<br />
                  <hr />
                  <span> Stateful Components =></span> {stats.ΣSt}<br />
                  <span> Stateless Components =></span> {stats.ΣSl}<br />
                  <br />
                  <span> Ratio =></span> {stats.μStSl}<br />
               </Col>
            </Row>
         </Container>
      </div>
      )
   }

   return (

      <Card>
         <Card.Header>
            <h5>appStats</h5>
         </Card.Header>
         <Card.Body>
            {StatTxt}
         </Card.Body>
      </Card>
   )
}

function Dashboard(props) {

   const [currentApp, setCurrentApp] = useState(0)

   return (
      <div>
         <Row>
            <Col>
               <Apps list={props.list} toggleApp={setCurrentApp} />
               <Statboard app={props.list[currentApp]} />

            </Col>
            <Col>
               <Tree list={props.list} app={props.list[currentApp]} />

            </Col>
         </Row>
         <Row>
         </Row>
      </div>
   )
}

function DataWrapper(props) {
   return (
      <div>
         <NavBar user={props.info.username} />
         <br />
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
            console.error("COULD NOT GET session")
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
