import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const authorQuery = gql`{
  allPeople {
    people {
      id,
      name
    }
  }
}
`
export const authorQueryVars = {
  skip: 0,
}

export default function AuthorList () {
  return (
    <Query query={authorQuery} variables={authorQueryVars}>
      {({ loading, error, data}) => {
        if (error) return <ErrorMessage message='Error loading authors.' />
        if (loading) return <div>Loading</div>
        console.log(data)
        return (
          <h1>test</h1>
        )
      }}
    </Query>
  )
}

function loadMoreAuthors (author, fetchMore) {
  fetchMore({
    variables: {
      skip: author.length
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) {
        return previousResult
      }
      return Object.assign({}, previousResult, {
        // Append the new results to the old one
        author: [...previousResult.author, ...fetchMoreResult.author]
      })
    }
  })
}
