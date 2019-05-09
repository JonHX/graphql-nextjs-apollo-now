import React from 'react'
import { assetsUrl } from '../config'

const Image = ({ id, name, size }) => {
  const src = size ? `${assetsUrl}/${size}x${size}/${id}.jpg` : `${assetsUrl}/${id}.jpg`
  return (
    <React.Fragment>
      <img
        className="img-responsive"
        src={src}
        alt={name}
      />
      <style jsx>
        {`
        img {
          max-width: 100%;
          min-height: 50px;
          min-width 50px;
        }
      `}
      </style>
    </React.Fragment>
  )
}

export default Image
