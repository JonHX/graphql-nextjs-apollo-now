import { Image, List } from '.'

const VehicleElement = ({
  vehicle: {
    cargoCapacity,
    crew,
    filmConnection: { films },
    id,
    maxAtmospheringSpeed,
    model,
    name,
    passengers,
    pilotConnection: { pilots },
    vehicleClass,
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
          <strong>Model:</strong>
          {model}
        </p>
        <p>
          <strong>Class:</strong>
          {vehicleClass}
        </p>
      </div>
      <div className="col-6 col-sm-6 col-lg-12">
        <p>
          <strong>Crew/Passengers</strong>
          {crew}
/
          {passengers}
        </p>
        <p>
          <strong>Cargo Capacity:</strong>
          {cargoCapacity}
cm
        </p>
        <p>
          <strong>Speed:</strong>
          {maxAtmospheringSpeed}
km/h
        </p>
      </div>
    </div>
    <div className="col-md-12 col-lg-4 p-3">
      <h3>Related</h3>
      <div>
        <strong>Pilots</strong>
        {pilots.length ? (
          <List listItems={pilots} slug="person" />
        ) : (
          <p>
            <span>This character has no related Pilots.</span>
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

export default VehicleElement
