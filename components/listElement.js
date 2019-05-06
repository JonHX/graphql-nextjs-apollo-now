import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import List from './list'

export default (props) => {
  const gqlQuery = props.type === 'people' ? getAllPeople : getAllVehicles
  return (
    <Query query={gqlQuery}>
      {({
        loading,
        error,
        data: {
          parent: {
            listItems
          }
        }
      }) => {
        if (error) return <ErrorMessage message='Error loading people.' />
        if (loading) return <div>Loading</div>
        console.log(listItems)
        return (
          <div className='col-md-6'>
            <h3>{props.title}</h3>
            <List listItems={listItems} slug={props.type} />
          </div>
        )
      }}
    </Query>
  )
}

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
