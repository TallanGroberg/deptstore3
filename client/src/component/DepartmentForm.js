import React from 'react'
import { Form, Header, Button, Container, } from 'semantic-ui-react'
import axios from 'axios'

class DepartmentForm extends React.Component {
  defaultValues = { name: '', }
  state = { ...this.defaultValues }

  //find out why it doesnt grab id's

  // componentDidMount() {

  //    const { match: { params: { id } } } = this.props
  //    if (id)
  //     axios.get(`/api/departments/${id}/`)
  //       .then(res => {
  //         this.setState({ name: res.data })
  //       })
  //       .catch(err => {
  //         console.log(err.response)
  //       })
  // }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value, })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const department = { ...this.state}
    axios.post("api/departments", { ...this.state, })
      .then( res => {
        this.setState({ ...this.defaultValues })
      })



  }


  render() {
    const { name, } = this.state
    return (
      <>
      <Container style={{ marginBottom: "25px"}}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Add A New Department"
            required
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
             />
           <Button inverted style={{ marginTop: "10px" ,}} >Submit</Button>

         </Form>
      </Container>


      </>
    )
  }
}

export default DepartmentForm;
