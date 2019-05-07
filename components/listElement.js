import { Query } from 'react-apollo'
import { List } from './'

const ListElement = (props) => {
  return (
    <Query query={props.query}>
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
            <h3>{props.title}</h3>
            <List listItems={listItems} slug={props.type} />
          </div>
        )
      }}
    </Query>
  )
}

export default ListElement
