import { App, ErrorMessage, PersonElement } from '../components/'
import { Query } from 'react-apollo'
import React from 'react'
import gql from 'graphql-tag'
import { withPageRouter } from '../lib/withPageRouter'

class Person extends React.Component {
  render () {
    const { router: { query: { person: personId } } } = this.props
    return (
      <App>
        <Query query={getPerson} variables={{ personId }}>
          {({
            loading,
            error,
            data: {
              person
            }
          }) => {
            if (error) return <ErrorMessage message='Error loading people.' />
            if (loading) return <div>Loading</div>
            return (
              <PersonElement person={person} />
            )
          }}
        </Query>
      </App>
    )
  }
}

export default withPageRouter(Person)

export const getPerson = gql`query($personId: ID){
  person(id: $personId) {
    name
    created
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
    vehicleConnection{
      vehicles {
        id
        name
      }
    }
    starshipConnection{
      starships{
        name
      }
    }
  }
}`
