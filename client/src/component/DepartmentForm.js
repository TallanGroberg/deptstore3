import React from 'react'
import { Form, Header, Button, Container, } from 'semantic-ui-react'
import axios from 'axios'

class DepartmentForm extends React.Component {
  state = { name: '', }

  componentDidMount() {
    const { match: { params: { id } } } = this.props
    if (id)
  }

  render() {
    return (
      <>



      </>
    )
  }
}

export default DepartmentForm;
