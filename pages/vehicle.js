import { App, ErrorMessage, VehicleElement } from '../components/'
import { Query } from 'react-apollo'
import React from 'react'
import gql from 'graphql-tag'
import { withPageRouter } from '../lib/withPageRouter'

class Vehicle extends React.Component {
  render () {
    const { router: { query: { vehicle: vehicleId } } } = this.props
    return (
      <App>
        <Query query={getVehicle} variables={{ vehicleId }}>
          {({
            loading,
            error,
            data: {
              vehicle
            }
          }) => {
            console.log(vehicle)
            if (error) return <ErrorMessage message='Error loading Vehicle.' />
            if (loading) return <div>Loading</div>
            return (
              <VehicleElement vehicle={vehicle} />
            )
          }}
        </Query>
      </App>
    )
  }
}

export default withPageRouter(Vehicle)

export const getVehicle = gql`query($vehicleId: ID){
  vehicle(id: $vehicleId) {
    name
    passengers
    vehicleClass
    manufacturers
    maxAtmospheringSpeed
    id
    model
    filmConnection {
      films {
        id
       title
      }
    }
    pilotConnection {
      pilots {
        name
        id
      }
    }
    crew
    cargoCapacity
  }
}`
