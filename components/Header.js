import Link from 'next/link'
import { withPageRouter } from '../lib/withPageRouter'

const Header = ({ router: { pathname } }) => (
  <header>
    <h1>Star Wars Wiki</h1>{pathname}
  </header>
)

export default withPageRouter(Header)
