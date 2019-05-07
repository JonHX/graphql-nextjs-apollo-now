import Link from 'next/link'
import { Image, List } from './'

const PersonElement = ({
  person: {
    birthYear,
    gender,
    hairColor,
    height,
    homeworld: {
      name: homeWorldName
    },
    id,
    name,
    species: {
      name: speciesName
    },
    filmConnection: {
      films
    },
    starshipConnection: {
      starships
    },
    vehicleConnection: {
      vehicles
    }
  }
}) => {
  return (
    <div className='row'>
      <div className='col-md-4 col-lg-3 p-3 text-center'>
        <Image id={id} name={name} />
      </div>
      <div className='col-md-8 col-sm-12 col-lg-4 p-3 row'>
        <div className='col-6 col-sm-6 col-lg-12'>
          <strong>Name:</strong>
          <h4>{name}</h4>
          <strong>Gender:</strong>
          <h4>{gender}</h4>
          <strong>Species:</strong>
          <h4>{speciesName}</h4>
        </div>
        <div className='col-6 col-sm-6 col-lg-12'>
          <strong>Homeworld:</strong>
          <h4>{homeWorldName}</h4>
          <strong>Height:</strong>
          <h4>{height}cm</h4>
          <strong>Hair Color:</strong>
          <h4>{hairColor}</h4>
        </div>
      </div>
      <div className='col-md-12 col-lg-4 p-3'>
        <h3>Related</h3>
        <div>
          <strong>Vehicles</strong>
          { vehicles.length ?
            <List listItems={vehicles} slug='vehicle' />
            :
            <p>This character has related no vehicles.</p>
          }
        </div>
        <div>
          <strong>Starships</strong>
          { starships.length ?
            <ul>
              {starships.map((item)=>{
                return (
                  <li key={item.id}>{item.name}</li>
                )
              })}
            </ul>
            :
            <p>This character has related starships.</p>
          }
        </div>
        <div>
          <strong>Films</strong>
          { films.length ?
            <ul>
              {films.map((item)=>{
                return (
                  <li key={item.id}>{item.title}</li>
                )
              })}
            </ul>
            :
            <p>This character has related films.</p>
          }
        </div>
      </div>
      <style jsx>{`
      /* styles here */
      `}</style>
    </div>
  )
}

export default PersonElement
