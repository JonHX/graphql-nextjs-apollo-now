import Link from 'next/link'

const List = ({ listItems, slug }) => (
  <ul>
    {listItems.map(item => (
      <li key={item.id}>
        <Link href={`/${slug}?id=${item.id}`} as={`/${slug}/${item.id}`}>
          <a>{item.name}</a>
        </Link>
      </li>
    ))}
  </ul>
)

export default List
