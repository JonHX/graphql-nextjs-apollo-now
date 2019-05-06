import App from '../components/App'
import { People, Vehicles } from '../components/lists/'
import React from 'react'
import { withPageRouter } from '../lib/withPageRouter'

class Main extends React.Component {
  render () {
    return (
      <App>
        <h1>{this.props.router.query.title}</h1>
        <People />
        <Vehicles />
      </App>
    )
  }
}

Main.getInitialProps = async ({ query }) => {
  return { name: query.name }
}

export default withPageRouter(Main)
