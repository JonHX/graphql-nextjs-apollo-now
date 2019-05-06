import App from '../components/App'
import { ListElement } from '../components/lists/'
import React from 'react'
import { withPageRouter } from '../lib/withPageRouter'

class Main extends React.Component {
  render () {
    return (
      <App className='container'>
        <h1>{this.props.router.query.title}</h1>
        <div className='row'>
          <ListElement type='people' title='People' />
          <ListElement type='vehicle' title='Vehicles' />
        </div>
      </App>
    )
  }
}

Main.getInitialProps = async ({ query }) => {
  return { name: query.name }
}

export default withPageRouter(Main)
