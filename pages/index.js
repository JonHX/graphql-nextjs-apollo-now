import { App, ListElement} from '../components/'
import React from 'react'
import gql from 'graphql-tag'
import { withPageRouter } from '../lib/withPageRouter'

class Home extends React.Component {
  render () {
    return (
      <App className='container'>
        <h1>{this.props.router.query.title}</h1>
        <div className='row'>
          <ListElement type='person' title='People' query={getAllPeople} />
          <ListElement type='vehicle' title='Vehicles' query={getAllVehicles} />
        </div>
      </App>
    )
  }
}

export default withPageRouter(Home)

// List types graphql using alias for consistant data structures
export const getAllPeople = gql`{
  parent: allPeople {
    listItems: people {
      id,
      name
    }
  }
}
`

export const getAllVehicles = gql`{
  parent: allVehicles {
    listItems: vehicles {
      id
      name
    }
  }
}`
