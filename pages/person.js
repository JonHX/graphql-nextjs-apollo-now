import App from '../components/App'
import AllPeople from '../components/allPeople'
import React from 'react'
import { withRouter } from 'next/router'

class Person extends React.Component {
  render () {
    console.log(this.props)
    return (
      <App>
        <h1>{this.props.id}</h1>
        <AllPeople />
      </App>
    )
  }
}

Person.getInitialProps = async ({ query }) => {
  return { id: query.id }
}

export default withRouter(Person)
