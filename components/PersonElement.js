const PersonElement = ({ person: { name, height, birthYear } }) => {
  return (
    <div>
    <h2>{name}</h2>
    <h2>{birthYear}</h2>
    <h2>{height}</h2>
      <style jsx global>{`
      /* styles here */
      `}</style>
    </div>
  )
}

export default PersonElement
