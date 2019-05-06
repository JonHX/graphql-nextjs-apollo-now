import App from '../components/App'
import AllPeople from '../components/allPeople'
import React from 'react'
import { withRouter } from 'next/router'

class Main extends React.Component {
  render () {
    console.log(this.props)
    return (
      <App>
        <h1>{this.props.router.query.title}</h1>
        <AllPeople />
      </App>
    )
  }
}

Main.getInitialProps = async ({ query }) => {
  return { name: query.name }
}

export default withRouter(Main)
