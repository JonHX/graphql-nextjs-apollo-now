import PropTypes from 'prop-types'
import Link from 'next/link'
import { withPageRouter } from '../lib/withPageRouter'

const Header = ({ router: { pathname } }) => (
  <header className="container p-0">
    <h1 className="text-center m-3">
      Star Wars Wiki
      <img
        className="img-responsive"
        width="50"
        alt="Green Lightsaber"
        src="https://emojis.slackmojis.com/emojis/images/1482947228/1532/lightsaber.png"
      />
    </h1>
    {pathname !== '/' && pathname !== '/index' && (
      <Link href="/index" as="/">
        <a>&#x3c; Back</a>
      </Link>
    )}
  </header>
)

Header.propTypes = {
  router: PropTypes.object.isRequired,
}

export default withPageRouter(Header)
