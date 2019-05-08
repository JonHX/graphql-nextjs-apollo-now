import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { App, ErrorMessage, PersonElement } from '../components'
import { withPageRouter } from '../lib/withPageRouter'

const Person = ({
  router: {
    query: { person: personId },
  },
}) => {
  const getPerson = gql`
    query($personId: ID) {
      person(id: $personId) {
        name
        id
        gender
        height
        birthYear
        hairColor
        species {
          name
          averageLifespan
        }
        homeworld {
          name
        }
        filmConnection {
          films {
            id
            title
          }
        }
        vehicleConnection {
          vehicles {
            id
            name
          }
        }
        starshipConnection {
          starships {
            id
            name
          }
        }
      }
    }
  `
  return (
    <App>
      <Query query={getPerson} variables={{ personId }}>
        {({ loading, error, data: { person } }) => {
          if (error) return <ErrorMessage message="Error loading people." />
          if (loading) return <div>Loading</div>
          return <PersonElement person={person} />
        }}
      </Query>
    </App>
  )
}

export default withPageRouter(Person)
