module.exports = {
  id: 'testID',
  name: 'testName',
  listItemsArray: [
    { id: 'cGVvcGxlOjE=', name: 'Luke Skywalker' },
    { id: 'cGVvcGxlOjI=', name: 'C-3PO' },
  ],
  listItemsArrayLarge: [
    { id: 'cGVvcGxlOjE=', name: 'Luke Skywalker' },
    { id: 'cGVvcGxl2OjI=', name: 'C-3PO' },
    { id: 'cGVv3cGxlOjE=', name: 'Luke Skywalker' },
    { id: 'cGV4vcGxlOjI=', name: 'C-3PO' },
    { id: 'cG5VvcGxlOjE=', name: 'Luke Skywalker' },
    { id: 'cG6VvcGxlOjI=', name: 'C-3PO' },
    { id: 'cG2VvcGxlOjE=', name: 'Luke Skywalker' },
    { id: 'cGVvc3GxlOjI=', name: 'C-3PO' },
    { id: 'cGVvc2GxlOjE=', name: 'Luke Skywalker' },
    { id: 'cGVvc1GxlOjI=', name: 'C-3PO' },
    { id: 'cGVv4cGxlOjE=', name: 'Luke Skywalker' },
    { id: 'cGVv5cGxlOjI=', name: 'C-3PO' },
    { id: 'cGVv7cGxlOjE=', name: 'Luke Skywalker' },
    { id: 'cGVv8cGxlOjI=', name: 'C-3PO' },
  ],
  slug: 'testSlug',
  personObject: {
    name: 'Luke Skywalker',
    id: 'cGVvcGxlOjE=',
    gender: 'male',
    height: 172,
    birthYear: '19BBY',
    hairColor: 'blond',
    species: {
      name: 'Human',
    },
    homeworld: {
      name: 'Tatooine',
    },
    filmConnection: {
      films: [{
        id: 'ZmlsbXM6MQ==',
        title: 'A New Hope',
      }],
    },
    vehicleConnection: {
      vehicles: [{
        id: 'dmVoaWNsZXM6MTQ=',
        name: 'Snowspeeder',
      }],
    },
    starshipConnection: {
      starships: [{
        id: 'c3RhcnNoaXBzOjEy',
        name: 'X-wing',
      }],
    },
  },
  vehicleObject: {
    name: 'Snowspeeder',
    passengers: '0',
    vehicleClass: 'airspeeder',
    manufacturers: [
      'Incom corporation',
    ],
    maxAtmospheringSpeed: 650,
    id: 'dmVoaWNsZXM6MTQ=',
    model: 't-47 airspeeder',
    filmConnection: {
      films: [
        {
          id: 'ZmlsbXM6Mg==',
          title: 'The Empire Strikes Back',
        },
      ],
    },
    pilotConnection: {
      pilots: [
        {
          name: 'Luke Skywalker',
          id: 'cGVvcGxlOjE=',
        },
      ],
    },
    crew: '2',
    cargoCapacity: 10,
  },
}
