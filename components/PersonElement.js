import PropTypes from 'prop-types'
import { Image, List } from '.'

const PersonElement = ({
  person: {
    gender,
    hairColor,
    height,
    homeworld: { name: homeWorldName },
    id,
    name,
    species: { name: speciesName },
    filmConnection: { films },
    starshipConnection: { starships },
    vehicleConnection: { vehicles },
  },
}) => (
  <div className="row">
    <div className="col-md-4 col-lg-3 p-3 text-center">
      <Image id={id} name={name} />
    </div>
    <div className="col-md-8 col-sm-12 col-lg-4 p-3 row">
      <div className="col-6 col-sm-6 col-lg-12">
        <p className="name">
          <strong>Name:</strong>
          {name}
        </p>
        <p className="gender">
          <strong>Gender:</strong>
          {gender}
        </p>
        <p className="species">
          <strong>Species:</strong>
          {speciesName}
        </p>
      </div>
      <div className="col-6 col-sm-6 col-lg-12">
        <p className="homeWorld">
          <strong>Homeworld:</strong>
          {homeWorldName}
        </p>
        <p className="height">
          <strong>Height:</strong>
          {height}
cm
        </p>
        <p className="hairColor">
          <strong>Hair Colour:</strong>
          {hairColor}
        </p>
      </div>
    </div>
    <div className="col-md-12 col-lg-4 p-3">
      <h3>Related</h3>
      <div>
        <strong>Vehicles</strong>
        {vehicles.length ? (
          <List listItems={vehicles} slug="vehicle" thumbnail />
        ) : (
          <p>
            <span className="noVehicles">This character has no related vehicles.</span>
          </p>
        )}
      </div>
      <div>
        <strong>Starships</strong>
        {starships.length ? (
          <ul>
            {starships.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>
            <span className="noStarships">This character has no related starships.</span>
          </p>
        )}
      </div>
      <div>
        <strong>Films</strong>
        {films.length ? (
          <ul>
            {films.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        ) : (
          <p>
            <span className="noFilms">This character has no related films.</span>
          </p>
        )}
      </div>
    </div>
    <style jsx>
      {`
        div p {
          font-size: 1.4em;
        }
        div p strong,
        div span {
          font-size: 14px;
          display: block;
          clear: right;
        }
      `}
    </style>
  </div>
)

PersonElement.propTypes = {
  person: PropTypes.shape({
    gender: PropTypes.string,
    hairColor: PropTypes.string,
    height: PropTypes.number,
    homeworld: PropTypes.object,
    id: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.object,
    filmConnection: PropTypes.object,
    starshipConnection: PropTypes.object,
    vehicleConnection: PropTypes.object
  }).isRequired
}

export default PersonElement
