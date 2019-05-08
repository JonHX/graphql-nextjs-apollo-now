import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { App, ErrorMessage, VehicleElement } from '../components'
import { withPageRouter } from '../lib/withPageRouter'

const Vehicle = ({
  router: {
    query: { vehicle: vehicleId },
  },
}) => {
  const getVehicle = gql`
    query($vehicleId: ID) {
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
    }
  `
  return (
    <App>
      <Query query={getVehicle} variables={{ vehicleId }}>
        {({ loading, error, data: { vehicle } }) => {
          console.log(JSON.stringify(vehicle))
          if (error) return <ErrorMessage message="Error loading Vehicle." />
          if (loading) return <div>Loading</div>
          return <VehicleElement vehicle={vehicle} />
        }}
      </Query>
    </App>
  )
}

export default withPageRouter(Vehicle)
