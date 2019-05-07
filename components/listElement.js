import { Query } from 'react-apollo'
import { List } from './'

const ListElement = ({ query, title, type}) => {
  return (
    <Query query={query}>
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
        return (
          <div className='col-md-6'>
            <h3>{title}</h3>
            <List listItems={listItems} slug={type} />
          </div>
        )
      }}
    </Query>
  )
}

export default ListElement
