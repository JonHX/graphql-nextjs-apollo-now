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
        <p>
          <strong>Name:</strong>
          {name}
        </p>
        <p>
          <strong>Gender:</strong>
          {gender}
        </p>
        <p>
          <strong>Species:</strong>
          {speciesName}
        </p>
      </div>
      <div className="col-6 col-sm-6 col-lg-12">
        <p>
          <strong>Homeworld:</strong>
          {homeWorldName}
        </p>
        <p>
          <strong>Height:</strong>
          {height}
cm
        </p>
        <p>
          <strong>Hair Color:</strong>
          {hairColor}
        </p>
      </div>
    </div>
    <div className="col-md-12 col-lg-4 p-3">
      <h3>Related</h3>
      <div>
        <strong>Vehicles</strong>
        {vehicles.length ? (
          <List listItems={vehicles} slug="vehicle" />
        ) : (
          <p>
            <span>This character has no related vehicles.</span>
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
            <span>This character has no related starships.</span>
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
            <span>This character has no related films.</span>
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

export default PersonElement
