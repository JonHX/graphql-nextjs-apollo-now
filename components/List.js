import React, { Component } from 'react'
import Link from 'next/link'
import { Image } from '.'


class List extends Component {
  constructor() {
    super()
    this.toggleItems = this.toggleItems.bind(this)
    this.state = {
      itemsToShow: [],
      showMoreButton: true,
    }
  }

  componentWillMount() {
    if (this.props.listItems.length) {
      this.setState({
        itemsToShow: this.props.listItems.slice(0, this.props.initialShowAmount),
      })
    }
  }

  toggleItems() {
    this.setState({
      itemsToShow: this.props.listItems.slice(0, -1),
      showMoreButton: !this.state.showMoreButton,
    })
  }

  render() {
    return (
      <ul>
        {this.state.itemsToShow.map(item => (
          <li key={item.id}>
            <Link href={`/${this.props.slug}?id=${item.id}`} as={`/${this.props.slug}/${item.id}`}>
              <a>
                <div className="card m-1">
                  <div>
                    {this.props.thumbnail && <Image id={item.id} size={50} name={item.name} /> }
                    <span>
                      {item.name}
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          </li>
        ))}
        { this.state.showMoreButton && (this.state.itemsToShow.length < this.props.listItems.length)
          && (
          <li>
            <div className="card m-1 showMore" onClick={this.toggleItems} onKeyDown={this.toggleItems} role="button" aria-pressed="false">
              Show More
            </div>
          </li>
          )
        }
        <style jsx>
          {`
          ul {
            padding-left: 0px;
          }
          ul li {
            list-style: none;
          }
          ul span {
            padding-left: 15px;
          }
          .card-body {
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            padding: 1.25rem;
          }
          .showMore {
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-weight: bold;
            cursor: pointer;
          }
        `}
        </style>
      </ul>
    )
  }
}

List.defaultProps = {
  initialShowAmount: 10,
  listItems: [],
  thumbnail: false,
}

export default List
