import React from 'react';
import { Header, Card, Container, } from "semantic-ui-react";
import axios from 'axios'

import DepartmentForm from './DepartmentForm'

//todo show method
// get data from database

class Departments extends React.Component {
  state = { departments: [], }

  componentDidMount() {
    axios.get("api/departments")
    .then( res => {
      this.setState({ departments: res.data})
    })
      .catch( err => {
        console.log(err.response)
    })
  }

  showDept = () => {
    const { departments, } = this.state;

    if ( departments.length <= 0)
      return <h2> No Departments </h2>
    return departments.map( dept => (
      <Card>
        <Card.Content>
          <Card.Header key={dept.id}> { dept.name }: </Card.Header>

        </Card.Content>
      </Card>
   ))
  };





  render() {
    return (

      <>
      <Header as="h1">Departments</Header>
      <DepartmentForm />

      <Container style={{ marginBottom: "25px"}}>
        <Card.Group>
          { this.showDept()}
        </Card.Group>
      </Container>



      </>
    )
  }
}

export default Departments;
