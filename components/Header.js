import Link from 'next/link'
import { withPageRouter } from '../lib/withPageRouter'

const Header = ({ router: { pathname } }) => (
  <header>
    <h1>Star Wars Wiki</h1>
    { pathname !== '/' && (
      <Link
        href={'/'}
        as={'/'}>
        <a>&#x3c; Back</a>
      </Link>
    )}
  </header>
)

export default withPageRouter(Header)
