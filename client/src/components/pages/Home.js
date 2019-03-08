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
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// Import custom components
import NavBar from "../global/Navbar"

const graphConfig = {
   nodeHighlightBehavior: true,
   node: {
      color: 'lightgreen',
      size: 500,
      highlightStrokeColor: 'blue',
      labelProperty: "component"
   },
   link: {
      highlightColor: 'lightblue'
   }
}

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


function MyGraph(props) {
   return <Graph id="c-tree" data={{
      nodes: props.nodes,
      links: props.links
   }} config={graphConfig} />
}


function Tree(props) {
   const [graph, setGraph] = useState({ nodes: [], links: [] })
   useEffect(() => {
      if (graph.nodes.length === 0 && graph.links.length === 0) {
         setGraph({ nodes: props.app.content.tree.nodes, links: props.app.content.tree.links })
      }
   })
   return (
      <Card className={"tree-render-location"}>
         <Card.Header>
            <h5>atk appMap</h5>
         </Card.Header>
         <Card.Body>
            {(graph.nodes.length > 0 && graph.links.length > 0) ? <MyGraph nodes={graph.nodes} links={graph.links} /> : <div /> }
            
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
               <Tree list={props.list} app={props.list[currentApp]} loaded={false} />
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

function Informer(props) {
   return (
      <div>
         <NavBar user={props.info.username} />
         <Jumbotron>
            <h1 className="text-center"> You're almost there! </h1>
            <h3 className="text-center"> Install <a href="https://www.npmjs.com/package/adomer-toolkit">adomer toolkit</a> from npm and add some apps! </h3>
         </Jumbotron>
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
         {data ? ((data.content.apps.length > 0) ? (<DataWrapper info={data.content} />) : (<Informer info={data.content} />)) : <div />}
      </div>
   )
}

export default Home
