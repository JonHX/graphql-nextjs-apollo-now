import App from '../components/App'
import React from 'react'
import { withPageRouter } from '../lib/withPageRouter'

class Person extends React.Component {
  render () {
    return (
      <App>
        <h1>{this.props.router.query.person}</h1>
      </App>
    )
  }
}

export default withPageRouter(Person)
