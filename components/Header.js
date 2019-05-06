import Link from 'next/link'
import { withRouter } from 'next/router'

const Header = ({ router: { pathname } }) => (
  <header>
    <h1>Star Wars Wiki</h1>
  </header>
)

export default withRouter(Header)
