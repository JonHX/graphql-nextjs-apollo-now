import App from '../components/App'
import AllPeople from '../components/AllPeople'
import React from 'react'
import { withRouter } from 'next/router'

class Main extends React.Component {
  render () {
    return (
      <App>
        <h1>{this.props.router.query.title}</h1>
        <AllPeople />
      </App>
    )
  }
}

export default withRouter(Main)
