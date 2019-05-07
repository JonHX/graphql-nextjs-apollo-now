const Image = ({ id, name }) => {
  const cdn = 'https://d2015p4znl61y4.cloudfront.net'
  return (
    <React.Fragment>
      <img className='img-responsive' src={`${cdn}/${id}.jpg`} alt={`Picture of ${name}`} />
      <style jsx>{`
        img {
          max-width: 250px;
          width: 100%;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Image
