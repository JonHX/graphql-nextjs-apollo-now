import gql from 'graphql-tag'
import { App, CategoryList } from '../components'
import { withPageRouter } from '../lib/withPageRouter'

const Home = () => {
  // List types graphql using alias for consistant data structures
  const getAllPeople = gql`
    {
      parent: allPeople {
        listItems: people {
          id
          name
        }
      }
    }
  `
  const getAllVehicles = gql`
    {
      parent: allVehicles {
        listItems: vehicles {
          id
          name
        }
      }
    }
  `
  return (
    <App>
      <h2>test</h2>
      <div className="row">
        <CategoryList type="person" title="People" query={getAllPeople} />
        <CategoryList type="vehicle" title="Vehicles" query={getAllVehicles} />
      </div>
    </App>
  )
}

export default withPageRouter(Home)
