// Import react / functional react items
import React from "react"
import { useState } from "react"

// Import utils
import utils from "../../utils"

// Import React-Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// Import custom components
import Heading from "../global/Heading"

function SignupForm(props) {
   const [status, setStatus] = useState({
      submitted: false,
      succeeded: false,
      errors: false
   })

   let handleFormSubmit = e => {
      status.submitted = true
      e.preventDefault()
      e.persist()
      let body = {
         email: e.target[0].value,
         username: e.target[1].value,
         secret: e.target[2].value,
         secretConf: e.target[3].value
      }
      utils.server.post.signup(body)
         .then(data => {
            if (data) {
               console.log(data)
               if (data["_id"]) {
                  console.log("Success!")
                  status.succeeded = true
               } else if (data["errors"]) {
                  console.log("Errors!")
                  status.succeeded = false
               } else if (data["name"]) {
                  console.log("Different Errors!")
                  status.succeeded = false
               }
            }
         }).catch(err => {
            console.error(err)
         })
   }

   return (
      <Form onSubmit={handleFormSubmit}>
         <h2 className="text-center"><strong>Sign Up</strong></h2>
         <hr />
         <Form.Group controlId="singup_email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
               We'll never share your email with anyone else. </Form.Text>
         </Form.Group>
         <Form.Group controlId="singup_username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username" />
         </Form.Group>
         <Form.Group controlId="singup_secret">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
         </Form.Group>
         <Form.Group controlId="singup_secretConf">
            <Form.Label>Password (Confirm)</Form.Label>
            <Form.Control type="password" placeholder="Password" />
         </Form.Group>
         <Button variant="primary" type="submit"> Submit </Button>
      </Form>
   )
}

function LoginForm(props) {
   const [status, setStatus] = useState({
      submitted: false,
      succeeded: false,
      errors: false
   })
   let handleFormSubmit = e => {
      status.submitted = true
      e.preventDefault()
      e.persist()
      let body = {
         username: e.target[0].value,
         secret: e.target[1].value
      }
      utils.server.post.login(body)
         .then((user) => {
            console.log(user)
         })
         .catch((err) => {
            console.error(err)
         })
   }

   return (
      <Form onSubmit={handleFormSubmit}>
         <h2 className="text-center"><strong>Log In</strong></h2>
         <hr />
         <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username" />
         </Form.Group>
         <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
         </Form.Group>
         <Button variant="primary" type="submit"> Submit </Button>
      </Form>
   )
}

function FormContainer(props) {

   return (
      <Card style={{ width: "70%", margin: "auto" }}>
         <Card.Header>
            <div className="text-center">
               <span style={{ marginRight: "15px" }}>Login</span><Button onClick={props.toggle}> {props.mode ? (<i className="fas fa-arrow-circle-right"></i>) : (<i className="fas fa-arrow-circle-left"></i>)}</Button><span style={{ marginLeft: "15px" }}>Signup</span>
            </div>
         </Card.Header>
         <Card.Body>
            {props.mode ? <SignupForm toggler={props.toggle} /> : <LoginForm toggler={props.toggle} />}
         </Card.Body>
      </Card>
   )
}

function DataWrapper(props) {
   // Set initial "view" state variable. This will allow the user to
   // switch between "login" view and "signup" by toggling the "view"
   // between 0 and 1
   const [view, setView] = useState(0)

   function toggleMode() {
      if (view === 0) {
         setView(1)
      } else {
         setView(0)
      }
   }

   return (
      <Row>
         <Col>
            <FormContainer mode={view} toggle={toggleMode} />
         </Col>
      </Row>
   )
}

function Landing(props) {
   return (
      <div>
         <Heading />
         <Container>
            <DataWrapper />
         </Container>
      </div>
   )
}

export default Landing