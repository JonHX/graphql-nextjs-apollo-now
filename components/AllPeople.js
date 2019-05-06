import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const getAllPeople = gql`{
  allPeople {
    people {
      id,
      name
    }
  }
}
`
export const getAllPeopleVars = {
  skip: 0,
}

export default function AllPeople () {
  return (
    <Query query={getAllPeople} variables={getAllPeopleVars}>
      {({
        loading,
        error,
        data: {
          allPeople
        }
      }) => {
        if (error) return <ErrorMessage message='Error loading people.' />
        if (loading) return <div>Loading</div>
        return (
          <h1>test</h1>
        )
      }}
    </Query>
  )
}
