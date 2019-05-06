import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'next/link'

export default () => {
  return (
    <Query query={getAllPeople}>
      {({
        loading,
        error,
        data: {
          allPeople: {
            people
          }
        }
      }) => {
        if (error) return <ErrorMessage message='Error loading people.' />
        if (loading) return <div>Loading</div>
        return (
          <ul>
          {createList(people)}
          </ul>
        )
      }}
    </Query>
  )
}

export const createList = (people) => people.map( (person) => {
  return (
    <li key={person.id}>
      <Link
        href={`/person?id=${person.id}`}
        as={`/person/${person.id}`}
        >
        <a>{person.name}</a>
      </Link>
    </li>
  )
})

export const getAllPeople = gql`{
  allPeople {
    people {
      id,
      name
    }
  }
}
`
