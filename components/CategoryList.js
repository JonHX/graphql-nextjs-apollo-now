import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { ErrorMessage, List } from '.'

const CategoryList = ({ query, title, type }) => (
  <Query query={query}>
    {({
      loading,
      error,
      data: {
        parent: { listItems = null },
      },
    }) => {
      if (!listItems || error) return <ErrorMessage message="No items found." />
      if (loading) return <div>Loading</div>
      return (
        <div className="col-md-6">
          <h3>{title}</h3>
          <List listItems={listItems} slug={type} thumbnail />
        </div>
      )
    }}
  </Query>
)

CategoryList.propTypes = {
  query: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default CategoryList
