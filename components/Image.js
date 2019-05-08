import React from 'react'
import { assetsUrl } from '../config'

const Image = ({ id, name }) => (
  <React.Fragment>
    <img
      className="img-responsive"
      src={`${assetsUrl}/${id}.jpg`}
      alt={name}
    />
    <style jsx>
      {`
      img {
        max-width: 250px;
        width: 100%;
      }
    `}
    </style>
  </React.Fragment>
)

export default Image
