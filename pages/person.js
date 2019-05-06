import App from '../components/App'
import AllPeople from '../components/allPeople'
import React from 'react'
import { withPageRouter } from '../lib/withPageRouter'

class Person extends React.Component {
  render () {
    return (
      <App>
        <h1>{this.props.router.query.person}</h1>
        <AllPeople />
      </App>
    )
  }
}

Person.getInitialProps = async ({ query }) => {
  return { id: query.id }
}

export default withPageRouter(Person)
