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
   "automaticRearrangeAfterDropNode": true,
   "collapsible": false,
   "directed": true,
   "focusAnimationDuration": 0.25,
   "focusZoom": 1,
   "height": 600,
   "highlightDegree": 2,
   "highlightOpacity": 1,
   "linkHighlightBehavior": true,
   "maxZoom": 8,
   "minZoom": 0.05,
   "nodeHighlightBehavior": true,
   "panAndZoom": true,
   "staticGraph": false,
   "width": 800,
   "d3": {
      "alphaTarget": 0.1,
      "gravity": -200,
      "linkLength": 125,
      "linkStrength": 1
   },
   "node": {
      "color": "#ffb247",
      "fontColor": "black",
      "fontSize": 8,
      "fontWeight": "normal",
      "highlightColor": "#ffe500",
      "highlightFontSize": 8,
      "highlightFontWeight": "normal",
      "highlightStrokeColor": "SAME",
      "highlightStrokeWidth": "SAME",
      "labelProperty": "component",
      "mouseCursor": "pointer",
      "opacity": 1,
      "renderLabel": true,
      "size": 400,
      "strokeColor": "green",
      "strokeWidth": 1.5,
      "svg": "",
      "symbolType": "circle"
   },
   "link": {
      "color": "#d3d3d3",
      "fontColor": "black",
      "fontSize": 8,
      "fontWeight": "normal",
      "highlightColor": "cyan",
      "highlightFontSize": 8,
      "highlightFontWeight": "normal",
      "labelProperty": "label",
      "mouseCursor": "pointer",
      "opacity": 1,
      "renderLabel": false,
      "semanticStrokeWidth": false,
      "strokeWidth": 1.5
   }
}

const rounded = num => `0.${Math.round(num * 100)}`


function HookedApp(props) {
   return (
      <ListGroup.Item action key={props.ind} id={`app-${props.ind}`} onClick={props.handler}>
         <div style={{display: "flex", justifyContent:"space-between"}}>
            <strong>{props.elem.name}</strong>
            <em style={{fontSize: "8pt", color:"lightgrey"}}> Added 12/22/2018 </em>
         </div>
      </ListGroup.Item>

   )
}

// "My Apps" display component
function Apps(props) {
   return (
      <Card style={{width: "97%", margin: "auto"}}>
         {/* <Card.Header>
            <h5> My Apps </h5>
         </Card.Header> */}
         <Card.Body>
            <ListGroup>
               {props.list.map((elem, n) => {
                  let placer = n
                  let handler = () => {
                     // console.log(ind)
                     props.toggleApp(placer)
                  }
                  return <HookedApp ind={placer} handler={handler} elem={elem}/>
                  // return (

                  //    <ListGroup.Item action key={ind} id={`app-${ind}`} onClick={handler}>
                  //       <div>
                  //          <strong>{elem.name}</strong>
                  //          <em></em>
                  //       </div>
                  //    </ListGroup.Item>

                  // )
               })}
            </ListGroup>
         </Card.Body>
      </Card>

   )
}

// Tree diagram component
function Tree(props) {
   // Define MyGraph component in the context of the Tree component
   function MyGraph(props) {
      return <div><Graph id="c-tree" data={{
         nodes: props.nodes,
         links: props.links
      }} config={graphConfig} /></div>
   }

   return (
      <Card className={"tree-render-location"}>
         <Card.Header>
            <h5>My Components</h5>
         </Card.Header>
         <Card.Body>
            {(props.nodes.length > 0 && props.links.length > 0) ? <MyGraph nodes={props.nodes} links={props.links} /> : <div />}
         </Card.Body>
      </Card>

   )
}

// Stat component for conditionally rendering each stat
function Stat(props) {

   let containerBG = (props.type === "ratio") ? "lightgrey" : ((props.type === "special") ? "#ffb247" : "#f7f4ed")
   let conRadTop = `${(props.type === "ratio") ? "0" : "5"}px`
   let conRadBot = `5px`

   return (
      <div style={
         {
            background: containerBG,
            width: "100%",
            paddingLeft: "4px",
            paddingRight: "4px",
            paddingTop: "2px",
            paddingBottom: "2px",
            borderTopLeftRadius: conRadTop,
            borderTopRightRadius: conRadTop,
            borderBottomLeftRadius: conRadBot,
            borderBottomRightRadius: conRadBot
         }}>


         <div style={{ width: "100%", marginBottom: "3px", marginTop: "3px", display: "flex", flex: 1, flexDirection: "row", alignItems: "space-between", justifyContent: "space-between" }}>
            <div style={{ display: "inline-flex", justifyContent: "left", paddingLeft: "4px", paddingRight: "4px", paddingTop: "2px", paddingBottom: "2px" }}>
               <span> {props.label} </span>
            </div>
            <div style={{ width: "20%", display: "inline-flex", border: `solid 2px ${(props.type === "ratio") ? "darkgrey" : ((props.type === "special") ? "#968d78" : "lightgrey")}`, borderRadius: "6px", paddingLeft: "4px", paddingRight: "4px", paddingTop: "2px", paddingBottom: "2px", justifyContent: "center" }}>
               <span style={{ display: "inline-flex" }}>{props.data}</span>
            </div>
         </div>
      </div>
   )
}

// Stats display component
function Statboard(props) {
   let StatTxt = <div />
   if (props.app.content.stats) {
      let stats = props.app.content.stats
      StatTxt = (<div>
         <Container fluid={true}>
            <Row>
               <Col>
                  <Stat label="Total" data={props.app.content.extracted.length} type="special" />
               </Col>
               <span style={{ width: "2px", background: "lightgrey", height: "200px" }} ></span>
               <Col>
                  <Stat label="Function Definition" data={stats.ΣFu} />
                  <Stat label="Class Definition" data={stats.ΣFu} />
                  <Stat label="Ratio" data={(stats.μFuCl === "all") ? stats.μFuCl : rounded(stats.μFuCl)} type="ratio" />

                  <hr />
                  <Stat label="Stateful" data={stats.ΣSt} />
                  <Stat label="Stateless" data={stats.ΣSl} />
                  <Stat label="Ratio" data={(stats.μStSl === "all") ? stats.μStSl : rounded(stats.μStSl)} type="ratio" />
               </Col>
            </Row>
         </Container>
      </div>
      )
   }

   return (
      <Card style={{width: "97%", margin: "auto"}}>
         <Card.Body>
            {StatTxt}
         </Card.Body>
      </Card>
   )
}

// Dashboard component
function Dashboard(props) {

   const [currentApp, setCurrentApp] = useState(0)

   return (
      <div>
         <Row>
            <Col>
               <Card>
                  <Card.Header> Dashboard </Card.Header>
                  <Apps list={props.list} toggleApp={setCurrentApp} />
                  <Statboard app={props.list[currentApp]} />
               </Card>
            </Col>
            <Col>
               <Tree list={props.list} nodes={props.list[currentApp].content.tree.nodes} links={props.list[currentApp].content.tree.links} loaded={false} />
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
