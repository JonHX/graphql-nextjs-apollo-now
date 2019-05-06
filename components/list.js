import Link from 'next/link'

export default ({ listItems, slug }) => (
    <ul>
      { listItems.map( (item) => {
        return (
          <li key={item.id}>
            <Link
              href={`/${slug}?id=${item.id}`}
              as={`/${slug}/${item.id}`}
              >
              <a>{item.name}</a>
            </Link>
          </li>
        )})
    }
    </ul>
)
